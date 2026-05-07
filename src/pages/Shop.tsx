/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { Filter, ShoppingBag, Star, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Shop = () => {
  const navigate = useNavigate();
  const { products, addToCart } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 space-y-12">
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-6">Product Categories</h3>
          <ul className="space-y-4">
            {categories.map(cat => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'text-indigo-600 font-bold' 
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {cat === 'All' ? products.length : products.filter(p => p.category === cat).length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-xs font-bold text-slate-800 mb-2 italic">Secure Checkout</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-4">SSL Encryption enabled. bKash & SSLCommerz verified.</p>
          <div className="flex gap-2 opacity-30 grayscale items-center mb-6">
            <div className="w-8 h-5 bg-slate-400 rounded"></div>
            <div className="w-8 h-5 bg-slate-400 rounded"></div>
            <div className="w-8 h-5 bg-slate-400 rounded"></div>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
             <h4 className="text-xs font-bold text-slate-800 mb-2 uppercase tracking-widest">Support Desk</h4>
             <p className="text-[10px] text-slate-500 mb-4">Direct message our artisan team for inquiries</p>
             <a 
               href="https://m.me/61578417148385" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-md"
             >
               <MessageCircle className="w-3 h-3" /> Chat Now
             </a>
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-end mb-10 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Our Collection</h1>
            <p className="text-slate-500 text-sm italic">Curated premium items for BlackFord customers</p>
          </div>
          <p className="text-[11px] text-slate-400 italic">Showing {filteredProducts.length} items</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={product.id} 
              className="bg-white border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 p-3 md:p-8 flex items-center justify-center">
                 <Link to={`/product/${product.id}`} className="w-full h-full">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" />
                 </Link>
                 <div className="absolute inset-x-2 md:inset-x-4 bottom-2 md:bottom-4 flex flex-col gap-1 md:gap-2 opacity-0 lg:group-hover:opacity-100 translate-y-2 lg:group-hover:translate-y-0 transition-all z-10">
                   <button 
                     onClick={() => addToCart(product)}
                     className="bg-white border-2 border-slate-900 text-slate-900 py-2 md:py-2.5 rounded font-bold text-[8px] md:text-[10px] uppercase tracking-widest shadow-lg hover:bg-slate-50 transition-all"
                   >
                     Add
                   </button>
                   <button 
                     onClick={() => { addToCart(product); navigate('/checkout'); }}
                     className="bg-slate-900 text-white py-2 md:py-2.5 rounded font-bold text-[8px] md:text-[10px] uppercase tracking-widest shadow-xl hover:bg-indigo-600 transition-all"
                   >
                     Buy Now
                   </button>
                 </div>
                 {product.stock < 5 && (
                   <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Limited</span>
                 )}
              </div>
              <div className="p-3 md:p-5 flex flex-col flex-1 text-center md:text-left">
                <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 md:mb-1">{product.category}</span>
                <h3 className="text-xs md:text-sm font-bold text-slate-800 mb-1 md:mb-2 truncate group-hover:text-indigo-600 transition-colors">
                   <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm md:text-lg font-bold text-slate-900">{product.price} tk</span>
                  <div className="flex items-center gap-0.5">
                     <Star className="w-2 md:w-2.5 h-2 md:h-2.5 fill-amber-400 text-amber-400" />
                     <span className="text-[8px] md:text-[10px] font-bold text-slate-400">4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
