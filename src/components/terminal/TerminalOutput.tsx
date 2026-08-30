type TerminalOutputProps = {
  lines: string[];
};

export default function TerminalOutput({
  lines,
}: TerminalOutputProps) {
  return (
    <div className="mt-1 space-y-1 pl-4 font-mono text-sm text-slate-600">
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>
  );
}
