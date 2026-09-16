import React from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Badge } from '../../common/Badge';
import { Server, Database, ShieldCheck, Smartphone, CheckCircle2, Award, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  const pillars = [
    {
      title: "Clean Architecture & CQRS",
      desc: "Strictly isolating Domain Core, UseCases (MediatR), and Infrastructure boundaries for zero coupling and high testability.",
      icon: Server,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "High-Throughput DB Tuning",
      desc: "Optimizing SQL Server execution plans, index tuning, and EF Core optimizations that cut search latency by 84%.",
      icon: Database,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Multi-Tenant Security & IDOR Isolation",
      desc: "Guaranteed cross-tenant data isolation with ITenantContext resolution, role-based authorization, and verified webhooks.",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Full-Stack & Cross-Platform Delivery",
      desc: "Architecting .NET backends seamlessly connected to React 19 / RTK Query web portals and Flutter mobile apps.",
      icon: Smartphone,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Engineering Background"
          title="About & Architectural Approach"
          subtitle="Software Engineer at Intellisoft Technologies delivering high-performance backend systems and commercial applications."
          badgeColor="indigo"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: System Architecture & Core Skills Console */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual: Engineering & AI Innovation */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/25 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-80" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-slate-950 shadow-2xl">
                <img
                  src="/assets/about_skills.jpg"
                  alt="Software Engineering, AI and Cloud Systems"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 block"
                />
              </div>
            </div>

            {/* 
            ====================================================================
            PREVIOUS ARCHITECTURE SPEC CARD (KEPT COMMENTED AS REQUESTED):
            ====================================================================
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/25 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-80" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-slate-950/85 p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="size-2.5 rounded-full bg-rose-500/80" />
                    <div className="size-2.5 rounded-full bg-amber-500/80" />
                    <div className="size-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-300 ml-1 font-semibold flex items-center gap-1.5">
                      <Layers className="size-3.5 text-indigo-400" />
                      Clean Architecture & Cloud Ecosystem
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
                    .NET 10 • CQRS
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-slate-900 aspect-[4/3] group/img shadow-inner">
                  <img
                    src="/assets/about_skills_ecosystem.jpg"
                    alt="3D Engineering & Cloud Architecture Ecosystem featuring .NET C# Core, Clean Architecture layers, SQL Server, and Cloud Infrastructure"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold shadow-lg backdrop-blur-md">
                    <Server className="size-3 text-indigo-400" />
                    <span>CQRS & Event-Driven</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold shadow-lg backdrop-blur-md">
                    <ShieldCheck className="size-3 text-cyan-400" />
                    <span>AWS & Azure Ready</span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/90 border border-white/[0.1] backdrop-blur-md">
                    <div>
                      <span className="text-white text-xs font-bold block">Enterprise Core Stack</span>
                      <span className="text-[11px] text-slate-400 font-mono">ASP.NET Core • EF Core • SQL Server • MediatR</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                      99.9% SLA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.05] text-left">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block font-semibold">Decoupled Domain</span>
                    <span className="text-xs font-bold text-slate-200">Domain-Driven CQRS</span>
                  </div>
                  <div className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.05] text-left">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">Tuned Persistence</span>
                    <span className="text-xs font-bold text-slate-200">High-IOPS SQL Optimization</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-slate-300 font-mono flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Latency Benchmark: 7.0s → 1.1s (-84%)
                  </span>
                  <span className="font-semibold text-indigo-400">4 Commercial Systems</span>
                </div>
              </div>
            </div>
            ====================================================================
            */}

            {/* Quick Fact Summary Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-3.5 text-xs text-slate-300">
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-slate-400">Current Role:</span>
                <span className="text-white font-semibold">Software Engineer</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-slate-400">Company:</span>
                <span className="text-slate-200">Intellisoft Technologies</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-slate-400">Primary Ecosystem:</span>
                <span className="text-indigo-400 font-semibold">.NET 8/10, C# 13, FastEndpoints</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-slate-400">Cloud & Data:</span>
                <span className="text-slate-200">Azure, AWS, SQL Server, EF Core</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-slate-400">Major Honor:</span>
                <span className="text-amber-400 font-semibold">1st Runner-Up, AWS Ideathon</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">Saharanpur, UP (Open to Remote/Relocation)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I am a <strong className="text-white font-semibold">Software Engineer</strong> with over 1.7 years of hands-on production engineering experience building resilient, distributed systems using <strong className="text-indigo-400 font-semibold">C#, ASP.NET Core, EF Core, and SQL Server</strong>.
              </p>
              <p>
                At <strong>Intellisoft Technologies</strong>, I have spearheaded the backend architecture and full-stack features for <strong className="text-white font-semibold">4 diverse commercial platforms</strong>—spanning distributed real estate scraping pipelines with Google Maps, hospitality inventory with POS synchronization (Square, Lightspeed, Clover) and Cloudflare protection, smart IoT device telemetry webhooks, and community treasury field collections.
              </p>
              <p>
                I was honored as the <strong className="text-amber-400 font-semibold">1st Runner-Up in the AWS Ideathon</strong> for conceptualizing and architecting a scalable cloud-native solution, and hold official certifications in <strong className="text-slate-100">AWS Cloud Practitioner</strong>, <strong className="text-slate-100">Microsoft Azure Data Fundamentals (DP-900)</strong>, and <strong className="text-slate-100">Oracle</strong>.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
                Core Architectural Pillars
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/30"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className={`size-8 rounded-lg border flex items-center justify-center ${p.color}`}>
                          <Icon className="size-4" />
                        </div>
                        <h4 className="font-bold text-sm text-white">{p.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
