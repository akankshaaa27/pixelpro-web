import { motion } from 'framer-motion';
import {
    Code2,
    Layers,
    Monitor,
    Cpu,
    Search,
    Shield,
    Zap,
    Globe,
    ExternalLink,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDev = () => {
    const features = [
        {
            title: 'Full-Stack Excellence',
            desc: 'End-to-end development using React, Next.js, Node.js, and robust database architectures.',
            icon: Layers,
            color: 'text-primary-600',
            bg: 'bg-primary-500/10'
        },
        {
            title: 'Performance Optimized',
            desc: 'Blazing fast load speeds with perfect Core Web Vitals, ensuring superior SEO and user retention.',
            icon: Zap,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10'
        },
        {
            title: 'Scalable Infrastructure',
            desc: 'Cloud-native solutions designed to handle millions of users with automated scaling and load balancing.',
            icon: Globe,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Enterprise Security',
            desc: 'Military-grade encryption and security protocols to keep your data and users safe.',
            icon: Shield,
            color: 'text-red-500',
            bg: 'bg-red-500/10'
        },
        {
            title: 'AI Integration',
            desc: 'Smart features powered by machine learning to automate tasks and personalize experiences.',
            icon: Cpu,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            title: 'SEO & Reach',
            desc: 'Advanced search engine optimization built into the code, not just added as an afterthought.',
            icon: Search,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10'
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                            <Code2 size={14} className="fill-current" />
                            <span>High-Performance Web Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Crafting <span className="text-primary-600">Digital</span> <br />
                            Architectures for Growth.
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                            We build high-performance, accessible, and scalable web applications that solve real-world business problems through innovative engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="btn-primary px-10">Start Your Project</Link>
                            <Link to="/portfolio" className="btn-outline px-10 group">
                                <span>Learn our Methodology</span>
                                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                                alt="Web Development"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 blur-[60px] rounded-full -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full -z-10"></div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass-card border-none shadow-xl hover:-translate-y-2 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Strategy */}
                <div className="rounded-[4rem] bg-slate-900 text-white p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Our Development Philosophy</h2>
                            <p className="text-lg text-slate-400 mb-12">
                                We don't just write code; we engineer value. Our process ensures that every line of code contributes to your business goals.
                            </p>

                            <div className="space-y-6">
                                {[
                                    'Static Site Generation for SEO excellence',
                                    'Micro-frontend architecture for large scale apps',
                                    'Atomic design principle for consistent UI',
                                    'Continuous Integration & Deployment (CI/CD)',
                                    'Rigorous automated testing for 0-bug launches'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="font-bold text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 border border-white/10">
                            <div className="flex flex-col space-y-6">
                                <div className="text-center pb-6 border-b border-white/10">
                                    <div className="text-5xl font-black text-primary-500 mb-2">99.9%</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Uptime Reliability</div>
                                </div>
                                <div className="text-center pb-6 border-b border-white/10">
                                    <div className="text-5xl font-black text-primary-500 mb-2">100/100</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Google Lighthouse Score</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-black text-primary-500 mb-2">2x</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Development Speed with PixelCore</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDev;
