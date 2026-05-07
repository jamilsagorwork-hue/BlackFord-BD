/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Headset, Mail, Phone, MapPin, Send, Facebook } from 'lucide-react';

export const Support = () => {
    const { addTicket } = useApp();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTicket(formData);
        setSubmitted(true);
        setFormData({ customerName: '', customerEmail: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Support Center</h1>
            <p className="text-slate-500 text-lg font-medium italic">Whether you have a question about our products, or need help with a transaction, we're here for you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-8 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 italic">Communications</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 border border-indigo-100 shadow-sm"><Mail className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Electronic Mail</p>
                                <p className="text-slate-800 font-bold">support@blackfordbd.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100 shadow-sm"><Phone className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Direct Line</p>
                                <p className="text-slate-800 font-bold">+880 1234 567 890</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-50 rounded-xl text-amber-600 border border-amber-100 shadow-sm"><MapPin className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">HQ Logistics</p>
                                <p className="text-slate-800 font-bold">Banani, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 border border-indigo-100 shadow-sm"><Facebook className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Social Connection</p>
                                <a 
                                  href="https://m.me/61578417148385" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-slate-800 font-bold hover:text-indigo-600 transition-colors"
                                >
                                  Chat with us on Messenger
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="p-10 bg-white rounded-3xl border border-slate-200 space-y-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Entity Name</label>
                            <input required type="text" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-indigo-500 font-medium text-slate-800" placeholder="Full Name" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Account Mail</label>
                            <input required type="email" value={formData.customerEmail} onChange={e => setFormData({...formData, customerEmail: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-indigo-500 font-medium text-slate-800" placeholder="email@example.com" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Inquiry Details</label>
                        <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-indigo-500 resize-none font-medium text-slate-800 italic" placeholder="How can we assist you today?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl">
                         Transmit Inquiry <Send className="w-4 h-4" />
                    </button>
                    {submitted && (
                        <p className="text-emerald-600 text-center font-bold text-xs uppercase tracking-widest animate-pulse border border-emerald-100 bg-emerald-50 py-3 rounded-lg">Transmission Successful. Operation Logged.</p>
                    )}
                </form>
            </div>
        </div>
    </div>
    );
};
