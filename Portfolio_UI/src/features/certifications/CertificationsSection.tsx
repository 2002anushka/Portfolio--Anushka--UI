import React, { useState } from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Badge } from '../../common/Badge';
import { Trophy, Award, ShieldCheck, CheckCircle2, ExternalLink, Cloud, Database, Network, Eye, X, ZoomIn } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { CertificationItem } from '../../types/portfolio.types';

export const CertificationsSection: React.FC = () => {
  const { awards, certifications } = portfolioData;
  const [hoveredCert, setHoveredCert] = useState<CertificationItem | null>(null);
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'aws':
        return Cloud;
      case 'azure':
        return Database;
      case 'oracle':
        return Database;
      case 'cisco':
        return Network;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-32 border-b border-white/[0.08] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 size-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 size-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Credentials & Recognition"
          title="Honors, Awards & Official Certifications"
          subtitle="Hover over any credential to preview the verified official certificate, inspect credential IDs, or verify on Microsoft Learn."
          badgeColor="amber"
        />

        {/* 1. Featured Spotlight: AWS Ideathon 1st Runner-Up */}
        {awards.map((award) => (
          <div
            key={award.id}
            className="mb-14 rounded-3xl p-7 sm:p-10 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-slate-900/60 backdrop-blur-2xl shadow-2xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 size-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-500/20">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="size-14 sm:size-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/20 shrink-0">
                  <Trophy className="size-8 sm:size-9" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {award.event}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-400 font-medium">{award.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {award.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant="amber" size="md">
                  {award.placement}
                </Badge>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{award.description}</p>
              </div>

              <div className="lg:col-span-5 space-y-2.5 bg-slate-950/60 rounded-2xl p-5 border border-white/[0.06] backdrop-blur-md">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                  Key Ideathon Highlights:
                </div>
                {award.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 2. Interactive Certifications Grid with Live Hover Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {certifications.map((cert) => {
            const Icon = getBadgeIcon(cert.badgeType);
            const isFeatured = cert.featured;
            return (
              <div
                key={cert.id}
                onMouseEnter={() => setHoveredCert(cert)}
                onMouseLeave={() => setHoveredCert(null)}
                onClick={() => setActiveModalCert(cert)}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                  isFeatured
                    ? 'border-indigo-500/30 bg-slate-900/70 shadow-lg shadow-indigo-500/10 hover:border-indigo-400/60'
                    : 'border-white/[0.08] bg-slate-900/40 hover:border-white/25'
                }`}
              >
                <div>
                  {/* Top Row: Icon, Date, and Visual Preview Button */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="size-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="size-5" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {cert.score && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          Score: {cert.score}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-slate-400">
                        {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-medium text-indigo-400 mt-1 mb-3">
                    {cert.issuer}
                  </div>

                  {/* Visual Certificate Thumbnail Container */}
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-slate-950/80 mb-4 h-36 flex items-center justify-center group-hover:border-indigo-500/40 transition-all shadow-inner">
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Hover Overlay with Action Pill */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-end justify-center p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/90 text-white text-[11px] font-semibold backdrop-blur-md shadow-lg group-hover:bg-indigo-500 transition-all">
                        <Eye className="size-3.5" />
                        <span>Hover to Inspect / Click to View</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div>
                  {/* Credential Number / ID */}
                  {cert.credentialId && (
                    <div className="mb-3 py-1 px-2.5 rounded-lg bg-slate-950/60 border border-white/[0.06] text-[11px] font-mono text-slate-300 flex justify-between items-center">
                      <span className="text-slate-500 text-[10px]">CREDENTIAL ID:</span>
                      <span className="text-indigo-300 font-semibold">{cert.credentialId}</span>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-800/80 border border-white/[0.06] text-slate-300 px-2 py-0.5 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-semibold">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="size-3.5" />
                      <span>Verified Official Credential</span>
                    </div>
                    <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      View <ZoomIn className="size-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. High-Resolution Full Certificate Lightbox Modal */}
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/[0.15] bg-[#0F172A] shadow-2xl overflow-hidden my-6">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 sm:px-8 py-4 bg-slate-900/90 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <ShieldCheck className="size-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {activeModalCert.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Issued by {activeModalCert.issuer} • {activeModalCert.issueDate}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalCert(null)}
                  className="size-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-8 bg-[#080C14] flex flex-col items-center justify-center">
                <div className="w-full max-h-[65vh] overflow-auto rounded-xl border border-white/[0.1] shadow-2xl bg-white flex items-center justify-center">
                  <img
                    src={activeModalCert.imagePath}
                    alt={activeModalCert.title}
                    className="max-h-[62vh] w-auto object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer with Verification Link */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] px-6 sm:px-8 py-4 bg-slate-900/80">
                <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                  {activeModalCert.credentialId && (
                    <span>ID: <strong className="text-white">{activeModalCert.credentialId}</strong></span>
                  )}
                  {activeModalCert.score && (
                    <span className="text-emerald-400 font-bold">Score: {activeModalCert.score}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {activeModalCert.verificationUrl && (
                    <a
                      href={activeModalCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
                    >
                      <span>Verify on Microsoft Learn</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalCert(null)}
                    className="rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
                  >
                    Close
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
