import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Web Development',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using FormSubmit.co - Very reliable and matches photography-webapp style
            const response = await fetch("https://formsubmit.co/ajax/pixelproitsolutions@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Inquiry: ${formData.interest} from ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', interest: 'Web Development', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                                    <a
                                        href="https://wa.me/918767826955"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            if (!window.confirm("Would you like to chat with us on WhatsApp?")) {
                                                e.preventDefault();
                                            }
                                        }}
                                        className="hover:text-primary-100 transition-colors"
                                    >
                                        +91 8767826955
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Mail size={18} />
                                    </div>
                                    <a
                                        href="mailto:pixelproitsolutions@gmail.com"
                                        className="hover:text-primary-100 transition-colors"
                                    >
                                        pixelproitsolutions@gmail.com
                                    </a>
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
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center p-12 rounded-[2.5rem] glass-card text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8">
                                    Thank you for reaching out. We've received your inquiry and will get back to you at {formData.email || 'your email'} shortly.
                                </p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="btn-primary px-8 py-3 rounded-xl"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-8 md:p-12 rounded-[2.5rem] glass-card shadow-2xl"
                            >
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
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
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 8767826955"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Interest</label>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none appearance-none"
                                            >
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
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-600 transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm font-bold text-center">
                                            Something went wrong. Please try again or email us directly.
                                        </p>
                                    )}

                                    <button
                                        disabled={status === 'loading'}
                                        className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center space-x-3 text-lg disabled:opacity-50"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 size={24} className="animate-spin" />
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
