import React, { useCallback, useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface UploadViewProps {
  onComplete: () => void;
}

export const UploadView: React.FC<UploadViewProps> = ({ onComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<{name: string, size: string, status: 'ready' | 'uploading' | 'done'}[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Mock file processing
    const newFiles = Array.from(e.dataTransfer.files).map((f: File) => ({
      name: f.name,
      size: `${(f.size / 1024 / 1024).toFixed(2)} MB`,
      status: 'ready' as const
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const simulateUpload = () => {
    // Simulate upload progress then move next
    const updated = files.map(f => ({ ...f, status: 'uploading' as const }));
    setFiles(updated);
    
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-brand-dark mb-2">Upload Project Specifications</h1>
        <p className="text-slate-600">Centralized ingestion pipeline. Upload architectural plans (PDF, CAD, Revit) for AI analysis.</p>
      </div>

      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300
          ${isDragging 
            ? 'border-brand-gold bg-brand-gold/5 scale-[1.01]' 
            : 'border-slate-300 hover:border-brand-dark/50 bg-white'}
        `}
      >
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <UploadCloud className={`w-8 h-8 ${isDragging ? 'text-brand-gold' : 'text-slate-400'}`} />
        </div>
        <h3 className="text-lg font-medium text-brand-dark mb-2">Drag & Drop project files</h3>
        <p className="text-sm text-slate-500 mb-6">Support for .PDF, .DWG, .RVT, .IFC (Max 500MB)</p>
        <Button variant="outline" onClick={() => document.getElementById('file-input')?.click()}>
          Browse Files
        </Button>
        <input id="file-input" type="file" multiple className="hidden" onChange={(e) => {
             if (e.target.files) {
                const newFiles = Array.from(e.target.files).map((f: File) => ({
                    name: f.name,
                    size: `${(f.size / 1024 / 1024).toFixed(2)} MB`,
                    status: 'ready' as const
                  }));
                  setFiles(prev => [...prev, ...newFiles]);
             }
        }} />
      </div>

      {files.length > 0 && (
        <div className="mt-8 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h4 className="font-medium text-slate-700">Pending Ingestion ({files.length})</h4>
            <Button size="sm" variant="ghost" onClick={() => setFiles([])}>Clear All</Button>
          </div>
          <div className="divide-y divide-slate-100">
            {files.map((file, idx) => (
              <div key={idx} className="px-6 py-4 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{file.name}</p>
                    <p className="text-xs text-slate-500">{file.size} • Architectural Plan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {file.status === 'ready' && <span className="text-xs text-slate-400 font-medium px-2 py-1 bg-slate-100 rounded">Ready</span>}
                  {file.status === 'uploading' && <span className="text-xs text-brand-gold font-medium animate-pulse">Analyzing...</span>}
                  {file.status === 'done' && <span className="text-emerald-600"><CheckCircle2 className="w-5 h-5" /></span>}
                  <button className="text-slate-300 hover:text-red-500 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <Button onClick={simulateUpload} disabled={files.some(f => f.status === 'uploading')}>
              {files.some(f => f.status === 'uploading') ? 'Processing...' : 'Run AI Analysis & Match'}
            </Button>
          </div>
        </div>
      )}
      
      {/* Informational Cards */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100">
          <h5 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Automated Breakdown
          </h5>
          <p className="text-xs text-blue-700 leading-relaxed">AI will automatically parse room dimensions and material requirements from your blueprints.</p>
        </div>
        <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-100">
          <h5 className="text-sm font-semibold text-amber-900 mb-1 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Compliance Check
          </h5>
          <p className="text-xs text-amber-700 leading-relaxed">Specifications are cross-referenced against local building codes and sustainability standards.</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
           <h5 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Format Support
          </h5>
          <p className="text-xs text-slate-600 leading-relaxed">Supports PDF, AutoCAD (.dwg), Revit (.rvt), and IFC open standards.</p>
        </div>
      </div>
    </div>
  );
};