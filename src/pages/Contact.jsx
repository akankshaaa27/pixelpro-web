import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Let's Build Something <span className="text-gradient">Amazing</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Have a project in mind? We'd love to hear from you. Get in touch with our expert team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 lg:col-span-1">
                        <div className="p-8 rounded-3xl glass-card border-none bg-primary-600 text-white shadow-xl shadow-primary-600/20">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-primary-100 mb-8 leading-relaxed">Fill out the form and our team will get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Phone size={18} />
                                    </div>
                                    <span>+91 8767826955</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Mail size={18} />
                                    </div>
                                    <span>pixelproitsolutions@gmail.com</span>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <span>Pune, Maharashtra, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl glass-card">
                            <h4 className="font-bold mb-4 flex items-center space-x-2">
                                <Clock size={16} className="text-primary-600" />
                                <span>Office Hours</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Sat - Sun: Closed</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 md:p-12 rounded-[2.5rem] glass-card shadow-2xl"
                        >
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 8767826955"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Interest</label>
                                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none appearance-none">
                                            <option>Web Development</option>
                                            <option>Mobile App</option>
                                            <option>AI & Machine Learning</option>
                                            <option>Photography Solutions</option>
                                            <option>SaaS Development</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Your Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center space-x-3 text-lg">
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
