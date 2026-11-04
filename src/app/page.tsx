"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Terminal as TerminalIcon,
  Cloud,
  Code2,
  ExternalLink,
  Award,
  Zap,
  Layers,
  ArrowRight
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SuperpowerModal } from "@/components/SuperpowerModal";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  const [isSuperpowerOpen, setIsSuperpowerOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[160px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-bold text-zinc-950 text-sm shadow-md shadow-amber-500/20">
              S
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
              {PORTFOLIO_DATA.name}
              <span className="text-amber-500">.cloud</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#superpowers" className="hover:text-amber-400 transition-colors">
              Tech Superpowers
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#achievements" className="hover:text-amber-400 transition-colors">
              Achievements
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Interactive Feature HUD Buttons */}
            <button
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 text-xs font-mono transition-all"
              title="Open CLI Terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            <button
              onClick={() => setIsSuperpowerOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 shadow-md shadow-amber-500/20 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Skill Forge</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-24">
        {/* Hero Section */}
        <section className="relative space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS Student Builder Challenge • Built & Hosted on AWS Amplify</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building with Cloud Precision &amp;{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Creative Superpowers
            </span>
            .
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            {PORTFOLIO_DATA.tagline} Powered by rapid deployment cycles, serverless workflows, and clean interactive front-ends.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setIsSuperpowerOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20 transition-all hover:gap-3"
            >
              <span>Explore Superpower Engine</span>
              <Sparkles className="w-4 h-4" />
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Core Section 1: About Me */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Code2 className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-zinc-300 leading-relaxed bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl">
              {PORTFOLIO_DATA.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">
                  📍 {PORTFOLIO_DATA.location}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">
                  ☁️ AWS Amplify CI/CD
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">
                  ⚡ Serverless Native
                </span>
              </div>
            </div>

            {/* Quick Superpower Highlight Card */}
            <div className="bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-950 border border-amber-500/30 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Zap className="w-4 h-4" />
                  <span>My Tech Superpower</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{PORTFOLIO_DATA.superpower.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {PORTFOLIO_DATA.superpower.headline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/20">
                <button
                  onClick={() => setIsSuperpowerOpen(true)}
                  className="w-full text-center py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-colors"
                >
                  Test Skill Combinations →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Section 2: Skills & Tech Superpowers */}
        <section id="superpowers" className="scroll-mt-24 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Layers className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Skills &amp; Tech Superpowers
              </h2>
            </div>

            <button
              onClick={() => setIsSuperpowerOpen(true)}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
            >
              <span>Open Skill Forge</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((category, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-all space-y-4"
              >
                <h3 className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">
                  {category.category}
                </h3>
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60 text-xs"
                    >
                      <span className="font-medium text-zinc-300">{skill.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-mono">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Section 3: Projects & Achievements */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Cloud className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects &amp; Cloud Work</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                      {proj.featured ? "Featured" : "Project"}
                    </span>
                    <div className="flex items-center gap-2">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-500 hover:text-zinc-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">{proj.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="text-[11px] text-zinc-400">
                    <span className="font-semibold text-zinc-300">AWS: </span>
                    {proj.awsServices.join(", ")}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Achievements & Milestones */}
        <section id="achievements" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Achievements &amp; Milestones</h2>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            {PORTFOLIO_DATA.achievements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AWS Challenge Architecture Callout */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-950 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-amber-400" />
              AWS Amplify CI/CD Architecture
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl">
              This site is deployed to AWS Amplify Hosting via Git integration. Whenever code is pushed to GitHub, Amplify triggers an automated build container, compiles Next.js static assets, and replicates them to Amazon CloudFront global edge nodes with instant SSL.
            </p>
          </div>
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="whitespace-nowrap px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 border border-zinc-700 transition-colors"
          >
            Inspect in CLI Terminal →
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
        <p>Built with Next.js &amp; Tailwind CSS • Deployed on AWS Amplify Hosting</p>
        <p className="mt-1">Submitted for AWS Student Builder Challenge</p>
      </footer>

      {/* Interactive Modals */}
      <SuperpowerModal isOpen={isSuperpowerOpen} onClose={() => setIsSuperpowerOpen(false)} />
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
