import React, { useState } from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Badge } from '../../common/Badge';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Cpu, Database, ExternalLink, X, ShieldCheck, Sparkles, Globe, Lock, KeyRound } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { ProjectItem } from '../../types/portfolio.types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'ALL',
    'PROPERTY INTELLIGENCE',
    'HOSPITALITY & POS',
    'IOT & TELEMETRY',
    'FIELD COLLECTION & FINTECH',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  const handleRequestDemo = (projectName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill subject field if available and trigger React change
      const subjectInput = document.querySelector('input[name="subject"]') as HTMLInputElement;
      if (subjectInput) {
        const text = `Technical Walkthrough / Demo Request: ${projectName}`;
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(subjectInput, text);
        } else {
          subjectInput.value = text;
        }
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        subjectInput.dispatchEvent(new Event('change', { bubbles: true }));
        subjectInput.focus();
      }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Commercial Engineering"
          title="Featured Production Platforms"
          subtitle="Four mission-critical commercial platforms engineered with modern .NET, Clean Architecture, and full-stack capabilities."
          badgeColor="indigo"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/25 scale-[1.02]'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 group"
            >
              {/* Card Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] bg-slate-900/50 px-6 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">
                    {project.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      <Globe className="size-3" />
                      <span>Live Public Platform</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                      <Lock className="size-3" />
                      <span>Enterprise (Auth Required)</span>
                    </span>
                  )}
                  <Badge variant="emerald">PRODUCTION</Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                        Key Architectural Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {project.architectureHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Access & Testing Note */}
                    {project.accessNote && (
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.08] text-xs text-slate-400 flex items-start gap-2.5">
                        <KeyRound className="size-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{project.accessNote}</span>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="primary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Metrics, Links & Inspect */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] p-6">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Cpu className="size-4 text-indigo-400" />
                        <span>Quantified Engineering Metrics</span>
                      </div>

                      <div className="space-y-3.5">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                            <div className="text-xs text-slate-400">
                              {metric.label}
                            </div>
                            <div className="text-xl font-bold text-white mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome Box */}
                    <div className="rounded-xl bg-slate-800/40 border border-white/[0.06] p-4 text-xs text-slate-300">
                      <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wide mb-1">
                        Business & Engineering Outcome:
                      </div>
                      <p className="leading-relaxed">
                        {project.keyOutcomes[0]}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 hover:from-emerald-500 hover:to-teal-400 transition-all"
                        >
                          <Globe className="size-4" />
                          <span>Launch Live Public Platform</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => handleRequestDemo(project.name)}
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 py-3 text-xs font-bold text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
                        >
                          <KeyRound className="size-4 text-indigo-400" />
                          <span>Request Demo & Walkthrough</span>
                          <ArrowUpRight className="size-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] py-2.5 text-xs font-semibold text-slate-200 hover:bg-white/[0.08] hover:border-white/20 transition-all"
                      >
                        <span>Inspect Platform Architecture</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl rounded-2xl border border-white/[0.12] bg-[#0F172A] shadow-2xl my-8 overflow-hidden">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-indigo-400">
                    PROJECT // {selectedProject.number}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {selectedProject.name}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08]"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-300 text-sm">
                <div>
                  <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                    Platform Overview
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-slate-900/60 p-4 text-xs space-y-2">
                  <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                    Architectural Data Flow & Patterns:
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-slate-300">
                    {selectedProject.architectureHighlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.accessNote && (
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-white/[0.08] text-xs text-slate-300 flex items-start gap-2.5">
                    <KeyRound className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{selectedProject.accessNote}</span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Key Outcomes & Delivery Metrics:
                  </div>
                  <div className="space-y-2">
                    {selectedProject.keyOutcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-slate-800/40 p-3 text-xs">
                        <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technology Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((t) => (
                      <Badge key={t} variant="primary" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4 bg-slate-900/60">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400">Enterprise Access Available on Interview</span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-slate-800 hover:bg-slate-700 px-5 py-2 text-xs font-semibold text-white"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
