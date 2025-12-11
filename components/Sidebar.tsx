import React from 'react';
import { LayoutDashboard, FileText, ShoppingCart, Box, Settings, PieChart, Building2 } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: FileText, label: 'Projects', active: true },
    { icon: Box, label: 'Materials', active: false },
    { icon: ShoppingCart, label: 'Orders', active: false },
    { icon: PieChart, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-brand-dark text-slate-300 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800">
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
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
              item.active 
                ? 'bg-slate-800 text-brand-gold' 
                : 'hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
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