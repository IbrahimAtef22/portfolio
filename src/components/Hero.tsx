import React, { useState } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenSnapshot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSnapshot }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-900">
      {/* Architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Subtle technical glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Recruiter Information */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Java Backend / Software Engineer Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                <MapPin className="w-3 h-3 text-slate-400" />
                {personalInfo.location} • Remote / Relocation
              </span>
            </div>

            {/* Candidate Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-emerald-500 rounded" />
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                  {personalInfo.title}
                </h2>
              </div>
            </div>

            {/* Direct Professional Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Java Backend Developer with{' '}
              <strong className="text-white font-semibold">2+ years of professional experience</strong>{' '}
              building high-reliability backend services using{' '}
              <strong className="text-emerald-300 font-medium">Java, Spring Boot, RESTful APIs, Spring Data JPA, Hibernate,</strong> and{' '}
              <strong className="text-emerald-300 font-medium">MySQL</strong>. Experienced in microservices architecture, complex business-rule enforcement, SQL reporting analytics, and scalable data operations.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Java',
                'Spring Boot',
                'Microservices',
                'RESTful APIs',
                'Spring Data JPA',
                'Hibernate',
                'MySQL & Native SQL',
                'OOP & Clean Code',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 font-medium text-sm transition-all"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Experience</span>
              </a>

              <button
                onClick={onOpenSnapshot}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/40 font-medium text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>30s Recruiter Scan</span>
              </button>
            </div>

            {/* Quick Contact & Live Profile Links */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center gap-3 text-xs font-mono">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-slate-200 hover:border-slate-700 transition-all"
                title="Copy email to clipboard"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-slate-200 hover:border-slate-700 transition-all"
                title="Copy phone to clipboard"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-850 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-850 transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.links.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-850 transition-all"
                >
                  <HackerRankIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HackerRank</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Architecture & Production Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-5 sm:p-6 backdrop-blur">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    BackendArchitecture.java
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Production Verified
                </span>
              </div>

              {/* Technical Code Representation */}
              <div className="font-mono text-xs text-slate-300 space-y-2.5 leading-relaxed overflow-x-auto">
                <div className="text-slate-500">// Engineering Profile: Core Backend Focus</div>
                <div>
                  <span className="text-purple-400">@Service</span>
                </div>
                <div>
                  <span className="text-blue-400">public class</span>{' '}
                  <span className="text-emerald-400 font-semibold">BackendService</span>{' '}
                  <span className="text-slate-400">&#123;</span>
                </div>
                <div className="pl-4 space-y-1.5 border-l border-slate-800 ml-1">
                  <div>
                    <span className="text-purple-400">@Autowired</span>
                  </div>
                  <div>
                    <span className="text-blue-400">private</span>{' '}
                    <span className="text-amber-300">SpringDataJpaRepository</span> repository;
                  </div>
                  <div className="pt-2 text-slate-400">
                    <span className="text-blue-400">public</span>{' '}
                    <span className="text-cyan-400">BalanceAllocationResponse</span>{' '}
                    <span className="text-emerald-300">executeBusinessLogic</span>() &#123;
                  </div>
                  <div className="pl-4 text-slate-400 space-y-1">
                    <div><span className="text-slate-500">// Solarus Smart Solutions</span></div>
                    <div>validateCorporateBalanceByCategory();</div>
                    <div>applyPolicyManagementWithSoftDelete();</div>
                    <div><span className="text-slate-500">// Native SQL telemetry metrics</span></div>
                    <div><span className="text-blue-400">return</span> repository.generateVehicleAlertMetrics();</div>
                  </div>
                  <div className="text-slate-400">&#125;</div>
                </div>
                <div><span className="text-slate-400">&#125;</span></div>
              </div>

              {/* Real World Impact Highlights from CV */}
              <div className="mt-5 pt-4 border-t border-slate-800 space-y-2.5">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Production Domains:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                    <div className="text-emerald-400 font-mono font-medium">Manex Platform</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Corporate billing & blacklist rules</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                    <div className="text-emerald-400 font-mono font-medium">EV Station CRUD</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">SQL statistics & pagination</div>
                  </div>
                </div>
              </div>

              {/* ITI & Military Leadership Badge */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/40 p-2.5 rounded-lg border border-slate-850">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  ITI Capstone Team Leader
                </span>
                <span className="text-slate-400">Officer Military (2017)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
