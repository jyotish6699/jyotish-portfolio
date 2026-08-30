import { terminalCommands } from "@/data/terminal";
import TerminalOutput from "./TerminalOutput";
import TerminalPrompt from "./TerminalPrompt";

export default function TerminalCard() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Terminal
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
          Inside my <span className="text-gradient">workspace.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          A small interactive view of what I build, explore, and work with.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />

          <span className="ml-3 font-mono text-xs text-slate-400">
            jyotish@portfolio
          </span>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <TerminalPrompt command="whoami" />
            <TerminalOutput lines={terminalCommands.whoami} />
          </div>

          <div>
            <TerminalPrompt command="focus" />
            <TerminalOutput lines={terminalCommands.focus} />
          </div>

          <div>
            <TerminalPrompt command="projects" />
            <TerminalOutput lines={terminalCommands.projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
