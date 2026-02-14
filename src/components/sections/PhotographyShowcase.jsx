import { motion } from 'framer-motion';
import { Camera, Sparkles, Image as ImageIcon, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotographyShowcase = () => {
    const features = [
        {
            title: "AI Smart Culling",
            desc: "Our AI analyzes thousands of shots in seconds, selecting the sharpest expressions and best compositions automatically.",
            icon: Sparkles,
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            title: "Facial Recognition Proofing",
            desc: "Clients can find their photos instantly in massive event galleries using only a selfie. Zero manual tagging required.",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "One-Click Retouching",
            desc: "Apply professional-grade skin smoothing, eye enhancement, and color grading across entire sessions in one tap.",
            icon: ImageIcon,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            title: "Automated Booking",
            desc: "Seamless contract signing, deposit payments, and calendar syncing that works while you're out shooting.",
            icon: Clock,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        }
    ];

    return (
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-600/10 blur-[150px] rounded-full"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-bold mb-8">
                            <Camera size={16} />
                            <span>Revolutionizing Photography Workflows</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Photography Tech.</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
                            PixelPro is the ultimate software ecosystem built by photographers, for photographers. We bridge the gap between creative vision and technical execution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/photography-solutions" className="btn-primary inline-flex items-center group">
                            <span>Explore Photography Suite</span>
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Photographer"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                            {/* Overlay Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-10 left-10 p-6 glass-card border-white/20 bg-white/5 backdrop-blur-xl rounded-2xl max-w-[280px]"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Security Status</div>
                                        <div className="text-sm font-bold">Encrypted Proofing</div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-300">Your clients' memories are protected with industrial-grade AES-256 encryption.</p>
                            </motion.div>

                            {/* Overlay Card 2 - Mock AI Interface */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="absolute top-10 right-10 p-4 glass-card border-primary-500/30 bg-primary-600/10 backdrop-blur-md rounded-2xl"
                            >
                                <div className="flex flex-col space-y-2">
                                    <div className="text-[10px] font-bold text-primary-400 uppercase">AI Subject Detection</div>
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-1 bg-white/20 rounded-full">
                                                <motion.div
                                                    className="h-full bg-primary-400"
                                                    animate={{ width: ["0%", "100%"] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[12px] font-mono text-white/80">Face_ID: #8829-PX</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating blur patterns */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 blur-[60px] rounded-full -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary-500/20 blur-[80px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographyShowcase;
