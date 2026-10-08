import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { careerMilestones } from '../data/portfolioData';

export const CareerJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // Career Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Scientific Analysis to Backend Engineering
          </h2>
          <p className="text-slate-400 max-w-3xl text-base">
            A purposeful transition driven by analytical rigor, continuous self-learning, discipline, and software craftsmanship.
          </p>
        </div>

        {/* Narrative Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Adaptability, Persistence & Engineering Logic
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Scientific methodology directly translates into clean architectures, systematic debugging, and resilient data structures.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
            <span>Progressive Mastery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Timeline Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerMilestones.map((m, idx) => {
            const isHighlight = m.highlight;

            return (
              <div
                key={m.period}
                className={`p-5 rounded-2xl flex flex-col justify-between transition-all ${
                  isHighlight
                    ? 'bg-slate-900/90 border border-emerald-500/40 shadow-lg shadow-emerald-950/30'
                    : 'bg-slate-900/40 border border-slate-850 hover:border-slate-800'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      {m.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {m.stage}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {m.domain}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {isHighlight && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Software Landmark</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
