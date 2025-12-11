import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Material } from '../../types';
import { SlidersHorizontal, Box, Eye, Info, ChevronRight, Check } from 'lucide-react';

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
      <aside className="w-72 bg-white border-r border-slate-200 p-6 overflow-y-auto hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-5 h-5 text-slate-400" />
          <h3 className="font-serif font-medium text-lg">Filters</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">AI Match Score</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded text-brand-dark focus:ring-brand-gold" />
                <span className="text-sm text-slate-700">90% - 100% (Diamond)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-brand-dark focus:ring-brand-gold" />
                <span className="text-sm text-slate-700">80% - 89% (Platinum)</span>
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Category</h4>
            <div className="space-y-2">
              {['Stone', 'Wood', 'Metals', 'Fixtures', 'Textiles', 'Glass'].map(cat => (
                 <label key={cat} className="flex items-center gap-2">
                 <input type="checkbox" defaultChecked className="rounded text-brand-dark focus:ring-brand-gold" />
                 <span className="text-sm text-slate-700">{cat}</span>
               </label>
              ))}
            </div>
          </div>
          
           <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Lead Time</h4>
            <input type="range" className="w-full accent-brand-dark" />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Immediate</span>
              <span>12 Weeks</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1 p-8 overflow-y-auto bg-slate-50 relative">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-serif text-brand-dark mb-2">Material Selection</h1>
            <p className="text-slate-600">Review AI-matched specifications based on your architectural drawings.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" onClick={() => setShowAR(true)}>
               <Box className="w-4 h-4 mr-2" />
               Visualize in AR/VR
             </Button>
             <Button onClick={() => onProceed(Array.from(selectedMaterials))}>
               Proceed to Quote
               <ChevronRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MOCK_MATERIALS.map((material) => (
            <div 
              key={material.id} 
              className={`
                group relative bg-white rounded-lg border transition-all duration-300 hover:shadow-xl
                ${selectedMaterials.has(material.id) ? 'border-brand-gold ring-1 ring-brand-gold' : 'border-slate-200'}
              `}
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-slate-100">
                <img 
                  src={material.imageUrl} 
                  alt={material.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {material.isAiRecommended && <Badge type="ai" text={`${material.matchScore}% Match`} />}
                  <Badge type="provenance" text="Web3 Verified" />
                </div>
                <button 
                   onClick={() => setShowAR(true)}
                   className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-gold hover:text-white"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-brand-dark">{material.name}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{material.supplier}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900">${material.pricePerUnit}</p>
                    <p className="text-xs text-slate-500">per {material.unit}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{material.description}</p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-3">
                   <div className="flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                     In Stock
                   </div>
                   <div>Lead Time: {material.leadTimeWeeks} wks</div>
                </div>

                <button 
                  onClick={() => toggleSelection(material.id)}
                  className={`
                    w-full py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center justify-center gap-2
                    ${selectedMaterials.has(material.id) 
                      ? 'bg-brand-dark text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                  `}
                >
                  {selectedMaterials.has(material.id) ? (
                    <><Check className="w-4 h-4" /> Selected</>
                  ) : (
                    'Add to Project'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* AR Modal Overlay Mock */}
      {showAR && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl">
            <div className="h-[500px] bg-slate-900 relative">
               <img src="https://picsum.photos/id/10/800/500" className="w-full h-full object-cover opacity-60" alt="AR Room" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center text-white">
                   <Box className="w-16 h-16 mx-auto mb-4 text-brand-gold animate-bounce" />
                   <h3 className="text-2xl font-serif">Loading AR Environment...</h3>
                   <p className="text-slate-300">Calibrating spatial anchors for accurate material overlay.</p>
                 </div>
               </div>
               
               {/* AR Controls UI Mock */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur rounded-full px-6 py-3 border border-white/10">
                 <button className="text-white text-sm font-medium hover:text-brand-gold">Lighting: Natural</button>
                 <div className="w-px bg-white/20"></div>
                 <button className="text-white text-sm font-medium hover:text-brand-gold">Scale: 1:1</button>
                 <div className="w-px bg-white/20"></div>
                 <button className="text-white text-sm font-medium hover:text-brand-gold">Export View</button>
               </div>
            </div>
            <div className="p-4 bg-brand-dark flex justify-between items-center">
              <span className="text-white text-sm">Visualization Mode: High-Fidelity Raytracing</span>
              <Button size="sm" variant="secondary" onClick={() => setShowAR(false)}>Close Viewer</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};