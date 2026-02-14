import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Brain, Cpu, MessageSquare, ArrowRight } from 'lucide-react';

const AIGenerationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        goal: '',
        industry: '',
        scale: '',
        message: ''
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/10 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="flex items-center space-x-2 text-primary-500 font-bold tracking-widest text-sm uppercase mb-6">
                            <Brain size={18} />
                            <span>AI Project Intake</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Generate Your <br />
                            <span className="text-gradient">Project Roadmap</span> <br />
                            with AI.
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                            Describe your vision, and our neural engine will analyze your requirements to suggest the best architecture, timeline, and tech stack.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Sparkles, text: 'Instant architectural analysis' },
                                { icon: Cpu, text: 'Neural cost-estimation' },
                                { icon: MessageSquare, text: 'Smart resource allocation' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4 text-white/70">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-semibold">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card bg-white/5 border-white/10 p-8 md:p-12 rounded-[3rem] shadow-3xl">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white">What is your primary goal?</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {['New Product', 'AI Integration', 'Automation', 'Scaling Up'].map((opt) => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => { setFormData({ ...formData, goal: opt }); nextStep(); }}
                                                        className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all text-sm font-bold text-left"
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white">Your Industry?</h3>
                                            <select
                                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-primary-600"
                                                value={formData.industry}
                                                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                            >
                                                <option value="">Select industry...</option>
                                                <option value="photography">Photography & Media</option>
                                                <option value="ecommerce">E-commerce</option>
                                                <option value="saas">SaaS / Enterprise</option>
                                                <option value="healthcare">Healthcare Tech</option>
                                            </select>
                                            <button
                                                onClick={nextStep}
                                                disabled={!formData.industry}
                                                className="btn-primary w-full py-4 rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                                            >
                                                <span>Continue</span>
                                                <ArrowRight size={18} />
                                            </button>
                                            <button onClick={prevStep} className="text-xs text-slate-500 hover:text-white block mx-auto py-2">Go Back</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white">Final Details</h3>
                                            <textarea
                                                placeholder="Describe your vision in a few words..."
                                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-primary-600 h-32 resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                            <button
                                                className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center space-x-3 text-lg group"
                                            >
                                                <span>Generate Roadmap</span>
                                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>
                                            <button onClick={prevStep} className="text-xs text-slate-500 hover:text-white block mx-auto py-2">Go Back</button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIGenerationForm;
