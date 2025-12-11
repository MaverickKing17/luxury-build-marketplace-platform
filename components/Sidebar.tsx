import React from 'react';
import { LayoutDashboard, FileText, ShoppingCart, Box, Settings, PieChart, Building2 } from 'lucide-react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const navItems: { icon: React.ElementType; label: AppView }[] = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: FileText, label: 'Projects' },
    { icon: Box, label: 'Materials' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: PieChart, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-brand-dark text-slate-300 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 z-50">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-white">
          <Building2 className="w-8 h-8 text-brand-gold" />
          <div>
            <h1 className="font-serif text-lg font-semibold tracking-wide text-brand-gold">CHM</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Enterprise</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = currentView === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-slate-800 text-brand-gold shadow-sm border-l-2 border-brand-gold' 
                  : 'hover:bg-slate-800/50 hover:text-white border-l-2 border-transparent'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-brand-gold' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <img 
            src="https://picsum.photos/100/100" 
            alt="User" 
            className="w-9 h-9 rounded-full border border-slate-600"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Alexandra V.</p>
            <p className="text-xs text-slate-500 truncate">VP Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};