import React from 'react';
import {
  Award,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accreditations & Verified Credentials
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Verified technical coursework from global institutions including Duke University, Harvard University, and ITI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-850">
                    {cert.issuer}
                  </span>
                  <Award className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-850 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 text-[11px]">Verification:</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-slate-900 transition-all"
                  title="Verify credential online"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
