import { motion } from 'framer-motion';
import { Smartphone, Tablet, Globe, Zap, ShieldCheck, Heart, Camera, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileDev = () => {
    const apps = [
        {
            title: 'Native iOS & Android',
            desc: 'High-performance Swift and Kotlin development for mission-critical applications.',
            icon: Smartphone,
            color: 'text-blue-500'
        },
        {
            title: 'Cross-Platform Excellence',
            desc: 'Powerful React Native and Flutter solutions that reach both platforms with a single codebase.',
            icon: Globe,
            color: 'text-purple-500'
        },
        {
            title: 'AR & Visual Tools',
            desc: 'Specialized mobile tools for augmented reality and high-end image processing (perfect for photography).',
            icon: Camera,
            color: 'text-pink-500'
        },
        {
            title: 'Offline-First Apps',
            desc: 'Applications that work perfectly without internet connection, syncing data when back online.',
            icon: Zap,
            color: 'text-yellow-500'
        },
        {
            title: 'Biometric Security',
            desc: 'FaceID, TouchID, and pattern security integration for secure enterprise access.',
            icon: ShieldCheck,
            color: 'text-emerald-500'
        },
        {
            title: 'UX-First Design',
            desc: 'Interfaces optimized for one-handed operation and fluid gestures.',
            icon: Layout,
            color: 'text-cyan-500'
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[9/16] w-full max-w-[320px] mx-auto bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                                alt="Mobile App"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-6 right-6 p-6 glass-card rounded-2xl">
                                <div className="h-2 w-16 bg-primary-500 rounded mb-4"></div>
                                <div className="h-4 w-full bg-white/20 rounded mb-2"></div>
                                <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-sm font-bold mb-6">
                            <Smartphone size={14} className="fill-current" />
                            <span>Ultimate Mobile Experiences</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Your Idea, <span className="text-purple-600">Everywhere.</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            We build mobile applications that users love to keep on their home screens. From high-end photography companion apps to complex enterprise tools.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact" className="btn-primary bg-purple-600 hover:bg-purple-700 shadow-purple-500/20">Start App Project</Link>
                            <div className="flex items-center space-x-4 px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold text-slate-500 uppercase tracking-widest">
                                <span>iOS</span>
                                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                <span>Android</span>
                                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                <span>PWA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {apps.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group hover:border-purple-500 transition-colors"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 ${item.color} group-hover:bg-purple-500 group-hover:text-white transition-all`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Showcase */}
                <div className="text-center">
                    <h2 className="text-3xl font-black mb-12">The Stack We Trust</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'].map((tech) => (
                            <div key={tech} className="text-xl font-bold italic tracking-tighter">{tech}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileDev;
