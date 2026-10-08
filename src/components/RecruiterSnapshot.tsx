import React, { useState } from 'react';
import {
  X,
  Printer,
  Mail,
  Phone,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';
import { personalInfo, experiences, recruiterSnapshotData } from '../data/portfolioData';

interface RecruiterSnapshotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterSnapshot: React.FC<RecruiterSnapshotProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl text-slate-100 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                30-Second Recruiter & Hiring Manager Snapshot
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Concise, high-density candidate summary based strictly on CV
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Print Snapshot"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Candidate Overview Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="md:col-span-2 space-y-1.5">
              <div className="text-xl font-bold text-white flex items-center gap-2">
                {personalInfo.name}
              </div>
              <div className="text-sm font-mono text-emerald-400 font-semibold">
                {personalInfo.title}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {personalInfo.summary}
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4 text-xs font-mono">
              <div className="text-slate-400">
                <span className="text-slate-500">Exp:</span>{' '}
                <strong className="text-white">{recruiterSnapshotData.yearsExperience}</strong>
              </div>
              <div className="text-slate-400">
                <span className="text-slate-500">Location:</span> {personalInfo.location}
              </div>
              <div className="text-slate-400">
                <span className="text-slate-500">English:</span> {recruiterSnapshotData.englishLevel}
              </div>
              <div className="text-slate-400">
                <span className="text-slate-500">Notice:</span> Immediate / Open to Discussions
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-lg bg-slate-850/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Experience</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">2+ Years</div>
              <div className="text-[11px] text-slate-400">Backend Dev</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-850/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Core Stack</div>
              <div className="text-lg font-bold text-white mt-1">Java & Spring</div>
              <div className="text-[11px] text-slate-400">Boot, JPA, MySQL</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-850/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Engineering Track</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">ITI Graduate</div>
              <div className="text-[11px] text-slate-400">Capstone Team Lead</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-850/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Military Service</div>
              <div className="text-lg font-bold text-white mt-1">Officer (2017)</div>
              <div className="text-[11px] text-slate-400">Leadership & Comms</div>
            </div>
          </div>

          {/* Core Technologies */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Core Tech Stack & Concepts
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Java',
                'Spring Boot',
                'Spring Data JPA',
                'Hibernate',
                'Spring Security',
                'RESTful APIs',
                'Microservices',
                'MySQL & Native SQL',
                'OOP & SOLID Principles',
                'Design Patterns',
                'Clean Code',
                'Data Structures & Algorithms',
                'JUnit',
                'Postman',
                'Swagger',
                'Maven',
                'Git & GitHub',
                'Angular',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Real-World Production History */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Professional Production History
            </h3>
            <div className="space-y-2.5">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div className="font-semibold text-white">
                      {exp.role}{' '}
                      <span className="text-emerald-400 font-normal">@ {exp.company}</span>
                    </div>
                    <div className="font-mono text-slate-400 text-[11px]">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Direct Strip */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
            <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Direct Contact Details for Hiring Managers
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-slate-950/70 border border-slate-800">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-emerald-400"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-slate-950/70 border border-slate-800">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {personalInfo.phone}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-slate-400 hover:text-emerald-400"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors inline-flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span className="text-slate-500 text-[10px]">↗</span>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <span className="text-slate-500 text-[10px]">↗</span>
              </a>
              <a
                href={personalInfo.links.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors inline-flex items-center gap-1.5"
              >
                <span>HackerRank</span>
                <span className="text-slate-500 text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Open to Java Backend, Spring Boot, and Software Engineer opportunities.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            Close Snapshot
          </button>
        </div>
      </div>
    </div>
  );
};
