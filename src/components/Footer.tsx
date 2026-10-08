import React from 'react';
import { Terminal, ArrowUp, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">{personalInfo.name}</div>
              <div className="text-xs font-mono text-emerald-400">
                {personalInfo.title} • Giza, Egypt
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#about"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-mono"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-500/80" />
            <span>Built strictly from verified CV data • Ready for Production & Deployment</span>
          </div>
          <div>
            React + TypeScript + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
