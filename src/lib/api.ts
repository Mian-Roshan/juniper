/* Thin client for the Laravel API. */

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export type ApiResult<T = unknown> =
  | { ok: true; data: T }
  | { ok: false; error: string; fields?: Record<string, string[]> };

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(init?.headers ?? {}),
      },
    });

    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        ok: false,
        error: body?.message ?? `Request failed (${res.status})`,
        fields: body?.errors,
      };
    }
    return { ok: true, data: body as T };
  } catch (err) {
    return {
      ok: false,
      error:
        err instanceof Error
          ? `Could not reach the server (${err.message}). Is the API running?`
          : "Network error.",
    };
  }
}

export const api = {
  submitQuiz: (payload: Record<string, unknown>) =>
    request<{ id: number; recommended: string }>("/quiz", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  submitContact: (payload: Record<string, unknown>) =>
    request<{ id: number }>("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  createCheckout: (payload: { plan: string; email: string }) =>
    request<{ url: string }>("/checkout", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
