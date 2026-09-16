import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Eye, ChevronDown, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications & Awards', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'border-b border-white/[0.08] bg-[#080C14]/85 backdrop-blur-xl py-3.5 shadow-2xl shadow-black/40' 
        : 'border-b border-transparent bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="group flex items-center gap-3.5"
        >
          <div className="size-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="size-full rounded-[11px] bg-[#080C14] flex items-center justify-center font-black text-xs text-white">
              AS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white tracking-tight group-hover:text-indigo-400 transition-colors">
              Anushka Sharma
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              Software Engineer (.NET / Cloud)
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Resume Dropdown */}
          <div className="relative" ref={resumeRef}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-sm"
              aria-expanded={resumeOpen}
            >
              <FileText className="size-3.5 text-cyan-400" />
              <span>Resume</span>
              <ChevronDown className={`size-3 text-cyan-400 transition-transform duration-200 ${resumeOpen ? 'rotate-180' : ''}`} />
            </button>

            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-white/[0.12] bg-slate-950/95 p-2 shadow-2xl backdrop-blur-2xl z-50">
                <div className="px-3 py-2 border-b border-white/[0.08] mb-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Resume Options</span>
                  <span className="text-xs font-bold text-white">Anushka Sharma (ATS-Ready)</span>
                </div>

                {/* Option 1: View in New Tab */}
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group text-left"
                >
                  <div className="size-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                    <Eye className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover:text-indigo-300 transition-colors">
                      View in New Tab
                    </span>
                    <span className="text-[10px] text-slate-400">Open full resume in browser</span>
                  </div>
                </a>

                {/* Option 2: Download as PDF */}
                <a
                  href="/Anushka_Sharma_Resume.pdf"
                  download="Anushka_Sharma_Resume.pdf"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-500/10 transition-colors group text-left mt-1"
                >
                  <div className="size-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <FileDown className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover:text-emerald-300 transition-colors">
                      Download as PDF
                    </span>
                    <span className="text-[10px] text-slate-400">Save offline PDF file</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/40 transition-all"
          >
            Get In Touch
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden size-10 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white flex items-center justify-center hover:bg-white/[0.08]"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#080C14]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="py-2.5 text-left text-sm font-medium text-slate-300 hover:text-indigo-400"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] py-2.5 text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08]"
              >
                <Eye className="size-4 text-cyan-400" />
                <span>View Resume (New Tab)</span>
              </a>
              <a
                href="/Anushka_Sharma_Resume.pdf"
                download="Anushka_Sharma_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20"
              >
                <FileDown className="size-4 text-emerald-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 mt-1"
              >
                Get In Touch
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
