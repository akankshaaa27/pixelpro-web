import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Award } from 'lucide-react';

const ClientReach = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Global Scale. <span className="text-primary-500">Local Impact.</span></h2>
                    <p className="text-xl text-slate-400">
                        Our software solutions power businesses across 40+ countries, delivering seamless experiences to millions of end-users.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                    {[
                        { icon: Globe, val: '40+', label: 'Countries Reached' },
                        { icon: Users, val: '2M+', label: 'Happy Users' },
                        { icon: TrendingUp, val: '150%', label: 'Avg ROI Growth' },
                        { icon: Award, val: '25+', label: 'Industry Awards' },
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-500">
                                <item.icon size={32} className="text-primary-500 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-4xl md:text-5xl font-black mb-2">{item.val}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">{item.label}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-8 italic">"PixelPro transformed our chaotic manual photography bookings into a sleek, AI-driven machine. We doubled our revenue in six months."</h3>
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src="https://i.pravatar.cc/100?img=44"
                            alt="Client"
                            className="w-12 h-12 rounded-full border-2 border-primary-500"
                        />
                        <div className="text-left">
                            <div className="font-bold">Sarah Jenkins</div>
                            <div className="text-xs text-slate-500">Founding Director, CapturePro Studios</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReach;
