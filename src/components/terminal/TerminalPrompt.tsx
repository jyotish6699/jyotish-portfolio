type TerminalPromptProps = {
  command: string;
};

export default function TerminalPrompt({
  command,
}: TerminalPromptProps) {
  return (
    <div className="font-mono text-sm">
      <span className="text-purple-500">jyotish</span>
      <span className="text-gray-500">@portfolio</span>
      <span className="text-gray-500">:~$ </span>
      <span>{command}</span>
    </div>
  );
}
