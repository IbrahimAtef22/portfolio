import React from 'react';
import {
  Code2,
  ShieldCheck,
  GraduationCap,
  Layers,
  Terminal,
  Brain,
  Globe2,
} from 'lucide-react';
import { languages } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Precision & Backend Architecture
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            How a scientific foundation in analytical chemistry and intensive software engineering training shaped a dedicated Java Backend Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                Backend-First Professional Identity
              </h3>
              <p>
                I am a <strong className="text-white">Java Backend Developer</strong> with{' '}
                <strong className="text-emerald-300">2+ years of professional experience</strong>{' '}
                architecting and implementing RESTful APIs, microservices, and database systems using{' '}
                <span className="text-white font-medium">Java, Spring Boot, Spring Data JPA, Hibernate, and MySQL</span>.
              </p>
              <p>
                My production work centers on solving complex business problems: from implementing corporate billing balance allocations and soft-delete merchant policy management at <strong className="text-white">Solarus Smart Solutions</strong>, to building electric vehicle charging station CRUD services and SQL reporting queries at <strong className="text-white">One Solution</strong>.
              </p>
            </div>

            {/* The Positive Career Transition Story */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-400" />
                The Transition from Chemistry to Software Engineering
              </h3>
              <p>
                My academic journey started in the sciences, completing a{' '}
                <span className="text-slate-200">Bachelor of Science in Chemistry</span> and a{' '}
                <span className="text-slate-200">Postgraduate Diploma in Analytical Biochemistry</span> at Tanta University.
              </p>
              <p className="text-slate-300">
                This scientific background cultivated a deep respect for <strong className="text-white">quantitative precision, empirical problem-solving, and methodical analysis</strong>. Transferring these capabilities into computing, I graduated from the rigorous <strong className="text-white">Software Engineering Fundamentals Track at the Information Technology Institute (ITI)</strong>, where I was trusted to serve as <strong className="text-emerald-300">Team Leader for our final graduation project</strong>.
              </p>
              <p className="text-slate-300">
                This transition reflects my continuous learning capacity, persistence, and disciplined work ethic—qualities reinforced by serving as an <strong className="text-white">officer during military service in 2017</strong>.
              </p>
            </div>

            {/* Languages Bar */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Globe2 className="w-4 h-4 text-emerald-400" />
                <span>Languages:</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                {languages.map((lang) => (
                  <div key={lang.language} className="flex items-center gap-1.5">
                    <span className="text-white font-semibold">{lang.language}:</span>
                    <span className="text-emerald-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Professional Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Microservices & Enterprise APIs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hands-on production experience designing RESTful APIs within microservices architectures, handling complex domain validations, soft deletes, and exception handling hierarchies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">ITI Software Engineering Track</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intensive foundational training in OOP, Data Structures & Algorithms, Database Design, OS, Networks, and Software Engineering. Served as Capstone Team Leader.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Military Officer Leadership (2017)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Military officer service developed deep personal accountability, situational leadership, operational teamwork, and strong organizational skills that directly enhance engineering delivery.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 p-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Targeting:</span>
                <span className="text-emerald-400 font-semibold">Java Backend / Remote & Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
