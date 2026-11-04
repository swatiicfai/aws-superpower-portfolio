"use client";

import React, { useState } from "react";
import { Sparkles, Terminal as TerminalIcon, X, Zap, Cpu, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface SuperpowerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_POWER_ELEMENTS = [
  { id: "amplify", name: "AWS Amplify Hosting", role: "Lightning CI/CD" },
  { id: "serverless", name: "Serverless Compute", role: "Infinite Elasticity" },
  { id: "react", name: "Next.js & React", role: "Fluid Interfaces" },
  { id: "typescript", name: "Strict TypeScript", role: "Zero-Fault Resilience" },
  { id: "tailwind", name: "Tailwind Styling", role: "Atomic Velocity" },
  { id: "dynamo", name: "Amazon DynamoDB", role: "Sub-millisecond Scale" }
];

export const SuperpowerModal: React.FC<SuperpowerModalProps> = ({ isOpen, onClose }) => {
  const [selectedElements, setSelectedElements] = useState<string[]>(["amplify", "react"]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesizedPower, setSynthesizedPower] = useState<string | null>(
    "🚀 Rapid Cloud Delivery Engine: Blazing-fast interactive UI with automated AWS Amplify edge distribution!"
  );

  if (!isOpen) return null;

  const toggleElement = (id: string) => {
    if (selectedElements.includes(id)) {
      if (selectedElements.length > 1) {
        setSelectedElements(selectedElements.filter((item) => item !== id));
      }
    } else {
      if (selectedElements.length < 3) {
        setSelectedElements([...selectedElements, id]);
      }
    }
  };

  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setSynthesizedPower(null);

    setTimeout(() => {
      setIsSynthesizing(false);
      const randomPowers = [
        "⚡ Serverless Archmage: Deploys globally replicated micro-apps with zero maintenance overhead!",
        "🛡️ Fault-Tolerant Fortress: Blends type-safe interfaces with self-healing cloud microservices!",
        "🌟 Hyper-Velocity Catalyst: Builds from idea to live production on AWS before coffee gets cold!",
        "✨ Intelligent Cloud Nexus: Bridges reactive front-ends seamlessly with AWS cloud computing!"
      ];
      const pick = randomPowers[Math.floor(Math.random() * randomPowers.length)];
      setSynthesizedPower(pick);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Superpower Skill Forge</h2>
              <p className="text-xs text-zinc-400">Combine my core tech skills to synthesize custom tech powers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions */}
        <div className="my-5">
          <p className="text-sm text-zinc-300">
            Select 2 to 3 skill components below and click <span className="text-amber-400 font-semibold">Synthesize Superpower</span> to see how they come together:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
            {AVAILABLE_POWER_ELEMENTS.map((elem) => {
              const active = selectedElements.includes(elem.id);
              return (
                <button
                  key={elem.id}
                  onClick={() => toggleElement(elem.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    active
                      ? "bg-amber-500/20 border-amber-500/60 shadow-sm shadow-amber-500/20 text-amber-200"
                      : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-300"
                  }`}
                >
                  <div className="text-xs font-semibold flex items-center justify-between">
                    <span>{elem.name}</span>
                    {active && <CheckCircle className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{elem.role}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleSynthesize}
            disabled={isSynthesizing}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95 disabled:opacity-50"
          >
            {isSynthesizing ? (
              <>
                <Cpu className="w-4 h-4 animate-spin" />
                <span>Synthesizing...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Synthesize Superpower</span>
              </>
            )}
          </button>
        </div>

        {/* Output Card */}
        {synthesizedPower && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/30">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Resulting Tech Superpower</span>
            </div>
            <p className="text-sm font-medium text-zinc-200">{synthesizedPower}</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
          <span>AWS Student Builder Challenge Feature</span>
          <button onClick={onClose} className="hover:underline text-zinc-400">
            Close HUD
          </button>
        </div>
      </div>
    </div>
  );
};
