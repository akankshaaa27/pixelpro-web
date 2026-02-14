import { motion } from 'framer-motion';
import { Layers, Rocket, ShieldCheck, Zap, BarChart, Users, Cloud, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaaS = () => {
    const modules = [
        {
            title: 'Multi-Tenant Architecture',
            desc: 'Secure, high-performance database sharding and tenant isolation for enterprise-scale software.',
            icon: Layers,
            color: 'text-blue-500'
        },
        {
            title: 'Subscription Engine',
            desc: 'Seamless integration with Stripe, Chargebee, or custom recurring billing solutions with tiered access.',
            icon: Zap,
            color: 'text-yellow-500'
        },
        {
            title: 'Admin Mastery',
            desc: 'Comprehensive control panels for system administrators to manage users, roles, and global settings.',
            icon: ShieldCheck,
            color: 'text-emerald-500'
        },
        {
            title: 'Analytics Edge',
            desc: 'Built-in dashboards with real-time tracking of MRR, Churn, and User Engagement metrics.',
            icon: BarChart,
            color: 'text-purple-500'
        },
        {
            title: 'User Management',
            desc: 'Robust RBAC (Role-Based Access Control) with SSO, MFA, and automated onboarding flows.',
            icon: Users,
            color: 'text-orange-500'
        },
        {
            title: 'Auto-Scaling Infrastructure',
            desc: 'Cloud-native deployment on AWS or Google Cloud with Kubernetes for infinite scalability.',
            icon: Cloud,
            color: 'text-cyan-500'
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-bold mb-6">
                        Product-as-a-Service
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Scalable <span className="text-gradient">SaaS Powerhouse</span> Solutions.
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        We don't just build apps; we architect products. From MVP to enterprise scale, we provide the full-stack infrastructure for your SaaS vision.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                    {modules.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900 transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary-600/10"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Architecture Showcase */}
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative mb-32">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.1),transparent)]"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Built for <span className="text-primary-500">Unstoppable</span> Growth
                            </h2>
                            <p className="text-lg text-slate-400 mb-10">
                                Our SaaS framework eliminates technical debt from day one. We use a modular microservices approach that allows you to scale individual components as your user base explodes.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: 'Zero-Downtime Deployments', icon: Server },
                                    { label: 'Global Edge Caching', icon: Zap },
                                    { label: 'Automated Security Patching', icon: ShieldCheck },
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary-600/20 text-primary-500 flex items-center justify-center">
                                            <step.icon size={20} />
                                        </div>
                                        <span className="text-white font-bold">{step.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-video glass-card border-white/10 rounded-3xl p-2 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                    <pre className="text-primary-400 text-xs font-mono p-6">
                                        {`{
  "project": "PixelPro SaaS",
  "status": "ready_to_scale",
  "nodes": 12,
  "loadBalancer": "online",
  "autoScale": true,
  "uptime": "99.999%",
  "latency": "14ms"
}`}
                                    </pre>
                                </div>
                                <motion.div
                                    className="absolute inset-0 bg-primary-600/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/30 blur-[60px] rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-black mb-10">Ready to Launch Your Product?</h3>
                    <Link to="/contact" className="btn-primary px-12 py-5 rounded-2xl text-xl inline-flex items-center group">
                        <span>Get Strategy Call</span>
                        <Rocket size={24} className="ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SaaS;
