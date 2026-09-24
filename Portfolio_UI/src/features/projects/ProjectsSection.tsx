import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Badge } from '../../common/Badge';
import { ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft, Layers, Cpu, Database, ExternalLink, X, ShieldCheck, Sparkles, Globe, Lock, KeyRound, Smartphone, ZoomIn } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { ProjectItem } from '../../types/portfolio.types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMobileModal, setActiveMobileModal] = useState<{
    project: ProjectItem;
    initialIndex: number;
  } | null>(null);
  const [currentScreenIndex, setCurrentScreenIndex] = useState<number>(0);

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

  // Keyboard navigation for mobile lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMobileModal) return;
      if (e.key === 'Escape') {
        setActiveMobileModal(null);
      } else if (e.key === 'ArrowRight') {
        const total = activeMobileModal.project.mobileApp?.screens.length || 1;
        setCurrentScreenIndex((prev) => (prev + 1) % total);
      } else if (e.key === 'ArrowLeft') {
        const total = activeMobileModal.project.mobileApp?.screens.length || 1;
        setCurrentScreenIndex((prev) => (prev - 1 + total) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMobileModal]);

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

                {/* Flutter Mobile App Experience Gallery */}
                {project.mobileApp && (
                  <div className="mt-8 pt-8 border-t border-white/[0.08]">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-500/10">
                          <Smartphone className="size-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                              {project.mobileApp.appName}
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                              {project.mobileApp.framework}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {project.mobileApp.platformSummary}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="size-3 text-cyan-400" />
                        <span>Tap any screen to expand & inspect UI</span>
                      </div>
                    </div>

                    {/* Mobile Screens Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                      {project.mobileApp.screens.map((screen, sIdx) => (
                        <button
                          key={screen.id}
                          type="button"
                          onClick={() => {
                            setActiveMobileModal({ project, initialIndex: sIdx });
                            setCurrentScreenIndex(sIdx);
                          }}
                          className="group/phone text-left flex flex-col rounded-2xl border border-white/[0.08] bg-[#070B14]/90 p-2 hover:border-cyan-500/50 hover:bg-[#0B1120] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                          {/* Phone Shell Frame */}
                          <div className="relative aspect-[9/18.5] w-full rounded-xl overflow-hidden bg-slate-950 border border-white/[0.06] mb-2">
                            {/* Top speaker notch */}
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full z-10" />
                            <img
                              src={screen.image}
                              alt={screen.title}
                              className="w-full h-full object-cover group-hover/phone:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            {/* Hover overlay with zoom icon */}
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                              <div className="size-8 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/30">
                                <ZoomIn className="size-3.5" />
                              </div>
                            </div>
                            {/* Tag Badge */}
                            {screen.tag && (
                              <div className="absolute bottom-1.5 left-1.5 right-1.5">
                                <span className="block truncate text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/80 text-cyan-300 backdrop-blur-xs border border-white/10 text-center">
                                  {screen.tag}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Caption */}
                          <div className="px-1 pb-1">
                            <span className="block text-xs font-semibold text-white group-hover/phone:text-cyan-300 transition-colors line-clamp-1">
                              {screen.title}
                            </span>
                            <span className="block text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              {screen.subtitle}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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

        {/* Fullscreen Mobile Lightbox Modal */}
        {activeMobileModal && activeMobileModal.project.mobileApp && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-6 overflow-y-auto"
            onClick={() => setActiveMobileModal(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl border border-white/[0.12] bg-[#0A0F1D] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Column: Phone Display with Carousel Controls */}
              <div className="relative md:w-1/2 bg-slate-950/90 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/[0.08]">
                {/* Phone Shell Frame */}
                <div className="relative w-56 sm:w-64 aspect-[9/18.5] rounded-[2.4rem] p-2 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 border-white/20 shadow-2xl shadow-cyan-500/10">
                  {/* Top Notch / Camera Pill */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/85 rounded-full z-20 flex items-center justify-center">
                    <div className="size-1 rounded-full bg-slate-700 ml-auto mr-2" />
                  </div>
                  {/* Screen Image */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black">
                    <img
                      src={activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.image}
                      alt={activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-4 mt-5">
                  <button
                    type="button"
                    onClick={() => {
                      const total = activeMobileModal.project.mobileApp!.screens.length;
                      setCurrentScreenIndex((prev) => (prev - 1 + total) % total);
                    }}
                    className="size-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous screen"
                  >
                    <ChevronLeft className="size-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {activeMobileModal.project.mobileApp.screens.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentScreenIndex(dotIdx)}
                        className={`transition-all rounded-full ${
                          currentScreenIndex === dotIdx
                            ? 'w-5 h-1.5 bg-cyan-400'
                            : 'size-1.5 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Jump to screen ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const total = activeMobileModal.project.mobileApp!.screens.length;
                      setCurrentScreenIndex((prev) => (prev + 1) % total);
                    }}
                    className="size-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                    aria-label="Next screen"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Screen Info & Architecture Notes */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="size-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">
                        <Smartphone className="size-3" />
                      </span>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {activeMobileModal.project.mobileApp.appName} • {activeMobileModal.project.mobileApp.framework}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveMobileModal(null)}
                      className="size-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close lightbox"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  {/* Screen Counter & Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 uppercase">
                      {activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.tag || 'MOBILE SCREEN'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Screen {currentScreenIndex + 1} of {activeMobileModal.project.mobileApp.screens.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-300/90 mt-1">
                    {activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.subtitle}
                  </p>

                  {/* Architectural Description */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-900/70 border border-white/[0.08] text-xs text-slate-300 leading-relaxed space-y-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Mobile Engineering & Feature Scope:
                    </div>
                    <p>
                      {activeMobileModal.project.mobileApp.screens[currentScreenIndex]?.description ||
                        activeMobileModal.project.summary}
                    </p>
                  </div>

                  {/* App Architectural Highlights */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                      Underlying Tech & Device Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Built with Flutter (Dart) with responsive Material / Cupertino design system.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Direct synchronization with backend ASP.NET Core & REST APIs.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-slate-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-slate-300">→</kbd> to browse
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveMobileModal(null)}
                    className="rounded-xl bg-slate-800 hover:bg-slate-700 px-5 py-2 text-xs font-semibold text-white transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
