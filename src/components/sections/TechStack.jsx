import { motion } from 'framer-motion';
import {
    Cpu,
    Code2,
    Database,
    Globe2,
    Smartphone,
    Server,
    Layers,
    Zap,
    Wind,
    Terminal
} from 'lucide-react';

const TechStack = () => {
    const stack = [
        {
            category: "Frontend & Web",
            icon: Globe2,
            techs: [
                { name: "React.js", level: "Expert" },
                { name: "Next.js", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" }
            ]
        },
        {
            category: "AI & Computer Vision",
            icon: Cpu,
            techs: [
                { name: "PyTorch", level: "Neural" },
                { name: "OpenCV", level: "Imaging" },
                { name: "TensorFlow", level: "Models" }
            ]
        },
        {
            category: "Backend Systems",
            icon: Server,
            techs: [
                { name: "Node.js", level: "Expert" },
                { name: "NestJS", level: "Scalable" },
                { name: "Python", level: "AI/ML" },
                { name: "PHP", level: "Modern" }
            ]
        },
        {
            category: "Database & Data",
            icon: Database,
            techs: [
                { name: "PostgreSQL", level: "Relational" },
                { name: "MySQL", level: "Reliable" },
                { name: "MongoDB", level: "NoSQL" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Terminal size={12} />
                        <span>Our Technology Arsenal</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Powering Innovation with <br />
                        <span className="text-primary-600">State-of-the-Art Stack.</span>
                    </h2>

                    <p className="text-slate-500 max-w-2xl text-lg">
                        We leverage the world's most powerful technologies to build high-performance, scalable, and secure digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-500/50 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <group.icon size={28} className="text-primary-600" />
                            </div>

                            <h3 className="text-xl font-bold mb-6">{group.category}</h3>

                            <div className="space-y-4">
                                {group.techs.map((tech, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                            <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{tech.name}</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{tech.level}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Badges Horizontal Scroll (Marquee style or just a grid) */}
                <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-wrap justify-center gap-4 opacity-50 contrast-0 hover:contrast-100 hover:opacity-100 transition-all duration-700">
                        {["Node.js", "React Native", "Python", "PHP", "MySQL", "MongoDB", "PostgreSQL", "Next.js", "NestJS"].map((item, i) => (
                            <div key={i} className="px-6 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-sm font-black uppercase tracking-widest whitespace-nowrap">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
