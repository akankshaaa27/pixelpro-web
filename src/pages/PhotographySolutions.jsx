import { motion } from 'framer-motion';
import { Camera, Calendar, Users, BarChart3, Cloud, Layout, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotographySolutions = () => {
    const solutions = [
        { title: 'Portfolio Websites', icon: Layout, desc: 'Stunning galleries designed to showcase your best work with high-resolution support.' },
        { title: 'AI Smart Culling', icon: Sparkles, desc: 'Reduce hours of selection to minutes with AI-driven image culling and face detection.' },
        { title: 'Photography CRM', icon: Users, desc: 'Manage clients, sessions, and contracts in one centralized location.' },
        { title: 'AI Retouching', icon: Brain, desc: 'Automated high-end retouching workflows for skin tones, lighting, and background removal.' },
        { title: 'Cloud Proofing', icon: Cloud, desc: 'Secure online galleries for clients with AI-powered face search and facial recognition.' },
        { title: 'Booking Systems', icon: Calendar, desc: 'Automated scheduling with deposit payments and availability management.' },
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block px-4 py-1.5 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-bold mb-6">
                        AI-Ready Solutions
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">Elevate Your <span className="text-secondary-500">Photography Business</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        We build specialized software ecosystems designed specifically for professional photographers and studios to automate their workflow with cutting-edge AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {solutions.map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] glass-card border-none shadow-xl hover:-translate-y-2 transition-transform group">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-500/10 text-secondary-500 flex items-center justify-center mb-8 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-500">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* AI Feature Spotlight */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50 dark:bg-white/5 rounded-[48px] p-12 md:p-24 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[100px] -z-10"></div>
                        <div>
                            <div className="flex items-center space-x-3 text-primary-500 font-bold tracking-widest text-sm uppercase mb-6">
                                <Sparkles size={18} />
                                <span>The Future of Photography</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">AI-Powered <span className="text-primary-600">Client Matching</span></h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                Our AI algorithms analyze client preferences and past bookings to suggest the perfect photography packages for them, increasing your upsell rate by up to 40%.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Facial recognition for instant gallery sorting',
                                    'Smart lighting analysis for batch editing',
                                    'Automated social media caption generation',
                                    'Priority delivery prediction'
                                ].map((task, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="font-semibold">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074&auto=format&fit=crop"
                                    alt="Professional Photography"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-xs font-bold text-white uppercase tracking-widest">AI Vision Probe</div>
                                        <div className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Active</div>
                                    </div>
                                    <div className="flex space-x-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-primary-400"
                                                    animate={{ width: ['0%', '100%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary-500/20 blur-[60px] rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>

                <div className="rounded-[3rem] bg-gradient-to-r from-secondary-600 to-primary-600 p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">Built by Developers, Loved by Photographers</h2>
                        <p className="text-lg text-white/80 mb-10">
                            Transform your hobby into a high-performance business with our specialized automation tools.
                        </p>
                        <Link to="/contact" className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-colors inline-block">
                            Request a Demo
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>
            </div>
        </div>
    );
};

export default PhotographySolutions;
