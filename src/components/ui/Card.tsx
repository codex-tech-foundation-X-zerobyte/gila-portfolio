import type { PropsWithChildren } from "react";

export function Card({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-6 transition-colors duration-150 ${className}`}
    >
      {children}
    </div>
  );
}
