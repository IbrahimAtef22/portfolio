import React, { useState } from 'react';
import {
  FolderGit2,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = ['All', 'Full-Stack', 'Backend & Security', 'REST API & Database'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // Technical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Backend & Full-Stack Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Verified implementations emphasizing Spring Boot microservice design, Spring Security access control, and database persistence.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFullStack = project.category === 'Full-Stack';
            const isSecurity = project.category === 'Backend & Security';

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden group"
              >
                {/* Project Header Bar */}
                <div className="p-6 border-b border-slate-800/80 space-y-3 bg-slate-950/40">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md border ${
                        isFullStack
                          ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30'
                          : isSecurity
                          ? 'bg-purple-950/60 text-purple-300 border-purple-500/30'
                          : 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {project.category}
                    </span>
                    <FolderGit2 className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {project.description}
                  </p>
                </div>

                {/* Key Features Bullet Points */}
                <div className="p-6 flex-1 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Implementation Features:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-slate-800/60">
                    <div className="text-[11px] font-mono text-slate-500 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Repository Link Buttons */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  {project.links.backendGithub && (
                    <a
                      href={project.links.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-750 text-slate-200 hover:text-white hover:border-emerald-500/50 hover:bg-slate-850 transition-all"
                      title="View Backend Repository on GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Backend Repo</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}

                  {project.links.frontendGithub && (
                    <a
                      href={project.links.frontendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-750 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-850 transition-all"
                      title="View Frontend Repository on GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Frontend Repo</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-750 text-slate-200 hover:text-white hover:border-emerald-500/50 hover:bg-slate-850 transition-all"
                      title="View Project Repository on GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
