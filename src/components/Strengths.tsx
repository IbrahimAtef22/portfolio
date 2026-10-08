import React from 'react';
import {
  ShieldCheck,
  Brain,
  MessageSquare,
  Terminal,
  CheckCircle2,
  Medal,
} from 'lucide-react';
import { strengths, personalInfo } from '../data/portfolioData';

export const Strengths: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Leadership')) {
      return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
    if (category.includes('Learning')) {
      return <Brain className="w-5 h-5 text-blue-400" />;
    }
    return <MessageSquare className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="strengths" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>08 // Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership, Discipline & Problem-Solving
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Professional traits forged through military officer service, technical team leadership at ITI, and continuous self-learning.
          </p>
        </div>

        {/* Military Service & Leadership Card */}
        <div className="mb-10 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <Medal className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  Military Service as an Officer
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  Completed in {personalInfo.militaryService.year}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {personalInfo.militaryService.description}
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 shrink-0">
            Leadership • Accountability • Resilience
          </div>
        </div>

        {/* Strengths 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {getIcon(group.category)}
                </div>
                <h3 className="text-base font-bold text-white">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {group.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
