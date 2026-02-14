import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/ServicesOverview';
import AISolutions from '@/components/sections/AISolutions';
import WebDevShowcase from '@/components/sections/WebDevShowcase';
import TechStack from '@/components/sections/TechStack';
import ClientReach from '@/components/sections/ClientReach';
import AIGenerationForm from '@/components/sections/AIGenerationForm';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-32 mb-32">
            <Hero />

            {/* Logos Section */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Trusted by Global Innovators</p>
                </div>
                <div className="inline-flex flex-nowrap whitespace-nowrap animate-infinite-scroll">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="mx-12 text-3xl font-bold text-slate-300 dark:text-slate-700 hover:text-primary-600 transition-colors cursor-default flex items-center space-x-2">
                            <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800"></div>
                            <span>CORP_{i}</span>
                        </div>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i + 10} className="mx-12 text-3xl font-bold text-slate-300 dark:text-slate-700 hover:text-primary-600 transition-colors cursor-default flex items-center space-x-2">
                            <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800"></div>
                            <span>CORP_{i}</span>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            <AISolutions />

            <WebDevShowcase />

            <TechStack />

            <AIGenerationForm />

            {/* Why Choose Us */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            {[
                                { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                                { icon: ShieldCheck, label: 'Secure Solutions', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                                { icon: Heart, label: 'Client Centric', color: 'text-red-500', bg: 'bg-red-500/10' },
                                { icon: CheckCircle2, label: 'Expert Team', color: 'text-green-500', bg: 'bg-green-500/10' },
                            ].map((item, idx) => (
                                <div key={idx} className={`p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2`}>
                                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 shadow-sm`}>
                                        <item.icon size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">High performance development tailored to your needs.</p>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-600/5 blur-[100px] -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="flex items-center space-x-2 text-primary-600 mb-6 font-bold tracking-widest text-sm uppercase">
                            <Sparkles size={16} />
                            <span>Premium Excellence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl mb-8 font-black leading-tight">Why Businesses <span className="text-primary-600">Choose PixelPro</span></h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We don't just write code; we build digital ecosystems that solve real-world business problems. Our multidisciplinary team combines engineering excellence with award-winning design.
                        </p>
                        <ul className="space-y-5 mb-10">
                            {[
                                'Enterprise-grade security standards',
                                'AI-ready architecture for future growth',
                                'Dedicated support and maintenance',
                                'SEO-optimized by design',
                                'Cloud-native implementation'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600">
                                        <CheckCircle2 size={14} />
                                    </span>
                                    <span className="font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn-outline group">
                            <span>More About Us</span>
                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <ClientReach />
        </div>
    );
};

export default Home;
