import React from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Badge } from '../../common/Badge';
import { CheckCircle2, Building2, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-32 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Career Trajectory"
          title="Professional Experience & Education"
          subtitle="Production engineering, commercial software delivery, and academic foundation."
          badgeColor="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Work Experience */}
          <div className="lg:col-span-8 space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.08]"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5 text-white font-bold text-xl sm:text-2xl">
                      <div className="size-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Building2 className="size-4" />
                      </div>
                      <span>{exp.company}</span>
                    </div>
                    <div className="text-sm font-semibold text-indigo-400 mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 font-medium text-slate-300">
                      <Calendar className="size-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="size-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Core Technical Deliverables & Achievements:
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivered Platforms */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Production Platforms Shipped:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.platformsDelivered.map((platform, pIdx) => (
                      <Badge key={pIdx} variant="cyan" size="sm">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-slate-400 uppercase mb-5">
                <GraduationCap className="size-4 text-indigo-400" />
                <span>Academic Education</span>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-3 text-xs">
                  <h4 className="text-white font-bold text-base leading-snug">
                    {edu.degree}
                  </h4>
                  <div className="text-slate-400 text-sm font-medium">
                    {edu.school}
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-slate-300">
                    <span>{edu.period}</span>
                    <span className="text-emerald-400 font-bold text-sm">{edu.result}</span>
                  </div>

                  <div className="pt-3">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase mb-2">Core Coursework:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="bg-slate-800/80 border border-white/[0.06] text-[11px] px-2 py-0.5 rounded text-slate-300">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
