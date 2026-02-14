import { motion } from 'framer-motion';
import { Award, Users, Rocket, Coffee } from 'lucide-react';

const About = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-5xl font-bold mb-6">Redefining Digital <span className="text-primary-600">Possibilities</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        PixelPro is a multidisciplinary software agency dedicated to building high-end digital products that drive impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Founded in 2020, PixelPro began with a simple goal: to bridge the gap between complex engineering and human-centric design. We believe that software should not only be functional but also beautiful and intuitive.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Today, we partner with startups and established enterprises worldwide to create software that scales, engages users, and achieves business objectives.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl hidden sm:block">
                            <div className="text-4xl font-bold text-primary-600 mb-1">10+</div>
                            <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Years of Experience</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Users, label: 'Expert Engineers', count: '50+' },
                        { icon: Award, label: 'Awards Won', count: '12' },
                        { icon: Rocket, label: 'Products Launched', count: '200+' },
                        { icon: Coffee, label: 'Cups of Coffee', count: '5k+' },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-primary-600/10 text-primary-600 flex items-center justify-center mb-6">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-4xl font-bold mb-2">{stat.count}</div>
                            <div className="text-slate-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
