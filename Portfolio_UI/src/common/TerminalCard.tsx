import React from 'react';
import { cn } from '../utils/cn';

interface TerminalCardProps {
  title?: string;
  badgeText?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({
  title,
  badgeText,
  children,
  className = '',
  headerRight,
}) => {
  return (
    <div className={cn("border border-zinc-800 bg-[#0F0F11] transition-all hover:border-zinc-700", className)}>
      <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3 bg-[#0A0A0C]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {title && (
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-300">
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {badgeText && (
            <span className="font-mono text-[10px] text-[#E3FF00] tracking-widest uppercase">
              [{badgeText}]
            </span>
          )}
          {headerRight}
        </div>
      </div>
      <div className="p-5 md:p-7">
        {children}
      </div>
    </div>
  );
};
