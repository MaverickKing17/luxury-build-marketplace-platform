import React from 'react';
import { MetricCard } from '../ui/MetricCard';
import { Activity, DollarSign, Clock, Layers, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const DashboardView: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif text-brand-dark mb-2">Executive Overview</h1>
          <p className="text-slate-500">Real-time intelligence on procurement velocity and supply chain health.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">Download Report</Button>
          <Button size="sm">New Project</Button>
        </div>
      </div>

      {/* KPI Grid - HubSpot/Jira Style Data Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Procurement Value" 
          value="$2.4M" 
          icon={DollarSign}
          trend={{ value: "12% vs last month", direction: "up" }}
          subtext="Across 3 active projects"
        />
        <MetricCard 
          title="Sourcing Efficiency" 
          value="320 hrs" 
          icon={Clock}
          trend={{ value: "Saved by AI", direction: "up" }}
          subtext="Equivalent to 2.5 FTE weeks"
        />
        <MetricCard 
          title="Active Workflows" 
          value="12" 
          icon={Layers}
          trend={{ value: "2 pending review", direction: "neutral" }}
        />
        <MetricCard 
          title="Supply Chain Risk" 
          value="Low" 
          icon={Activity}
          trend={{ value: "98% Stability", direction: "up" }}
          subtext="Verified by 14k data points"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Pipeline Table - Stripe Style Layout */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-serif font-medium text-lg text-brand-dark">Material Pipeline</h3>
            <Button variant="ghost" size="sm" className="text-brand-gold">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3 font-medium">Project</th>
                  <th className="px-6 py-3 font-medium">Material Batch</th>
                  <th className="px-6 py-3 font-medium">Stage</th>
                  <th className="px-6 py-3 font-medium">ETA</th>
                  <th className="px-6 py-3 font-medium text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">Obsidian Tower</td>
                  <td className="px-6 py-4 text-slate-600">Italian Marble & Stone</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                      <Clock className="w-3 h-3" /> Supplier Review
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Oct 24</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">$142,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">The Glass House</td>
                  <td className="px-6 py-4 text-slate-600">Smart Glazing Units</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                      <Activity className="w-3 h-3" /> AI Matching
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Nov 02</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">$88,500</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">Villa Serenity</td>
                  <td className="px-6 py-4 text-slate-600">Reclaimed Teak</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3" /> Ready to Ship
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Oct 18</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">$45,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Center - High urgency items */}
        <div className="space-y-6">
          <div className="bg-brand-dark rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="font-serif text-lg font-medium mb-1 relative z-10">Pending Actions</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">3 items require executive approval</p>
            
            <div className="space-y-3 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/5 hover:bg-white/15 transition-colors cursor-pointer flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Logistics Surcharge</p>
                  <p className="text-xs text-slate-400">Approve +$2.4k for expedited air freight</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/5 hover:bg-white/15 transition-colors cursor-pointer flex items-start gap-3">
                 <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Sample Verification</p>
                  <p className="text-xs text-slate-400">Confirm receipt of Onyx samples</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
             <h3 className="font-serif text-brand-dark font-medium mb-4">Web3 Provenance Feed</h3>
             <div className="space-y-4">
               <div className="flex gap-3 items-start pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                 <div>
                   <p className="text-xs font-mono text-slate-500 mb-0.5">0x71...9a2 • 2m ago</p>
                   <p className="text-sm text-slate-800">Smart Contract <span className="font-medium">Minted</span> for Marble Batch #992</p>
                 </div>
               </div>
               <div className="flex gap-3 items-start">
                 <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                 <div>
                   <p className="text-xs font-mono text-slate-500 mb-0.5">0x3f...b11 • 15m ago</p>
                   <p className="text-sm text-slate-800">Custody transfer recorded: <span className="font-medium">Port of Genoa</span></p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};