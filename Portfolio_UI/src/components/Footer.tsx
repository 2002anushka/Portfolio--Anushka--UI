import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { portfolioData } from '../config/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/[0.08] bg-[#050811] py-14 px-6 md:px-12 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px]">
                <div className="size-full rounded-[11px] bg-[#080C14] flex items-center justify-center font-black text-xs text-white">
                  AS
                </div>
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                Anushka Sharma
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Software Engineer specializing in .NET 8/10, Clean Architecture, CQRS, 
              scalable relational databases, and high-performance React & Flutter frontends.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications & Awards</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a 
                href={personal.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="size-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={personal.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="size-4 text-indigo-400" />
                <span>GitHub</span>
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="size-4 text-indigo-400" />
                <span className="truncate">{personal.email}</span>
              </a>
              <a 
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="size-4 text-indigo-400" />
                <span>{personal.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Anushka Sharma. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-slate-900/60 px-3.5 py-1.5 hover:border-white/20 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
