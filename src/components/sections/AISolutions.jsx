import { motion } from 'framer-motion';
import { Brain, Sparkles, Cpu, BarChart, Shield, Zap } from 'lucide-react';

const AISolutions = () => {
    const features = [
        {
            title: 'Neural Process Automation',
            desc: 'Streamline complex business workflows with self-learning AI agents that adapt to your operations.',
            icon: Brain,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Predictive Analytics',
            desc: 'Turn data into foresight. Our models predict market trends and client behavior with 95% accuracy.',
            icon: BarChart,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            title: 'Computer Vision',
            desc: 'Enterprise-grade image recognition and processing for photography, security, and retail.',
            icon: Cpu,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10'
        },
        {
            title: 'Generative AI Integration',
            desc: 'Custom LLM implementations for intelligent chatbots, content creation, and automated reporting.',
            icon: Sparkles,
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 blur-[120px] rounded-full -z-10"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                            <Zap size={14} className="fill-current" />
                            <span>AI-First Architecture</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Intelligence That <br />
                            <span className="text-gradient">Transforms Business.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            We don't just add AI as a feature; we build it into the DNA of your software. From automated decision-making to generative experience, we push the boundaries of what's possible.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-6 rounded-3xl glass-card border-none shadow-xl shadow-slate-200/50 dark:shadow-none"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl skew-x-1 border-8 border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                                alt="AI concept"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>

                            {/* Floating UI Element */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-10 right-10 p-6 glass-card rounded-3xl"
                            >
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Neural Sync</span>
                                </div>
                                <div className="text-xl font-black italic">99.8%</div>
                                <div className="text-[10px] text-slate-400">Processing Success</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISolutions;
