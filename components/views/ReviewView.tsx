import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Material } from '../../types';
import { SlidersHorizontal, Box, Eye, ChevronRight, Check } from 'lucide-react';

// Mock Data
const MOCK_MATERIALS: Material[] = [
  {
    id: 'm1',
    name: 'Statuario Venato Marble Slab',
    category: 'Stone',
    description: 'Rare extraction from Carrara, high-contrast grey veining. Premium grade.',
    supplier: 'Tuscany Stone Works',
    matchScore: 98,
    pricePerUnit: 420,
    unit: 'sq. ft.',
    leadTimeWeeks: 4,
    imageUrl: 'https://picsum.photos/id/1036/400/300',
    provenanceHash: '0x7f...3a91',
    isAiRecommended: true
  },
  {
    id: 'm2',
    name: 'Hand-Forged Bronze Hardware',
    category: 'Fixtures',
    description: 'Custom Artisan Series, matte finish with protective coating.',
    supplier: 'Guild & Co.',
    matchScore: 94,
    pricePerUnit: 85,
    unit: 'piece',
    leadTimeWeeks: 2,
    imageUrl: 'https://picsum.photos/id/250/400/300',
    provenanceHash: '0x2b...99c1',
    isAiRecommended: true
  },
  {
    id: 'm3',
    name: 'Reclaimed French Oak Flooring',
    category: 'Wood',
    description: '18th-century provence origin, fumigation certified.',
    supplier: 'Heritage Timbers',
    matchScore: 88,
    pricePerUnit: 28,
    unit: 'sq. ft.',
    leadTimeWeeks: 6,
    imageUrl: 'https://picsum.photos/id/1082/400/300',
    provenanceHash: '0x9d...11f2',
    isAiRecommended: false
  },
  {
    id: 'm4',
    name: 'Architectural Glazing Units',
    category: 'Glass',
    description: 'Triple-pane, thermal break, UV filtered. Custom dimensions.',
    supplier: 'Vista Systems',
    matchScore: 92,
    pricePerUnit: 1200,
    unit: 'unit',
    leadTimeWeeks: 8,
    imageUrl: 'https://picsum.photos/id/180/400/300',
    provenanceHash: '0xe4...55a8',
    isAiRecommended: true
  }
];

interface ReviewViewProps {
  onProceed: (selectedIds: string[]) => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({ onProceed }) => {
  const [selectedMaterials, setSelectedMaterials] = useState<Set<string>>(new Set(MOCK_MATERIALS.filter(m => m.isAiRecommended).map(m => m.id)));
  const [showAR, setShowAR] = useState(false);

  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedMaterials);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedMaterials(newSet);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Filters Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 p-6 overflow-y-auto hidden lg:block shadow-[4px_0_24px_-4px_rgba(0,0,0,0.02)] z-10">
        <div className="flex items-center gap-2 mb-8">
          <SlidersHorizontal className="w-5 h-5 text-brand-gold" />
          <h3 className="font-serif font-medium text-lg text-brand-dark">Refine Selection</h3>
        </div>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">AI Match Score</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 group cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-dark focus:ring-brand-gold" />
                <span className="text-sm text-slate-700 group-hover:text-brand-dark transition-colors">90% - 100% (Diamond)</span>
              </label>
              <label className="flex items-center gap-3 group cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-dark focus:ring-brand-gold" />
                <span className="text-sm text-slate-700 group-hover:text-brand-dark transition-colors">80% - 89% (Platinum)</span>
              </label>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Category</h4>
            <div className="space-y-3">
              {['Stone', 'Wood', 'Metals', 'Fixtures', 'Textiles', 'Glass'].map(cat => (
                 <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                 <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-dark focus:ring-brand-gold" />
                 <span className="text-sm text-slate-700 group-hover:text-brand-dark transition-colors">{cat}</span>
               </label>
              ))}
            </div>
          </div>
          
           <div className="border-t border-slate-100 pt-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Lead Time</h4>
            <input type="range" className="w-full accent-brand-gold h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
              <span>Immediate</span>
              <span>12 Weeks</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1 p-8 overflow-y-auto bg-slate-50/50 relative">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-serif text-brand-dark mb-3">Curated Materials</h1>
            <p className="text-slate-500 max-w-2xl text-lg font-light">AI has matched 4 premium materials based on your architectural specifications and sustainability targets.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" onClick={() => setShowAR(true)} className="bg-white hover:bg-slate-50 border-slate-200 shadow-sm">
               <Box className="w-4 h-4 mr-2 text-brand-gold" />
               AR Visualization
             </Button>
             <Button onClick={() => onProceed(Array.from(selectedMaterials))} className="shadow-lg shadow-brand-dark/20">
               Proceed to Quote
               <ChevronRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {MOCK_MATERIALS.map((material) => (
            <div 
              key={material.id} 
              className={`
                group relative bg-white rounded-xl overflow-hidden transition-all duration-300 
                ${selectedMaterials.has(material.id) 
                  ? 'border border-brand-gold shadow-[0_0_0_1px_rgba(212,175,55,1)] shadow-brand-gold/20' 
                  : 'border border-slate-200 hover:border-brand-gold/50 hover:shadow-xl hover:shadow-brand-dark/5'}
              `}
            >
              {/* Image Area - "Rolls Royce" visual fidelity */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img 
                  src={material.imageUrl} 
                  alt={material.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {material.isAiRecommended && <Badge type="ai" text={`${material.matchScore}% Match`} />}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                   <Badge type="provenance" text="Verified" />
                   <button 
                     onClick={() => setShowAR(true)}
                     className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 rounded-full hover:bg-brand-gold hover:border-brand-gold transition-all duration-300"
                   >
                    <Eye className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                     <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider">{material.category}</p>
                     <p className="font-serif text-lg font-medium text-brand-dark">${material.pricePerUnit} <span className="text-xs font-sans text-slate-400 font-normal">/ {material.unit}</span></p>
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-brand-dark leading-tight group-hover:text-brand-gold transition-colors">{material.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{material.supplier}</p>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-2">{material.description}</p>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6 pt-4 border-t border-slate-100">
                   <div className="flex items-center gap-1.5 text-emerald-600">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                     In Stock
                   </div>
                   <div className="w-px h-3 bg-slate-200"></div>
                   <div>Lead: {material.leadTimeWeeks} weeks</div>
                </div>

                <button 
                  onClick={() => toggleSelection(material.id)}
                  className={`
                    w-full py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border
                    ${selectedMaterials.has(material.id) 
                      ? 'bg-brand-dark text-white border-brand-dark hover:bg-slate-800' 
                      : 'bg-white text-brand-dark border-slate-200 hover:border-brand-dark hover:bg-slate-50'}
                  `}
                >
                  {selectedMaterials.has(material.id) ? (
                    <><Check className="w-4 h-4" /> Material Selected</>
                  ) : (
                    'Add to Project Spec'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* AR Modal Overlay Mock */}
      {showAR && (
        <div className="fixed inset-0 z-50 bg-brand-dark/90 flex items-center justify-center p-8 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl flex flex-col h-[80vh]">
            <div className="flex-1 bg-slate-900 relative group overflow-hidden">
               <img src="https://picsum.photos/id/10/1200/800" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[20s]" alt="AR Room" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center text-white">
                   <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Box className="w-10 h-10 text-brand-gold animate-pulse" />
                   </div>
                   <h3 className="text-3xl font-serif mb-2">Initializing Spatial Environment</h3>
                   <p className="text-slate-300 font-light">Lidar scanning room dimensions...</p>
                 </div>
               </div>
               
               {/* Premium AR Controls */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-2xl">
                 <button className="px-6 py-2.5 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors">Lighting</button>
                 <button className="px-6 py-2.5 rounded-full bg-brand-gold text-brand-dark text-sm font-bold shadow-lg">Materials</button>
                 <button className="px-6 py-2.5 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors">Dimensions</button>
               </div>
            </div>
            <div className="p-5 bg-white border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <Badge type="ai" text="Raytracing Enabled" />
                 <span className="text-slate-400 text-sm">Rendering at 4K resolution</span>
              </div>
              <Button variant="outline" onClick={() => setShowAR(false)}>Exit Viewer</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};