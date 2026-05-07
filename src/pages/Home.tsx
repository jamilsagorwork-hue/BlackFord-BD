/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const navigate = useNavigate();
  const { products, addToCart } = useApp();
  const featured = products.slice(0, 4);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={products[3]?.image} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative text-center px-4 max-w-4xl mx-auto space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif text-6xl md:text-8xl font-bold tracking-tight text-white mb-4"
          >
            BlackFord <span className="text-indigo-400 italic">BD</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8"
          >
            Discover handcrafted bottle lamps that transform light into a story. 
            Designed to elevate your home with warmth and elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/shop" className="bg-indigo-600 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-lg">
              Storefront <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/track" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
              Order Tracking
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Collection</h2>
            <p className="text-slate-500 text-sm italic font-medium">Curated premium items for BlackFord customers</p>
          </div>
          <Link to="/shop" className="text-indigo-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-indigo-500 transition-colors">
            See All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featured.map((product, idx) => (
            <motion.div 
               key={product.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all hover:shadow-md"
            >
              <Link to={`/product/${product.id}`} className="block flex-1 flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-slate-100 border-b border-slate-100 p-3 md:p-6 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-indigo-600 text-white text-[8px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded tracking-widest uppercase shadow-sm">
                    Premium
                  </div>
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-center text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-0.5">
                       <Star className="w-2 md:w-2.5 h-2 md:h-2.5 fill-amber-400 text-amber-400" />
                       <span>4.9</span>
                    </div>
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-slate-800 mb-1 md:mb-2 truncate group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-lg font-bold text-slate-900">{product.price} tk</span>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => { e.preventDefault(); addToCart(product); }}
                          className="w-6 h-6 md:w-8 md:h-8 rounded bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                          title="Add to Cart"
                        >
                          +
                        </button>
                        <button 
                          onClick={(e) => { e.preventDefault(); addToCart(product); navigate('/checkout'); }}
                          className="px-2 md:px-3 h-6 md:h-8 rounded bg-slate-900 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-colors"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-6 text-indigo-600 shadow-sm border border-indigo-100">
                    <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Premium Quality</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">We use high-quality glass and long-lasting LEDs to ensure your art pieces glow for years.</p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-sm border border-emerald-100">
                    <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Handcrafted Art</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Every bottle is hand-painted and designed by local artisans in Bangladesh.</p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mx-auto mb-6 text-amber-600 shadow-sm border border-amber-100">
                    <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Secure Delivery</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Double-wrapped shockproof packaging ensures your fragile items arrive in perfect condition.</p>
            </div>
        </div>
      </section>
    </div>
  );
};
