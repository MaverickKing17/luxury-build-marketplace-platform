import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface BadgeProps {
  type: 'ai' | 'provenance' | 'neutral';
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, text }) => {
  if (type === 'ai') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
        <Sparkles className="w-3 h-3" />
        {text}
      </span>
    );
  }
  if (type === 'provenance') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
        <ShieldCheck className="w-3 h-3" />
        {text}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
      {text}
    </span>
  );
};