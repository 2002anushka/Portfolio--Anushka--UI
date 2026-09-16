import React from 'react';
import { cn } from '../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'emerald' | 'amber' | 'subtle' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  className = '',
  size = 'sm',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';
  const sizeClasses = size === 'sm' ? 'text-xs px-3 py-1' : 'text-sm px-3.5 py-1.5';

  const variantClasses = {
    primary: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/30',
    subtle: 'bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-slate-600',
    outline: 'border border-white/10 text-slate-300 hover:border-white/20',
  };

  return (
    <span className={cn(baseClasses, sizeClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};
