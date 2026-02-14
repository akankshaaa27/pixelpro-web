import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Box, Truck, BarChart2, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
    const features = [
        {
            title: 'High-Conversion Checkout',
            desc: 'Optimized one-page checkout flows designed to reduce cart abandonment and maximize revenue.',
            icon: CreditCard,
            color: 'text-orange-500'
        },
        {
            title: 'Smart Inventory Management',
            desc: 'Real-time stock tracking with automated supplier notifications and multi-warehouse support.',
            icon: Box,
            color: 'text-blue-500'
        },
        {
            title: 'AI Product Recommendations',
            desc: 'Machine learning algorithms that suggest products based on user behavior and purchase history.',
            icon: Zap,
            color: 'text-yellow-500'
        },
        {
            title: 'Global Logistics Sync',
            desc: 'Seamless integration with major shipping carriers like FedEx, UPS, and DHL for real-time tracking.',
            icon: Truck,
            color: 'text-emerald-500'
        },
        {
            title: 'Advanced Analytics',
            desc: 'Detailed sales reports, customer heatmaps, and funnel analysis to drive data-informed decisions.',
            icon: BarChart2,
            color: 'text-purple-500'
        },
        {
            title: 'Mobile-First Shopping',
            desc: 'PWA technology that provides a native app-like experience for shoppers on the go.',
            icon: Smartphone,
            color: 'text-pink-500'
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-sm font-bold mb-6">
                            <ShoppingBag size={14} className="fill-current" />
                            <span>Future of Retail</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Build Your <span className="text-orange-500">Digital Empire</span> With Us.
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            We create e-commerce experiences that don't just sell, but build brand loyalty. From specialized photographer shops to massive global marketplaces.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/contact" className="btn-primary bg-orange-600 hover:bg-orange-700 shadow-orange-500/20">Launch Store</Link>
                            <Link to="/portfolio" className="btn-outline border-orange-600 text-orange-600 hover:bg-orange-50">View Case Studies</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
                                alt="Ecommerce"
                                className="rounded-[3rem] shadow-2xl relative z-10"
                            />
                            <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-500/20 blur-[60px] rounded-full"></div>
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass-card border-none shadow-xl hover:-translate-y-2 transition-transform h-full flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 ${item.color}`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed flex-grow">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Conversion Stats */}
                <div className="bg-slate-50 dark:bg-white/5 rounded-[4rem] p-12 md:p-24 text-center">
                    <h2 className="text-4xl font-black mb-16">The PixelPro Performance Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { val: '+35%', label: 'Checkout Conversion' },
                            { val: '-40%', label: 'Load Time Reduction' },
                            { val: '+22%', label: 'Customer Retention' },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-5xl md:text-6xl font-black text-orange-500">{stat.val}</div>
                                <div className="text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;
