"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ cmd?: string; text: string | React.ReactNode }>>([
    { text: "Welcome to Swati's Cloud CLI [v1.0.0]" },
    { text: 'Type "help" to see available commands or "superpower" to unlock special tech traits.' }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { cmd: inputVal, text: "" }];

    switch (cmd) {
      case "help":
        newHistory[newHistory.length - 1].text = (
          <div className="space-y-1 text-zinc-300">
            <div>Available Commands:</div>
            <div>• <span className="text-amber-400">about</span> : Display background & vision</div>
            <div>• <span className="text-amber-400">skills</span> : List primary technical superpower skills</div>
            <div>• <span className="text-amber-400">projects</span> : Show active AWS & full-stack projects</div>
            <div>• <span className="text-amber-400">superpower</span> : Reveal the core Tech Superpower</div>
            <div>• <span className="text-amber-400">aws</span> : Detail AWS Amplify & cloud stack used here</div>
            <div>• <span className="text-amber-400">clear</span> : Clear terminal history</div>
          </div>
        );
        break;

      case "about":
        newHistory[newHistory.length - 1].text = PORTFOLIO_DATA.bio.join(" ");
        break;

      case "skills":
        newHistory[newHistory.length - 1].text = (
          <div className="space-y-1">
            {PORTFOLIO_DATA.skills.map((cat, i) => (
              <div key={i}>
                <span className="text-amber-400 font-bold">{cat.category}:</span>{" "}
                {cat.skills.map((s) => s.name).join(", ")}
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        newHistory[newHistory.length - 1].text = (
          <div className="space-y-2">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id}>
                <div className="font-semibold text-amber-300">{p.title}</div>
                <div className="text-xs text-zinc-400">{p.description}</div>
                <div className="text-[11px] text-zinc-500">AWS: {p.awsServices.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "superpower":
        newHistory[newHistory.length - 1].text = (
          <div className="p-2 border border-amber-500/40 bg-amber-500/10 rounded text-amber-200">
            <div className="font-bold">✨ {PORTFOLIO_DATA.superpower.title}</div>
            <div>{PORTFOLIO_DATA.superpower.headline}</div>
            <div className="italic text-xs mt-1 text-amber-300/80">
              "{PORTFOLIO_DATA.superpower.secretQuote}"
            </div>
          </div>
        );
        break;

      case "aws":
        newHistory[newHistory.length - 1].text =
          "⚡ Hosted on AWS Amplify Hosting with Git-triggered Continuous Deployment, edge caching, SSL certification, and zero server maintenance.";
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory[newHistory.length - 1].text = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[540px] max-h-[460px] bg-zinc-950/95 border border-zinc-800 rounded-xl shadow-2xl backdrop-blur-md flex flex-col font-mono text-xs text-zinc-200 overflow-hidden">
      {/* Title bar */}
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800 select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-zinc-300">builder-cli@swati:~</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal content */}
      <div className="p-4 flex-1 overflow-y-auto space-y-2.5 max-h-[340px]">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.cmd && (
              <div className="flex items-center gap-1.5 text-zinc-400">
                <span className="text-amber-500">guest@aws:~$</span>
                <span>{item.cmd}</span>
              </div>
            )}
            <div className="text-zinc-300 leading-relaxed">{item.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Prompt input */}
      <form onSubmit={handleCommand} className="p-3 bg-zinc-900/60 border-t border-zinc-800 flex items-center gap-2">
        <span className="text-amber-400 font-bold">guest@aws:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'superpower'..."
          className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-600 font-mono text-xs"
          autoFocus
        />
      </form>
    </div>
  );
};
