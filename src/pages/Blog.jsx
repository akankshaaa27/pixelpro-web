import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Sparkles, Brain, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: 'How AI is Revolutionizing Photography Workflows in 2026',
            excerpt: 'From culling thousands of images to instant retouching, discover how neural engines are saving photographers 40+ hours a week.',
            category: 'AI Vision',
            author: 'Alex River',
            date: 'Oct 12, 2026',
            image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80',
            icon: Brain
        },
        {
            title: 'Microservices vs. Monoliths: Scaling Your SaaS to Millions',
            excerpt: 'Architecture decisions you make today will define your success tomorrow. We break down the best approach for modern enterprise software.',
            category: 'Engineering',
            author: 'Dr. Jane Chen',
            date: 'Oct 10, 2026',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&w=800&q=80',
            icon: Code2
        },
        {
            title: 'Glassmorphism & Beyond: The Future of UI Design',
            excerpt: 'Depth, translucency, and motion. Explore the design trends that are making digital products feel more premium and intuitive.',
            category: 'UI/UX',
            author: 'Marco Vici',
            date: 'Oct 08, 2026',
            image: 'https://images.unsplash.com/photo-1581291518062-c9a79415c674?auto=format&fit=crop&w=800&q=80',
            icon: Sparkles
        },
        {
            title: 'The Real Cost of E-commerce Latency: A Statistical Deep Dive',
            excerpt: 'Every millisecond counts. Learn how we achieved 99% reduction in bounce rates for our global retail partners.',
            category: 'E-commerce',
            author: 'Sarah Jenkins',
            date: 'Oct 05, 2026',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
            icon: Calendar
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Thought <span className="text-gradient">Leadership.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Insights from the industry's best developers and designers on AI, software architecture, and the future of digital experience.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-24">
                    <div className="rounded-[40px] overflow-hidden bg-slate-900 border border-white/10 flex flex-col lg:flex-row relative group">
                        <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                            <img
                                src={posts[0].image}
                                alt="Featured"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                            {(() => {
                                const Icon = posts[0].icon;
                                return (
                                    <div className="flex items-center space-x-3 text-primary-500 font-bold tracking-widest text-xs uppercase mb-6">
                                        <Icon size={16} />
                                        <span>Featured Article</span>
                                    </div>
                                );
                            })()}
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight group-hover:text-primary-400 transition-colors italic">
                                {posts[0].title}
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed italic line-clamp-3">
                                {posts[0].excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800"></div>
                                    <div className="text-white">
                                        <div className="font-bold text-sm italic">{posts[0].author}</div>
                                        <div className="text-[10px] text-slate-500">Industry Leader</div>
                                    </div>
                                </div>
                                <button className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.slice(1).map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="space-y-4 px-4">
                                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-primary-600">{post.category}</span>
                                    <span className="text-slate-400">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-primary-600 transition-colors leading-tight italic">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 italic">
                                    {post.excerpt}
                                </p>
                                <Link to="#" className="inline-flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-sm pt-4 group/btn">
                                    <span>Read Full Insight</span>
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
