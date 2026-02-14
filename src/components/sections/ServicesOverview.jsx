import { motion } from 'framer-motion';
import { Layout, Smartphone, ShoppingCart, Globe, Database, Camera, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Web Application Development',
        desc: 'High-performance, scalable web apps built with modern frameworks like React and Next.js.',
        icon: Layout,
        path: '/services/web-development',
        color: 'bg-blue-500'
    },
    {
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile solutions for iOS and Android using React Native and Flutter.',
        icon: Smartphone,
        path: '/services/mobile-development',
        color: 'bg-purple-500'
    },
    {
        title: 'E-commerce Solutions',
        desc: 'Full-featured online stores with secure payments and inventory management, powered by robust MERN/LAMP stacks.',
        icon: ShoppingCart,
        path: '/services/ecommerce',
        color: 'bg-emerald-500'
    },
    {
        title: 'SaaS Product Development',
        desc: 'End-to-end product engineering for startups using scalable NestJS and Next.js architectures.',
        icon: Globe,
        path: '/services/saas',
        color: 'bg-orange-500'
    },
    {
        title: 'Photography CRM Systems',
        desc: 'Specialized management tools for photographers to handle bookings using high-performance MySQL/PostgreSQL backends.',
        icon: Camera,
        path: '/photography-solutions',
        color: 'bg-pink-500'
    },
    {
        title: 'AI & Automation Engine',
        desc: 'Advanced machine learning integration and process automation using Python and custom-trained AI models.',
        icon: Sparkles,
        path: '/services',
        color: 'bg-cyan-500'
    },
    {
        title: 'Custom Business Software',
        desc: 'Tailor-made solutions built with Node.js, Python, or PHP, integrated with MongoDB or SQL databases.',
        icon: Database,
        path: '/services',
        color: 'bg-indigo-500'
    }
];

const ServicesOverview = () => {
    return (
        <section className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl mb-6">Innovative <span className="text-primary-600">Solutions</span> for Every Need</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    We combine technical expertise with industry insights to deliver software that makes a difference.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group"
                    >
                        <div className="h-full p-8 rounded-[2rem] glass-card border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/10 flex flex-col">
                            <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-${service.color.split('-')[1]}-500/20`}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                                {service.desc}
                            </p>

                            <Link to={service.path} className="flex items-center text-primary-600 font-bold group/link">
                                <span>Learn More</span>
                                <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-2" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesOverview;
