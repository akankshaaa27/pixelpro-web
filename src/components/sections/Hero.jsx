import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-40">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary-600/10 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-ping"></span>
                            <span>The Future of Software is AI-Driven</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Future-Proof Your <br />
                            <span className="text-gradient">Business with AI</span> <br />
                            Integration.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                            We combine high-performance software engineering with cutting-edge AI integration. Build scalable ecosystems that think, learn, and grow.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link to="/contact" className="btn-primary flex items-center group w-full sm:w-auto justify-center">
                                <span>Start Your Project</span>
                                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="flex items-center space-x-3 text-slate-900 dark:text-white font-semibold hover:text-primary-600 transition-colors">
                                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-md group">
                                    <Play size={20} className="fill-current text-primary-600 ml-1" />
                                </div>
                                <span>Watch Demo</span>
                            </button>
                        </div>

                        <div className="mt-12 flex items-center space-x-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" width={40} height={40} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="flex text-yellow-500 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">Trusted by 500+ Businesses</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass-card p-4 shadow-2xl border-white/30">
                            <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-[4/3] relative">
                                {/* Mockup UI or Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Dashboard Preview"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="h-2 w-32 bg-primary-600/50 rounded"></div>
                                        <div className="h-2 w-16 bg-slate-700 rounded"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 w-full bg-slate-800 rounded"></div>
                                        <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-10 -right-10 z-20 glass-card p-6 rounded-2xl shadow-xl w-48 hidden sm:block"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">↗</div>
                                <span className="text-sm font-bold">+124%</span>
                            </div>
                            <p className="text-xs text-slate-500">Revenue Growth</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-10 -left-10 z-20 glass-card p-6 rounded-2xl shadow-xl w-56 hidden sm:block"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center">☕</div>
                                <span className="text-sm font-bold">2,400+</span>
                            </div>
                            <p className="text-xs text-slate-500">Projects Delivered</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
