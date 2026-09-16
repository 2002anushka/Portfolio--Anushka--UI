import React from 'react';

interface SectionHeadingProps {
  number?: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
  badgeColor?: 'indigo' | 'cyan' | 'emerald' | 'amber';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  className = '',
  badgeColor = 'indigo',
}) => {
  const badgeClasses = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-2 mb-3.5">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase ${badgeClasses[badgeColor]}`}>
          <span className="size-1.5 rounded-full bg-current inline-block animate-pulse" />
          {tag}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-400 max-w-3xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
