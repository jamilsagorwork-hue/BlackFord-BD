/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Box, Headset, Search, Facebook, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { LOGO_URL } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cart } = useApp();
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-slate-900 italic">BF</div>
            <span className="text-xl font-bold tracking-tight uppercase">BlackFord BD</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors">Storefront</Link>
            <Link to="/track" className="text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors">Order Tracking</Link>
            <Link to="/support" className="text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors">Support</Link>
            <Link to="/admin" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-colors">Admin Panel</Link>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/shop')} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 hover:bg-slate-800 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link to="/shop" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Shop</Link>
              <Link to="/track" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Track Order</Link>
              <Link to="/support" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Support</Link>
              <Link to="/admin" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-accent">Admin Dashboard</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-slate-100 border-t border-slate-200 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center font-bold text-white italic text-xs">BF</div>
             <span className="text-lg font-bold text-slate-900 uppercase">BlackFord BD</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed italic">
            Handcrafted bottle art that brings light and beauty to your personal space. Each piece is unique and made with love.
          </p>
        </div>
        <div>
          <h4 className="text-slate-800 font-bold mb-4 uppercase tracking-widest text-[10px]">Shop</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><Link to="/shop?cat=Floral" className="hover:text-indigo-600 transition-colors">Floral Collection</Link></li>
            <li><Link to="/shop?cat=Artistic" className="hover:text-indigo-600 transition-colors">Artistic Collection</Link></li>
            <li><Link to="/shop?cat=Classic" className="hover:text-indigo-600 transition-colors">Classic Lights</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-800 font-bold mb-4 uppercase tracking-widest text-[10px]">Information</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><Link to="/track" className="hover:text-indigo-600 transition-colors">Track Your Order</Link></li>
            <li><Link to="/support" className="hover:text-indigo-600 transition-colors">Contact Support</Link></li>
            <li><span className="text-emerald-600 font-bold uppercase tracking-tighter text-[9px]">● Server Online</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-800 font-bold mb-4 uppercase tracking-widest text-[10px]">Follow Us</h4>
          <div className="flex flex-col gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61578417148385" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              <Facebook className="w-4 h-4" /> Facebook Page
            </a>
            <a 
              href="https://m.me/61578417148385" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" /> Messenger Support
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 text-center flex flex-col items-center gap-2">
        <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">
          &copy; {new Date().getFullYear()} BlackFord BD. All rights reserved.
        </p>
        <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.2em] animate-pulse">
          Developed by Jamil • 01307541441
        </p>
      </div>
    </div>
  </footer>
);
