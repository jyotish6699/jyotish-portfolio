import type { HTMLAttributes } from "react";

type PortfolioCardProps = HTMLAttributes<HTMLDivElement>;

export function PortfolioCard({
  className = "",
  children,
  ...props
}: PortfolioCardProps) {
  return (
    <div
      className={`portfolio-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
