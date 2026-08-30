type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <span className="eyebrow">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
      />

      {children}
    </span>
  );
}
