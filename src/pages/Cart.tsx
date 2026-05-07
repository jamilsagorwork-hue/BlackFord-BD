/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronRight, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useApp();
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 60;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center space-y-8">
        <div className="w-32 h-32 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto shadow-inner relative">
          <div className="absolute inset-0 bg-indigo-50 rounded-full animate-ping opacity-20 scale-75"></div>
          <ShoppingBag className="w-12 h-12 text-slate-300 relative z-10" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Empty Manifest</h1>
          <p className="text-slate-500 text-sm font-medium italic mt-2">No selections recorded in the current session.</p>
        </div>
        <Link to="/shop" className="inline-block bg-slate-900 text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-xl">
          Return to Storefront
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-8 font-bold uppercase tracking-widest">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-indigo-600">Storefront</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Cart</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Shopping Manifest</h1>
            <p className="text-slate-500 text-sm font-medium italic">Review your selections before settlement</p>
          </div>
          
          {cart.map(item => (
            <div key={item.id} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md group">
              <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="line-clamp-1 text-sm font-bold text-slate-800 tracking-tight">{item.name}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors p-2">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-white hover:shadow-sm rounded transition-all text-slate-500"><Minus className="w-3 h-3" /></button>
                    <span className="w-8 text-center text-xs font-bold text-slate-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-white hover:shadow-sm rounded transition-all text-slate-500"><Plus className="w-3 h-3" /></button>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Subtotal</p>
                    <p className="font-bold text-slate-900">{item.price * item.quantity} tk</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 italic">Financial Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Base Amount</span>
                <span className="text-slate-900 font-bold">{subtotal} tk</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Logistics Fee</span>
                  <span className="text-slate-900 font-bold">{deliveryFee} tk</span>
              </div>
              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Settlement Total</span>
                  <span className="text-2xl font-bold text-indigo-600">{total} tk</span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-slate-900 text-white py-4 rounded font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-lg"
            >
              Proceed to Shipping
            </button>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl italic">
            <p className="text-[10px] text-slate-500 text-center leading-relaxed">
              * Manifest processing time: 2-4 business days for metropolitan areas. Regional logistics may require additional 72 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
