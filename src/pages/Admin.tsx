/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, ShoppingBag, ListOrdered, MessageSquare, Plus, Edit2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { format } from 'date-fns';

export const Admin = () => {
    const { products, orders, tickets, updateOrderStatus, deleteProduct, addProduct, updateProduct } = useApp();
    const [activeTab, setActiveTab] = useState<'Dashboard' | 'Products' | 'Orders' | 'Support'>('Dashboard');
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: 'Floral',
        description: '',
        image: ''
    });

    const openAddModal = () => {
        setEditingProduct(null);
        setFormData({ name: '', price: '', stock: '', category: 'Floral', description: '', image: '' });
        setIsProductModalOpen(true);
    };

    const openEditModal = (product: any) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            price: product.price.toString(),
            stock: product.stock.toString(),
            category: product.category,
            description: product.description,
            image: product.image
        });
        setIsProductModalOpen(true);
    };

    const handleProductSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const productData = {
            id: editingProduct ? editingProduct.id : Date.now().toString(),
            name: formData.name,
            price: Number(formData.price),
            stock: Number(formData.stock),
            category: formData.category,
            description: formData.description,
            image: formData.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
        };

        if (editingProduct) {
            updateProduct(productData);
        } else {
            addProduct(productData);
        }
        setIsProductModalOpen(false);
    };

    const stats = [
        { label: 'Total Revenue', value: `${orders.reduce((sum, o) => sum + o.total, 0)} TK` },
        { label: 'Orders', value: orders.length },
        { label: 'Active Tickets', value: tickets.filter(t => t.status === 'Open').length },
        { label: 'Products', value: products.length },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-16 flex">
            {/* Product Modal */}
            <AnimatePresence>
                {isProductModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-3xl p-10 max-w-2xl w-full shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 italic">
                                {editingProduct ? 'Update Manifest Entry' : 'Insert New Entry'}
                            </h2>
                            <form onSubmit={handleProductSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Entity Designation</label>
                                        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="Product Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Classification</label>
                                        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-bold text-slate-800 appearance-none">
                                            <option>Floral</option>
                                            <option>Artistic</option>
                                            <option>Classic</option>
                                            <option>Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Valuation (TK)</label>
                                        <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="Price" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Stock Reservoir</label>
                                        <input required type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800" placeholder="Stock Qty" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Visual Resource (URL)</label>
                                    <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-indigo-500 font-medium text-slate-800 text-xs" placeholder="https://image-url.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Technical Description</label>
                                    <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-indigo-500 resize-none font-medium text-slate-800 italic" placeholder="Describe the masterpiece..."></textarea>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => setIsProductModalOpen(false)} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all">Cancel Operation</button>
                                    <button type="submit" className="flex-1 bg-slate-900 text-white py-4 rounded font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-xl">Complete Transmission</button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-700 p-6 hidden lg:block sticky top-16 h-[calc(100vh-64px)] shadow-xl">
                <div className="mb-10 px-4">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Administrative</p>
                    <h2 className="text-white text-lg font-bold tracking-tight">Control Center</h2>
                </div>
                <nav className="space-y-1">
                    {[
                        { id: 'Dashboard', icon: LayoutDashboard },
                        { id: 'Products', icon: ShoppingBag },
                        { id: 'Orders', icon: ListOrdered },
                        { id: 'Support', icon: MessageSquare },
                    ].map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                                activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }`}>
                            <tab.icon className="w-4 h-4" /> {tab.id}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-2">System Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs text-white font-medium">Core Online</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-grow p-8">
                <AnimatePresence mode="wait">
                    {activeTab === 'Dashboard' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 max-w-6xl">
                            <div className="flex justify-between items-end border-b border-slate-200 pb-6 mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Analytic Overview</h1>
                                    <p className="text-slate-500 text-sm font-medium italic">Performance metrics for the current period</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Update</p>
                                    <p className="text-slate-900 text-xs font-bold">Live Stream Active</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((s, idx) => (
                                    <div key={s.label} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest relative z-10">{s.label}</p>
                                        <p className="text-2xl font-bold text-slate-900 mt-2 relative z-10">{s.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
                                    <h3 className="text-lg font-bold text-slate-800 mb-6 italic">Recent Transactions</h3>
                                    <div className="space-y-3 flex-1">
                                        {orders.slice(0, 5).map(o => (
                                            <div key={o.id} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                                <div>
                                                    <p className="text-xs font-bold text-indigo-600 tracking-tighter">{o.id}</p>
                                                    <p className="text-slate-500 text-[11px] font-medium">{o.customerName}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-slate-900 text-sm font-bold">{o.total} tk</p>
                                                    <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full ${
                                                        o.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                                    }`}>{o.status}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                    <h3 className="text-lg font-bold text-slate-800 mb-6 italic">Inventory Alerts</h3>
                                    <div className="space-y-4">
                                        {products.filter(p => p.stock < 10).map(p => (
                                            <div key={p.id} className="flex justify-between items-center p-3 bg-red-50/30 rounded-xl border border-red-100 text-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                                        <img src={p.image} className="w-full h-full object-cover" />
                                                    </div>
                                                    <p className="text-slate-800 font-bold text-xs">{p.name}</p>
                                                </div>
                                                <p className="text-red-500 font-bold text-xs uppercase tracking-tighter">{p.stock} Units</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Products' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 max-w-6xl">
                            <div className="flex justify-between items-end border-b border-slate-200 pb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Vault Inventory</h1>
                                    <p className="text-slate-500 text-sm font-medium italic">Manage stock levels and product entries</p>
                                </div>
                                <button onClick={openAddModal} className="bg-slate-900 text-white px-6 py-3 rounded font-bold flex items-center gap-2 text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                                    <Plus className="w-3 h-3" /> Insert Entry
                                </button>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left min-w-[600px]">
                                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-400 text-[10px] uppercase font-bold tracking-widest ">
                                        <tr>
                                            <th className="p-6">Entity Identifier</th>
                                            <th className="p-6">Pricing</th>
                                            <th className="p-6">Qty</th>
                                            <th className="p-6 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {products.map(p => (
                                            <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="p-6 flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                                        <img src={p.image} className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="text-slate-800 font-bold text-sm tracking-tight">{p.name}</span>
                                                </td>
                                                <td className="p-6 text-indigo-600 font-bold text-sm">{p.price} tk</td>
                                                <td className="p-6">
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                                        p.stock < 10 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
                                                    }`}>{p.stock}</span>
                                                </td>
                                                <td className="p-6 text-right space-x-2">
                                                    <button onClick={() => openEditModal(p)} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => deleteProduct(p.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Orders' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 max-w-6xl">
                             <div className="flex justify-between items-end border-b border-slate-200 pb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Order Logs</h1>
                                    <p className="text-slate-500 text-sm font-medium italic">Real-time transaction monitoring</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left min-w-[800px]">
                                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-400 text-[10px] uppercase font-bold tracking-widest ">
                                        <tr>
                                            <th className="p-6">Transaction ID</th>
                                            <th className="p-6">Account Holder</th>
                                            <th className="p-6">Fulfillment</th>
                                            <th className="p-6">Settlement</th>
                                            <th className="p-6 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {orders.map(o => (
                                            <tr key={o.id} className="hover:bg-slate-50 group">
                                                <td className="p-6 text-indigo-600 font-bold text-xs tracking-tighter uppercase">{o.id}</td>
                                                <td className="p-6 text-slate-700 text-xs font-bold">{o.customerName}</td>
                                                <td className="p-6">
                                                    <select 
                                                        value={o.status} 
                                                        onChange={(e) => updateOrderStatus(o.id, e.target.value as any)} 
                                                        className="bg-white border border-slate-200 rounded px-3 py-1 text-[10px] font-bold uppercase text-slate-600 focus:outline-indigo-500"
                                                    >
                                                        {['Pending', 'Processing', 'Shipped', 'Delivered'].map(s => <option key={s} value={s}>{s}</option>)}
                                                    </select>
                                                </td>
                                                <td className="p-6 text-slate-900 font-bold text-sm">{o.total} tk</td>
                                                <td className="p-6 text-right">
                                                    <button className="text-indigo-600 text-[9px] font-bold uppercase tracking-widest hover:underline">Inspect</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Support' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 max-w-4xl">
                            <div className="flex justify-between items-end border-b border-slate-200 pb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Communications</h1>
                                    <p className="text-slate-500 text-sm font-medium italic">Intercepted customer queries</p>
                                </div>
                            </div>

                            {tickets.length === 0 ? (
                                <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl">
                                    <MessageSquare className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">No Active Transmissions</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {tickets.map(t => (
                                        <div key={t.id} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between gap-6 transition-all hover:shadow-md">
                                            <div className="space-y-4 max-w-xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold italic">
                                                        {t.customerName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-800 text-sm tracking-tight">{t.customerName}</h4>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t.customerEmail}</p>
                                                    </div>
                                                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${
                                                        t.status === 'Open' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-400'
                                                    }`}>{t.status}</span>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-indigo-100 pl-4">"{t.message}"</p>
                                            </div>
                                            <div className="flex md:flex-col justify-end gap-3">
                                                <button className="bg-slate-900 text-white px-6 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-colors shadow-sm">Resolve</button>
                                                <button className="text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-slate-600 px-6 py-2">Archive</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};
