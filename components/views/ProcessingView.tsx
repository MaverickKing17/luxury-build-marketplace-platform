import React, { useEffect } from 'react';
import { Sparkles, BrainCircuit, Database, Search } from 'lucide-react';

interface ProcessingViewProps {
  onComplete: () => void;
}

export const ProcessingView: React.FC<ProcessingViewProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-slate-50">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand-gold rounded-full border-t-transparent animate-spin"></div>
        <BrainCircuit className="absolute inset-0 m-auto text-brand-dark w-12 h-12 animate-pulse" />
      </div>
      
      <h2 className="text-2xl font-serif text-brand-dark mb-2">Synthesizing Procurement Plan</h2>
      <p className="text-slate-500 mb-8">AI is cross-referencing 14,000+ vetted suppliers...</p>

      <div className="w-full max-w-md space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-600 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <Search className="w-4 h-4 text-brand-gold" />
          <span>Extracting quantities from Master Bedroom (A104)...</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600 animate-fade-in" style={{animationDelay: '1.5s'}}>
          <Database className="w-4 h-4 text-brand-gold" />
          <span>Checking real-time stock for Italian Carrara Marble...</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600 animate-fade-in" style={{animationDelay: '2.5s'}}>
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span>Generating AR-ready assets for visualization...</span>
        </div>
      </div>
    </div>
  );
};