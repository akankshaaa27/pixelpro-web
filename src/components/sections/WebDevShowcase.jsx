import { motion } from 'framer-motion';
import { Monitor, Code2, Globe, Database, Cpu, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevShowcase = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-6 relative">
                            {/* Decorative element */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-600/10 blur-[60px] rounded-full"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                                    <Layout size={24} />
                                </div>
                                <h4 className="font-bold mb-2">Modern UI/UX</h4>
                                <p className="text-xs text-slate-500">Pixel-perfect designs that convert visitors into customers.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none translate-y-8"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                                    <Database size={24} />
                                </div>
                                <h4 className="font-bold mb-2">Robust Backend</h4>
                                <p className="text-xs text-slate-500">Scalable server-side logic and database structures.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                                    <Cpu size={24} />
                                </div>
                                <h4 className="font-bold mb-2">AI Ready</h4>
                                <p className="text-xs text-slate-500">Integrated machine learning for smart application features.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none translate-y-8"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                                    <Globe size={24} />
                                </div>
                                <h4 className="font-bold mb-2">Global Scale</h4>
                                <p className="text-xs text-slate-500">Optimized for search engines and global accessibility.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                            <Monitor size={14} />
                            <span>Enterprise Web Development</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            We Build <span className="text-primary-600">Digital Engines</span> That Drive Real Results.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            Our web development process focuses on three core pillars: Speed, Security, and Scalability. We use the latest tech like Next.js and Node.js to create seamless digital experiences.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                'Full-stack React & Next.js Development',
                                'Custom API & Microservices Integration',
                                'Performance Optimization & Core Web Vitals',
                                'Responsive, Mobile-First Architectures'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center text-white text-[10px]">✓</div>
                                    <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/services/web-development" className="btn-primary flex items-center space-x-3 w-fit">
                            <span>Explore Web Solutions</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevShowcase;
