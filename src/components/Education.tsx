import React from 'react';
import {
  GraduationCap,
  Terminal,
  Award,
} from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Formal Engineering Training
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Formal technical education from Egypt's premier institute alongside foundational natural science degrees.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((item) => {
            const isITI = item.id === 'iti';

            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
                  isITI
                    ? 'bg-slate-900/90 border border-emerald-500/40 shadow-xl lg:col-span-1 ring-1 ring-emerald-500/20'
                    : 'bg-slate-900/50 border border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isITI
                          ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-855">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                      {item.institution}
                    </div>
                  </div>

                  {item.details && item.details.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        {isITI ? 'Curriculum Focus:' : 'Focus:'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 text-xs font-mono rounded ${
                              isITI
                                ? 'bg-slate-950 text-slate-300 border border-slate-800'
                                : 'text-slate-400 text-xs font-sans'
                            }`}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {isITI && (
                  <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Graduated & Served as Capstone Team Leader</span>
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
