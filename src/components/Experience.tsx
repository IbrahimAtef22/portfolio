import React from 'react';
import {
  Calendar,
  Building,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Backend Development
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Detailed breakdown of production backend services, microservices architecture, and SQL database implementations.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 sm:before:left-4 md:before:left-5 before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, index) => {
            const isLatest = index === 0;

            return (
              <div
                key={exp.id}
                className="relative pl-10 sm:pl-12 md:pl-14 group"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-1.5 sm:left-2 md:left-3 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isLatest
                      ? 'bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : 'bg-slate-900 border-slate-600 group-hover:border-emerald-400'
                  }`}
                />

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {isLatest && (
                          <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                            Most Recent
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-emerald-400 font-mono mt-1 font-semibold">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-850 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="py-5 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Key Responsibilities & Contributions:
                    </div>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-300 hover:border-emerald-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
