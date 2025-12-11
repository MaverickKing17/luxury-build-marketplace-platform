import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Project</span>
        <h2 className="text-lg font-serif font-semibold text-brand-dark">The Obsidian Tower - Penthouse Renovation</h2>
        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-medium">In Progress</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search specs, materials..." 
            className="pl-9 pr-4 py-1.5 w-64 text-sm border border-slate-200 rounded-full bg-slate-50 focus:bg-white focus:ring-1 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all"
          />
        </div>
        <button className="text-slate-400 hover:text-brand-dark">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="text-slate-400 hover:text-brand-dark relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};