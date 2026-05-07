/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Truck, User } from 'lucide-react';

export const Checkout = () => {
    const { cart, placeOrder } = useApp();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: 'Dhaka',
        payment: 'COD'
    });

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 60;
    const total = subtotal + delivery;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const order = placeOrder(formData);
        navigate('/track', { state: { orderId: order.id } });
    };

    if (cart.length === 0) return <div className="py-32 text-center text-white">Cart is empty. Redirecting...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="border-b border-slate-200 pb-8 mb-12 flex justify-between items-end">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Order Finalization</h1>
                <p className="text-slate-500 text-sm font-medium italic mt-1">Complete your transaction to finalize the procurement</p>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">Session Secure ● Encrypted</p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
                <section className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 text-indigo-600 border-b border-slate-100 pb-4">
                        <User className="w-5 h-5" />
                        <h2 className="text-lg font-bold italic">Entity Identification</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Legal Name</label>
                            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Contact Terminal</label>
                            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="017XXXXXXXX" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Electronic Mail</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="john@example.com" />
                    </div>
                </section>

                <section className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 text-indigo-600 border-b border-slate-100 pb-4">
                        <Truck className="w-5 h-5" />
                        <h2 className="text-lg font-bold italic">Logistic Target</h2>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Distribution Path</label>
                        <input required type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="Street, Area, Building..." />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Jurisdiction / City</label>
                            <select value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-bold text-slate-800 appearance-none">
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Sylhet</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 text-indigo-600 border-b border-slate-100 pb-4">
                        <CreditCard className="w-5 h-5" />
                        <h2 className="text-lg font-bold italic">Settlement Protocol</h2>
                    </div>
                    <div className="space-y-4">
                        <label className={`flex items-center justify-between p-6 rounded-2xl border cursor-pointer transition-all ${formData.payment === 'COD' ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}>
                            <div className="flex items-center gap-4">
                                <input type="radio" name="payment" value="COD" checked={formData.payment === 'COD'} onChange={e => setFormData({...formData, payment: e.target.value as any})} className="accent-indigo-600" />
                                <span className="font-bold text-slate-900 text-sm">Settlement on Delivery</span>
                            </div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Preferred Method</span>
                        </label>
                        <label className="flex items-center justify-between p-6 rounded-2xl border border-slate-50 bg-slate-50/50 opacity-40 cursor-not-allowed">
                            <div className="flex items-center gap-4">
                                <input type="radio" disabled className="accent-slate-300" />
                                <span className="font-bold text-slate-400 text-sm">bKash / Electronic Transfer</span>
                            </div>
                            <span className="text-[9px] uppercase font-bold text-red-400 tracking-widest">Maintenance Mode</span>
                        </label>
                    </div>
                </section>
            </div>

            <div className="lg:sticky lg:top-24 h-fit bg-slate-900 rounded-3xl p-10 space-y-10 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h2 className="text-2xl font-bold text-white italic relative z-10">Vault Manifest</h2>
                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 relative z-10 custom-scrollbar">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center gap-5 group">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-18 bg-white/10 rounded-lg overflow-hidden border border-white/10 p-1 flex-shrink-0">
                                    <img src={item.image} className="w-full h-full object-cover rounded shadow-sm" />
                                </div>
                                <div className="max-w-[180px]">
                                    <p className="text-[11px] font-bold text-white tracking-tight line-clamp-1 group-hover:text-indigo-300 transition-colors">{item.name}</p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Units: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="text-sm font-bold text-white whitespace-nowrap">{item.price * item.quantity} tk</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base Summation</span>
                        <span className="text-white font-bold">{subtotal} tk</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Logistic Surcharge</span>
                        <span className="text-white font-bold">{delivery} tk</span>
                    </div>
                    <div className="flex justify-between pt-6 border-t border-white/20 items-end">
                        <div>
                            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.2em] block mb-1">Grand Settlement</span>
                            <span className="text-3xl font-bold text-white">{total} tk</span>
                        </div>
                        <div className="text-right">
                           <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Verified</span>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full bg-white text-slate-900 py-5 rounded font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all shadow-xl relative z-10">
                    <ShieldCheck className="w-4 h-4" /> Authorization & Order
                </button>
                <div className="pt-4 text-center relative z-10">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-loose">
                        Secure transaction monitored by<br/>BlackFord Internal Neural Systems
                    </p>
                </div>
            </div>
        </form>
    </div>
    );
};
