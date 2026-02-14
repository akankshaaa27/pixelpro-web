import { motion } from 'framer-motion';
import { Camera, Calendar, Users, BarChart3, Cloud, Layout, Sparkles, Brain, CheckCircle2, Zap, ArrowRight, Smartphone, Image as ImageIcon } from 'lucide-react';
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

    const workflowSteps = [
        {
            title: "Capture & Sync",
            desc: "Shoot directly to our cloud-connected app. Photos sync in real-time to your studio dashboard.",
            icon: Camera,
            step: "01"
        },
        {
            title: "AI Analysis",
            desc: "Our neural engine automatically sorts, culls, and tags images based on quality and content.",
            icon: Brain,
            step: "02"
        },
        {
            title: "Instant Proofing",
            desc: "Clients receive a personalized gallery link with facial recognition search within minutes.",
            icon: ImageIcon,
            step: "03"
        },
        {
            title: "Seamless Checkout",
            desc: "Automated upsells and high-res downloads once payments are processed through Stripe/PayPal.",
            icon: Smartphone,
            step: "04"
        }
    ];

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden mb-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
                        alt="Photography Tech Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-bold mb-6 border border-secondary-500/30"
                        >
                            <Zap size={14} className="inline mr-2" />
                            Next-Gen Photography OS
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight"
                        >
                            Where Art Meets <br />
                            <span className="text-secondary-500 text-gradient">Automation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
                        >
                            The most advanced software ecosystem built for the professional photographer who refuses to settle for average workflows.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/contact" className="px-10 py-4 bg-secondary-500 text-white rounded-2xl font-bold hover:bg-secondary-600 transition-colors flex items-center justify-center">
                                Start Free Trial
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/portfolio" className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-colors backdrop-blur-md flex items-center justify-center">
                                View Demo Gallery
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6">
                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass-card border-none shadow-xl hover:-translate-y-2 transition-transform group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary-500/10 text-secondary-500 flex items-center justify-center mb-8 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-secondary-500/10">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Workflow Section */}
                <section className="py-24 mb-32 relative">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Built for the <span className="text-primary-600">Modern Workflow</span></h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Our ecosystem connects every part of your photography business into one high-performance machine.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {workflowSteps.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="text-8xl font-black text-slate-100 dark:text-slate-900 absolute -top-10 -left-4 -z-10 select-none">
                                    {step.step}
                                </div>
                                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm relative z-10 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-primary-600/10 text-primary-600 flex items-center justify-center mb-6">
                                        <step.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>
                                {i < workflowSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 z-20 text-slate-300">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

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
                                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
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

                {/* Call to Action */}
                <div className="rounded-[3rem] bg-gradient-to-r from-secondary-600 to-primary-600 p-12 md:p-32 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Ready to Transform Your Photography Business?</h2>
                        <p className="text-xl text-white/80 mb-12 leading-relaxed">
                            Join over 5,000 professional photographers who have reclaimed an average of 15 hours per week using PixelPro's automation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all hover:scale-105 inline-block text-lg">
                                Start Your Project
                            </Link>
                            <span className="text-sm font-bold text-white/60">No credit card required.</span>
                        </div>
                    </div>
                    {/* Animated background shapes */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -left-1/2 w-full h-full border-[1px] border-white/5 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhotographySolutions;

