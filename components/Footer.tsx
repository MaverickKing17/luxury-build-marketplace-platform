import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Classic Homes Marketplace. All rights reserved.
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Support Center</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Contact Sales</a>
        </div>

        <div className="flex gap-5">
          <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors p-2 hover:bg-slate-50 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors p-2 hover:bg-slate-50 rounded-full">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors p-2 hover:bg-slate-50 rounded-full">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};