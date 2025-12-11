import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, Printer, Download, Clock, CreditCard, Lock } from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock checkout items
  const items = [
    { name: 'Statuario Venato Marble Slab', qty: 450, price: 420, total: 189000 },
    { name: 'Hand-Forged Bronze Hardware', qty: 120, price: 85, total: 10200 },
    { name: 'Architectural Glazing Units', qty: 14, price: 1200, total: 16800 }
  ];

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const logistics = 5500;
  const taxes = subtotal * 0.0825;
  const total = subtotal + logistics + taxes;

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center p-12 bg-white rounded-xl shadow-lg border-t-4 border-brand-gold animate-fade-in">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-serif text-brand-dark mb-2">Quote Request Securely Sent</h1>
        <p className="text-slate-600 mb-8">Order Ref: <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800">CHM-8892-XJ</span></p>
        
        <div className="bg-slate-50 rounded p-6 text-left text-sm text-slate-700 mb-8 border border-slate-200">
          <p className="mb-2"><strong>Next Steps:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Suppliers have been notified to reserve inventory for 48 hours.</li>
            <li>Smart Contract #0x992...88a created for provenance tracking.</li>
            <li>Logistics team will contact you within 4 hours to confirm site access.</li>
          </ul>
        </div>

        <Button onClick={() => window.location.reload()}>Return to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-in">
      {/* Left Column: Order Details */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h1 className="text-3xl font-serif text-brand-dark mb-2">Finalize Procurement</h1>
          <p className="text-slate-600">Review line items, lead times, and secure provenance tokens.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h3 className="font-semibold text-brand-dark">Order Summary</h3>
            <span className="text-xs text-slate-500">3 Items Selected</span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left">Material / Product</th>
                <th className="px-6 py-3 text-center">Qty</th>
                <th className="px-6 py-3 text-right">Unit Price</th>
                <th className="px-6 py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-800">{item.name}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{item.qty}</td>
                  <td className="px-6 py-4 text-right text-slate-600">${item.price.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-slate-900 font-medium">${item.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Provenance Section */}
        <div className="bg-brand-dark text-slate-300 rounded-lg p-6 flex items-start gap-4 shadow-lg">
          <div className="p-3 bg-white/10 rounded-lg">
            <Lock className="w-6 h-6 text-brand-gold" />
          </div>
          <div className="flex-1">
             <h4 className="text-white font-serif font-medium text-lg mb-1">Blockchain Provenance Guarantee</h4>
             <p className="text-sm text-slate-400 mb-4 leading-relaxed">
               Every high-value material in this cart will be minted as an NFT on the Ethereum blockchain upon purchase, ensuring immutable history of origin, custody, and authenticity.
             </p>
             <div className="flex gap-4 text-xs font-mono text-brand-gold">
               <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Smart Contract Audited</span>
               <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Timestamp Ready</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right Column: Totals & Action */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 sticky top-24">
          <h3 className="font-serif font-semibold text-lg text-brand-dark mb-6">Quote Estimation</h3>
          
          <div className="space-y-3 text-sm border-b border-slate-100 pb-6 mb-6">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Secure Logistics</span>
              <span>${logistics.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Estimated Taxes</span>
              <span>${taxes.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline mb-8">
            <span className="font-medium text-slate-900">Total Estimate</span>
            <span className="text-2xl font-serif font-bold text-brand-dark">${total.toLocaleString()}</span>
          </div>

          <Button className="w-full mb-3 py-3 text-base" onClick={() => setIsSuccess(true)}>
            Request Binding Quote
          </Button>
          <p className="text-xs text-center text-slate-400 mb-6">
            By proceeding, you agree to the <a href="#" className="underline hover:text-brand-dark">Service Terms</a>.
          </p>

          <div className="flex gap-3 justify-center">
             <button className="text-slate-400 hover:text-brand-dark p-2" title="Print Quote"><Printer className="w-5 h-5" /></button>
             <button className="text-slate-400 hover:text-brand-dark p-2" title="Download PDF"><Download className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};