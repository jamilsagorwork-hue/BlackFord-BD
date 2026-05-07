/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShoppingBag, ChevronLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useApp();
  const product = products.find(p => p.id === id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <div className="py-32 text-center text-white">Product not found</div>;

  const handleAddToCart = () => {
    for(let i=0; i<qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    for(let i=0; i<qty; i++) addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
       <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors mb-8 group font-bold text-[10px] uppercase tracking-widest">
          <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back
       </button>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm p-12 flex items-center justify-center relative group"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-8 right-8 w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center shadow-inner border border-slate-100">
               <Star className="w-6 h-6 text-indigo-600" />
            </div>
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-indigo-600 text-[10px] font-bold uppercase tracking-[0.2em] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                <Star className="w-3 h-3" /> Master Artisan Selection
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-slate-900 leading-none">{product.price} tk</p>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">● In Stock</span>
              </div>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed font-medium italic">
              {product.description}
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-8 border-y border-slate-100">
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded h-14">
                  <button onClick={() => setQty(q => Math.max(1, q-1))} className="px-6 hover:bg-white h-full transition-colors font-light text-2xl text-slate-400">-</button>
                  <span className="w-12 text-center text-slate-900 font-bold text-lg">{qty}</span>
                  <button onClick={() => setQty(q => q+1)} className="px-6 hover:bg-white h-full transition-colors font-light text-2xl text-slate-400">+</button>
                </div>
                <div className="flex-grow flex gap-3">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-slate-900 text-slate-900 h-14 rounded font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-slate-50 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" /> {added ? 'Added to Manifest' : 'Add to Manifest'}
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 bg-slate-900 text-white h-14 rounded font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl"
                  >
                     Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">1 Year Guarantee</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Priority Logistics</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Returns Acceptable</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600">
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Handmade Excellence</span>
               </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 mt-8 shadow-sm">
               <h4 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest italic">Shipping Policy</h4>
               <p className="text-xs text-slate-500 leading-relaxed font-medium capitalize">Complimentary logistics for metropolitan orders exceeding 2000 tk. Standard 60 tk surcharge for regional distribution.</p>
            </div>
          </div>
       </div>
    </div>
  );
};
