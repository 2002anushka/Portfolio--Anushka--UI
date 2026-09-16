import React from 'react';
import { ArrowUpRight, FileDown, Layers, Trophy, Sparkles, Server, Zap, ShieldCheck, Activity } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { label: 'Production Platforms', value: '4', detail: 'Shipped end-to-end at Intellisoft', icon: Server },
    { label: 'Query Latency Cut', value: '-84%', detail: '7.0s → 1.1s in PINPS', icon: Zap },
    { label: 'AWS Ideathon', value: '1st Runner-Up', detail: 'College Level 2024', icon: Trophy },
    { label: 'Cloud Certified', value: 'AWS & Azure', detail: 'Cloud Practitioner & DP-900', icon: ShieldCheck },
  ];

  return (
    <section id="top" className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-ambient-mesh">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 size-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 mb-6 shadow-sm backdrop-blur-md">
              <Trophy className="size-3.5 text-amber-400 shrink-0" />
              <span>1st Runner-Up AWS Ideathon • Available for Engineering Roles</span>
            </div>

            {/* Hero Title & Pitch */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Architecting <span className="gradient-text-indigo">High-Throughput</span> Backend Systems & Scalable Products
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Software Engineer with <span className="text-white font-semibold">1.7+ years of production experience</span> designing dependable <span className="text-indigo-400 font-semibold">.NET 8/10</span> web APIs, microservices, and modern web & mobile platforms. Dedicated to Clean Architecture, CQRS, and measurable performance.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] transition-all"
              >
                Explore 4 Projects
                <ArrowUpRight className="size-4" />
              </button>

              <button
                onClick={() => scrollTo('certifications')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-md"
              >
                <Trophy className="size-4 text-amber-400" />
                Certifications & Awards
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Character & Telemetry HUD (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Radial Glow around Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/25 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            <div className="relative w-full max-w-sm glass-card rounded-3xl p-5 border border-white/[0.12] bg-slate-950/70 shadow-2xl animate-float-slow">
              
              {/* Speech / Greeting Bubble */}
              <div className="flex items-center gap-3 p-3 px-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 backdrop-blur-md shadow-md mb-4">
                <span className="text-2xl animate-wave select-none">👋</span>
                <div className="text-xs">
                  <span className="font-bold text-white block">Hi, I'm Anushka!</span>
                  <span className="text-slate-400 text-[11px]">Welcome to my engineering workspace</span>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Character Visual Frame with Overlapping Badges */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-slate-900 aspect-square group shadow-inner">
                <img
                  src="/assets/hero_3d_anushka.jpg"
                  alt="3D Developer Character modeled after Anushka Sharma waving hello"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge Top-Left: AWS Award */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/85 border border-amber-500/40 text-amber-300 text-[10px] font-bold shadow-lg backdrop-blur-md">
                  <Trophy className="size-3 text-amber-400" />
                  <span>AWS 1st Runner-Up</span>
                </div>

                {/* Floating Badge Bottom-Right: .NET 10 */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/85 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold shadow-lg backdrop-blur-md">
                  <Zap className="size-3 text-cyan-400" />
                  <span>.NET 10 & CQRS</span>
                </div>
              </div>

              {/* Engineering Telemetry Status Bar */}
              <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/50 border border-white/[0.06] text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300 font-sans">
                  <Server className="size-3 text-indigo-400" />
                  Clean Arch
                </span>
                <span className="text-emerald-400 font-semibold">● 99.98% SLA</span>
                <span className="text-cyan-400 font-semibold">1.1s Latency</span>
              </div>

            </div>
          </div>

        </div>

        {/* Modern Stats Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.07] bg-slate-900/40"
              >
                <div className="size-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Icon className="size-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
