"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/quiz/fields";
import { api } from "@/lib/api";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 5) {
      setError("Please fill in every field with a valid email.");
      return;
    }
    setError("");
    setStatus("sending");
    const res = await api.submitContact({ name, email, message });
    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-forest/10 bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest-400" />
        <h3 className="mt-4 font-display text-xl text-forest">
          Thanks, {name.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-sm text-muted">
          Your message is with our care team — we&apos;ll reply within one
          working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-forest/10 bg-white p-6 md:p-8"
    >
      <div className="space-y-4">
        <TextField label="Your name" value={name} onChange={setName} placeholder="Jane Doe" />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
        />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-forest">
            How can we help?
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us a little about what you're looking for…"
            className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none focus:border-clay focus:ring-2 focus:ring-clay/20"
          />
        </label>
      </div>

      {error && <p className="mt-3 text-sm text-clay">{error}</p>}

      <Button
        type="submit"
        variant="secondary"
        className="mt-6 w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
