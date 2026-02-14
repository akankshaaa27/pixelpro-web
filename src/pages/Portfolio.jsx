import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layout, Database, Sparkles, Brain, Figma } from 'lucide-react';

const Portfolio = () => {
    const categories = ['All', 'AI Development', 'Software Systems', 'UI/UX Design'];

    const projects = [
        {
            title: 'Neural Vision Core',
            category: 'AI Development',
            desc: 'Self-learning image processing engine developed for enterprise photography studios.',
            tech: ['Python', 'TensorFlow', 'React'],
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
            role: 'Best AI Developer Team'
        },
        {
            title: 'OmniChain SaaS',
            category: 'Software Systems',
            desc: 'Global supply chain management system with 99.99% uptime and microservices architecture.',
            tech: ['Node.js', 'Kubernetes', 'AWS'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            role: 'Expert Software Engineers'
        },
        {
            title: 'StudioFlow UI',
            category: 'UI/UX Design',
            desc: 'Award-winning interface for a complex photography CRM system with glassmorphism design.',
            tech: ['Figma', 'Tailwind', 'React'],
            image: 'https://images.unsplash.com/photo-1581291518062-c9a79415c674?auto=format&fit=crop&w=800&q=80',
            role: 'Premium UI/UX Developers'
        },
        {
            title: 'AutoCull AI',
            category: 'AI Development',
            desc: 'AI-driven photo selection tool that identifies quality, expressions, and technical specs.',
            tech: ['PyTorch', 'C++', 'Next.js'],
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
            role: 'Best AI Implementation'
        },
        {
            title: 'E-Market Engine 2.0',
            category: 'Software Systems',
            desc: 'High-frequency e-commerce engine capable of handling 50k transactions per second.',
            tech: ['Go', 'Redis', 'PostgreSQL'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
            role: 'Scalable System Architecture'
        },
        {
            title: 'Lumina Dashboard',
            category: 'UI/UX Design',
            desc: 'Data visualization platform for real-time monitoring of global business operations.',
            tech: ['D3.js', 'TypeScript', 'Framer'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            role: 'Premium Interface Craft'
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Our <span className="text-gradient">Masterpieces.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        A curated selection of hardware and software engineered for the elite.
                        Witness the work of the industry's best AI, Software, and UI developers.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className="px-8 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-transparent hover:border-primary-600 hover:text-primary-600 transition-all font-bold text-sm"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <div className="flex space-x-4">
                                        <button className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary-600">{project.category}</span>
                                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg text-[10px] font-black">{project.role}</span>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-primary-600 transition-colors">{project.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md text-slate-500">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
