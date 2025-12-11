import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  icon: React.ElementType;
  subtext?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon: Icon, subtext }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(11,18,33,0.05)] transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-brand-gold/10 transition-colors">
           <Icon className="w-5 h-5 text-slate-600 group-hover:text-brand-dark transition-colors" />
        </div>
        {trend && (
          <div className={`flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${
            trend.direction === 'up' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
            trend.direction === 'down' ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-slate-50 text-slate-600 border-slate-100'
          }`}>
            {trend.direction === 'up' && <ArrowUpRight className="w-3 h-3 mr-1" />}
            {trend.direction === 'down' && <ArrowDownRight className="w-3 h-3 mr-1" />}
            {trend.direction === 'neutral' && <Minus className="w-3 h-3 mr-1" />}
            {trend.value}
          </div>
        )}
      </div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">{title}</h3>
      <p className="text-2xl font-serif font-medium text-brand-dark tracking-tight">{value}</p>
      {subtext && <p className="text-xs text-slate-400 mt-2">{subtext}</p>}
    </div>
  );
};