import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] px-4 py-2 text-sm font-medium text-[var(--foreground)] ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
