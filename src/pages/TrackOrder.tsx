/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Package, Search, ChevronRight, Clock, CheckCircle, Truck, PackageCheck } from 'lucide-react';
import { format } from 'date-fns';

export const TrackOrder = () => {
  const { trackOrder } = useApp();
  const [orderId, setOrderId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const order = trackOrder(orderId.trim());
    if (order) {
      setResult(order);
      setError('');
    } else {
      setResult(null);
      setError('Order not found. Please check your Order ID and try again.');
    }
  };

  const steps = [
    { label: 'Pending', icon: Clock },
    { label: 'Processing', icon: CheckCircle },
    { label: 'Shipped', icon: Truck },
    { label: 'Delivered', icon: PackageCheck },
  ];

  const currentStepIndex = steps.findIndex(s => s.label === result?.status);

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Order Tracking</h1>
        <p className="text-slate-500 font-medium italic">Enter your order ID to see its current status and delivery progress.</p>
      </div>

      <form onSubmit={handleTrack} className="flex gap-2 max-w-lg mx-auto bg-white p-2 rounded-xl shadow-sm border border-slate-200">
        <input 
          type="text" 
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="ORD-XXXXXXXXX"
          className="bg-transparent rounded-lg px-4 py-3 flex-grow text-slate-800 focus:outline-none uppercase font-bold tracking-widest text-sm"
        />
        <button type="submit" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-indigo-600 transition-colors uppercase text-xs tracking-widest">
          <Search className="w-4 h-4" /> Track
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-center rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-100">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Order Identifier</p>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">{result.id}</h2>
            </div>
            <div className="md:text-right">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Transaction Date</p>
              <p className="text-slate-800 mt-1 font-medium">{format(new Date(result.createdAt), 'PPpp')}</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx <= currentStepIndex;
                return (
                  <div key={step.label} className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center z-10 transition-colors shadow-sm ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-300 border border-slate-100'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
               <h3 className="text-lg font-bold text-slate-800 italic">Shipping Destination</h3>
               <div className="text-sm text-slate-500 space-y-1 font-medium">
                 <p className="text-slate-900 font-bold">{result.customerName}</p>
                 <p>{result.address}</p>
                 <p>{result.customerPhone}</p>
                 <p>{result.customerEmail}</p>
               </div>
            </div>
            <div className="space-y-4">
               <h3 className="text-lg font-bold text-slate-800 italic">Manifest Summary</h3>
               <div className="space-y-3">
                 {result.items.map((item: any) => (
                   <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">{item.name} <span className="text-xs italic text-slate-400">({item.quantity})</span></span>
                      <span className="text-slate-900 font-bold">{item.price * item.quantity} tk</span>
                   </div>
                 ))}
                 <div className="pt-3 border-t border-slate-100 flex justify-between">
                    <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">Total Amount</span>
                    <span className="font-bold text-indigo-600">{result.total} tk</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
