import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state for easy direct email draft
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Java Backend Developer Opportunity');
  const [message, setMessage] = useState('');

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

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>09 // Contact & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Direct Discussion
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Open for Java Backend Developer, Spring Boot, Software Engineer, and Remote International opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  Email Address
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors block break-all font-mono"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Phone / WhatsApp
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors block font-mono"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Current Base & Mobility
              </span>
              <div className="text-sm font-bold text-white font-mono">
                {personalInfo.location}
              </div>
              <p className="text-xs text-slate-400">
                Available for Remote Worldwide engagements, on-site roles, and relocation.
              </p>
            </div>

            {/* Profiles Strip */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Professional Profiles
              </div>
              <div className="space-y-2 text-xs font-mono">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-850 hover:border-emerald-500/40 hover:bg-slate-900 transition-all text-slate-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    GitHub
                  </span>
                  <span className="text-xs text-slate-400 truncate max-w-[220px]">
                    {personalInfo.links.github.replace('https://', '')}
                  </span>
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-850 hover:border-blue-500/40 hover:bg-slate-900 transition-all text-slate-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-400 truncate max-w-[220px]">
                    {personalInfo.links.linkedin.replace('https://', '')}
                  </span>
                </a>
                <a
                  href={personalInfo.links.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-850 hover:border-emerald-500/40 hover:bg-slate-900 transition-all text-slate-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <HackerRankIcon className="w-4 h-4 text-emerald-400" />
                    HackerRank
                  </span>
                  <span className="text-xs text-slate-400 truncate max-w-[220px]">
                    {personalInfo.links.hackerrank.replace('https://', '')}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Email Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message / Interview Request
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your details to generate a formatted email draft directly to Ibrahim's inbox.
                </p>
              </div>

              <form onSubmit={handleSendDraft} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Talent Team"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Opportunity / Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message / Job Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about the role, technical requirements, or schedule an interview..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
