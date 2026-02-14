import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-600/10 blur-[120px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="glass-card bg-slate-950/50 p-10 rounded-[2.5rem] border-white/10 shadow-3xl text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold mb-8">
                        P
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
                    <p className="text-slate-500 mb-10">Sign in to manage the PixelPro portal</p>

                    <div className="space-y-6 text-left">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="email"
                                    placeholder="admin@pixelpro.com"
                                    className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all shadow-inner"
                                />
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-xs text-primary-500 hover:underline">Forgot password?</a>
                            </div>
                        </div>

                        <button className="btn-primary w-full py-4 rounded-xl flex items-center justify-center space-x-2 group">
                            <span>Sign In to Dashboard</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-xs text-slate-500 mb-6">Or continue with</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all">
                                <Chrome size={18} />
                                <span>Google</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all">
                                <Github size={18} />
                                <span>GitHub</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">← Back to Website</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
