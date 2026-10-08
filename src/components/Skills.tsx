import React from 'react';
import {
  Server,
  Code2,
  Database,
  Layers,
  Terminal,
  CheckCircle2,
  Wrench,
  GitBranch,
  Layout,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'programming':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'architecture':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'testing-tools':
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'devops-vcs':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'web-frontend':
        return <Layout className="w-5 h-5 text-sky-400" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend Engineering Toolkit
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Categorized strictly from CV without inflated metrics. Java and the Spring ecosystem take center stage.
          </p>
        </div>

        {/* Featured Prominence Box: Java & Spring Boot Core */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Primary Engineering Core</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Java & Enterprise Spring Ecosystem
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Core focus on robust backend microservices, declarative data persistence, business-rule validation, and enterprise REST APIs.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Java', desc: 'Core OOP, Collections, Java 8+' },
                { name: 'Spring Boot', desc: 'Microservices & REST' },
                { name: 'Spring Data JPA', desc: 'Persistence Abstraction' },
                { name: 'Hibernate', desc: 'ORM & Relational Mapping' },
                { name: 'MySQL & SQL', desc: 'Complex Queries & Reporting' },
              ].map((pill) => (
                <div
                  key={pill.name}
                  className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-emerald-500/30 text-left"
                >
                  <div className="font-mono text-sm font-bold text-emerald-300">
                    {pill.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">{pill.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const isPrimary = group.isPrimary;

            return (
              <div
                key={group.id}
                className={`p-6 rounded-2xl transition-all duration-200 ${
                  isPrimary
                    ? 'bg-slate-900/90 border border-emerald-500/30 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    {getCategoryIcon(group.id)}
                  </div>
                  <h4 className="font-bold text-sm text-white">{group.category}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                        isPrimary
                          ? 'bg-emerald-950/60 text-emerald-200 border border-emerald-500/30 font-medium'
                          : 'bg-slate-950 text-slate-300 border border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
