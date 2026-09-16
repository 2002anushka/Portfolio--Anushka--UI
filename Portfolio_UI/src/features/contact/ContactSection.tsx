import React, { useState } from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, FileDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { sendContactInquiry } from '../../lib/api';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setResponseMsg('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await sendContactInquiry(formData);
      setStatus('success');
      setResponseMsg(res.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setResponseMsg('An error occurred. Please email directly at anushka.sharma.cse.2021@miet.ac.in.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="Direct Communication"
          title="Get In Touch"
          subtitle="Interested in hiring, discussing a software engineering opening, or exploring technical collaboration? Reach out below."
          badgeColor="indigo"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Resume CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                Direct Contact Channels
              </h3>
              
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="size-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="size-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-400 font-medium">EMAIL</div>
                  <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {personal.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="size-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">PHONE</div>
                  <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {personal.phone}
                  </div>
                </div>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="size-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Linkedin className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">LINKEDIN</div>
                  <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    linkedin.com/in/anushka-sharma-07ab1b24
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                <div className="size-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">LOCATION</div>
                  <div className="text-sm font-medium text-slate-200">
                    Saharanpur, UP, India (Open to Remote / Relocation)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className="w-full rounded-xl bg-slate-900/80 border border-white/[0.1] p-3 text-white text-xs placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full rounded-xl bg-slate-900/80 border border-white/[0.1] p-3 text-white text-xs placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / .NET Role"
                    className="w-full rounded-xl bg-slate-900/80 border border-white/[0.1] p-3 text-white text-xs placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className="w-full rounded-xl bg-slate-900/80 border border-white/[0.1] p-3 text-white text-xs placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    <AlertCircle className="size-4 shrink-0 mt-0.5" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xs font-bold py-3.5 shadow-lg shadow-indigo-600/25 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-600/40 transition-all disabled:opacity-50"
                >
                  <Send className="size-4" />
                  <span>{status === 'submitting' ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
