import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Video,
    Clock,
    Users,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Monitor,
    Zap,
    Loader2,
    X
} from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const BookDemo = () => {
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: 'Photography OS',
        message: '',
        preferredDate: '',
        preferredTime: 'Morning (9AM - 12PM)'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const submissionData = {
                ...formData,
                submittedAt: new Date().toISOString(),
                type: 'Demo Request'
            };

            // 1. Store locally in JSON format (localStorage)
            const existingLeads = JSON.parse(localStorage.getItem('pixelpro_leads') || '[]');
            localStorage.setItem('pixelpro_leads', JSON.stringify([...existingLeads, submissionData], null, 2));

            // 2. Send via FormSubmit
            const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.company.email}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `DEMO REQUEST: ${formData.interest} from ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const interests = siteConfig.demoInterests.map(item => ({
        ...item,
        icon: item.id === 'AI Automation' ? Zap : item.id === 'Enterprise CRM' ? Users : Monitor
    }));

    const timeSlots = siteConfig.demoTimeSlots;

    return (
        <div className="py-20 lg:py-32 min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Left Side: Content */}
                        <div className="lg:w-2/5 sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                                    <Sparkles size={14} />
                                    <span>Experience the Future</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                    See PixelPro <br />
                                    <span className="text-gradient">In Action.</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                    Book a personalized 1-on-1 demo with our product engineers. No salespeople, just pure technical strategy.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: Video, title: 'Personalized Walkthrough', desc: 'See how our modules fit your workflow.' },
                                        { icon: Clock, title: '30-Minute Discovery', desc: 'Quick, efficient, and packed with value.' },
                                        { icon: Users, title: 'Technical Q&A', desc: 'Deep-dive into our architecture and APIs.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center shrink-0">
                                                <item.icon size={20} className="text-primary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Step Form */}
                        <div className="lg:w-3/5">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full p-12 rounded-[3rem] glass-card text-center flex flex-col items-center justify-center min-h-[500px]"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 border border-emerald-500/20">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-4xl font-black mb-4">Demo Requested!</h3>
                                        <p className="text-xl text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
                                            We've received your request. One of our engineers will reach out to schedule your demo at <strong>{formData.email}</strong>.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button onClick={() => window.location.href = '/'} className="btn-primary px-10 py-4 rounded-2xl font-bold">
                                                Return Home
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-white/5 p-8 md:p-12"
                                    >
                                        {/* Progress Bar */}
                                        <div className="flex items-center space-x-4 mb-12">
                                            {[1, 2].map(i => (
                                                <div key={i} className="flex-1 flex items-center">
                                                    <div className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= i ? 'bg-primary-600' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
                                                </div>
                                            ))}
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            {step === 1 && (
                                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                                    <div className="space-y-2">
                                                        <h3 className="text-2xl font-bold">What are you interested in?</h3>
                                                        <p className="text-slate-500 mb-6">Select the solution you'd like to see.</p>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {interests.map(item => (
                                                                <button
                                                                    key={item.id}
                                                                    type="button"
                                                                    onClick={() => setFormData({ ...formData, interest: item.id })}
                                                                    className={`p-6 rounded-3xl border-2 transition-all text-left flex flex-col space-y-3 ${formData.interest === item.id
                                                                        ? 'border-primary-600 bg-primary-600/5 ring-4 ring-primary-600/10'
                                                                        : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 hover:border-slate-200'
                                                                        }`}
                                                                >
                                                                    <item.icon size={24} className={formData.interest === item.id ? 'text-primary-600' : 'text-slate-400'} />
                                                                    <span className="font-bold text-sm">{item.label}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-bold ml-1">Full Name</label>
                                                            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ganesh Samgir" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-none outline-none focus:ring-2 focus:ring-primary-600" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-bold ml-1">Work Email</label>
                                                            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ganesh@pixelpro.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-none outline-none focus:ring-2 focus:ring-primary-600" />
                                                        </div>
                                                    </div>

                                                    <button type="button" onClick={nextStep} className="btn-primary w-full py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 text-lg group">
                                                        <span>Next Step</span>
                                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </motion.div>
                                            )}

                                            {step === 2 && (
                                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                                    <div className="space-y-4">
                                                        <h3 className="text-2xl font-bold">When is best for you?</h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-bold ml-1">Preferred Date</label>
                                                                <input required type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-none outline-none focus:ring-2 focus:ring-primary-600" />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-bold ml-1">Preferred Time</label>
                                                                <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-none outline-none focus:ring-2 focus:ring-primary-600 appearance-none">
                                                                    {timeSlots.map(t => <option key={t}>{t}</option>)}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold ml-1">Any specific goals for this demo?</label>
                                                        <textarea rows="3" name="message" value={formData.message} onChange={handleChange} placeholder="Help us tailor the experience..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-none outline-none focus:ring-2 focus:ring-primary-600 resize-none" />
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <button type="button" onClick={prevStep} className="px-8 py-5 rounded-[1.5rem] border border-slate-200 dark:border-white/10 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                                            Back
                                                        </button>
                                                        <button disabled={status === 'loading'} className="flex-1 btn-primary py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 text-lg disabled:opacity-50">
                                                            {status === 'loading' ? <Loader2 className="animate-spin" /> : <><span>Request Demo</span><CheckCircle2 size={20} /></>}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDemo;
