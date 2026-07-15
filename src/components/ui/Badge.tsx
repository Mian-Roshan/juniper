import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-forest-600 backdrop-blur",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
