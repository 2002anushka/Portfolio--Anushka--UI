import React from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { portfolioData } from '../../config/portfolioData';
import { Code2, Server, Database, Shield, Layout, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code2,
    backend: Server,
    database: Database,
    'security-cloud': Shield,
    'frontend-mobile': Layout,
    'tooling-devops': Wrench,
  };

  return (
    <section id="skills" className="py-20 md:py-32 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Core Competencies"
          title="Skills & Technical Ecosystem"
          subtitle="Comprehensive expertise across the modern .NET ecosystem, relational databases, cloud architectures, and frontends."
          badgeColor="indigo"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            const Icon = categoryIcons[category.id] || Server;
            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-indigo-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight text-white uppercase">
                      {category.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200 hover:border-indigo-400/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-medium text-slate-400 flex justify-between items-center">
                  <span>Production Ready</span>
                  <span className="text-emerald-400 font-semibold">✓ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
