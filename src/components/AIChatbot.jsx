import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, Loader2 } from 'lucide-react';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm PixelCore AI. How can I help you transform your business today?", sender: 'ai' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulated AI Logic
        setTimeout(() => {
            let aiResponse = "";
            const input = inputValue.toLowerCase();

            if (input.includes('price') || input.includes('cost')) {
                aiResponse = "Our pricing for the Photography OS starts at a base setup fee + monthly SaaS subscription. We have special rates for solo photographers and large studios. Would you like a detailed quote?";
            } else if (input.includes('link') || input.includes('website') || input.includes('demo')) {
                aiResponse = "You can view our live photography demo here: https://potography-webapp-website.vercel.app/. It showcases the client-side experience with AI galleries.";
            } else if (input.includes('admin') || input.includes('login') || input.includes('dashboard')) {
                aiResponse = "The studio management portal is where the magic happens! You can access the Admin Login here: https://potography-webapp.vercel.app/login. It handles your bookings, AI culling, and client CRM.";
            } else if (input.includes('photography') || input.includes('camera') || input.includes('shutter')) {
                aiResponse = "Our Photography OS is used by 5,000+ pros. It features: 1. AI Smart Culling (90% faster), 2. Facial Recognition Galleries, 3. Automated Stripe/PayPal Payments, and 4. Real-time Cloud Sync. Want to see how it works?";
            } else if (input.includes('service') || input.includes('what do you do')) {
                aiResponse = "We build high-end software. Currently, our #1 product is the Photography WebApp. We also do custom AI engineering (Python/PyTorch) and Enterprise Web Apps (Next.js). Which should we discuss?";
            } else if (input.includes('contact') || input.includes('call')) {
                aiResponse = "I can help you here, or you can click the WhatsApp button for a direct chat with our founders. We're currently available for new projects!";
            } else {
                aiResponse = "That's a great question about our software ecosystem. For specific technical details or to see a demo of the Admin Portal (https://potography-webapp.vercel.app/login), I recommend booking a quick call!";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-8 right-28 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-slate-900 border border-white/10' : 'bg-primary-600'
                    }`}
            >
                {isOpen ? <X className="text-white" /> : <Bot className="text-white animate-pulse" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500"></span>
                    </span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-28 right-8 z-50 w-[380px] h-[550px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-3xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 bg-primary-600 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <div className="font-bold">PixelCore AI</div>
                                    <div className="flex items-center text-[10px] opacity-80 uppercase tracking-widest font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                                        Always Online
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'ai' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'ai'
                                        ? 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-tl-sm'
                                        : 'bg-primary-600 text-white rounded-tr-sm shadow-lg shadow-primary-600/20'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-sm text-slate-400">
                                        <Loader2 size={18} className="animate-spin" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900">
                            <div className="flex items-center space-x-3 bg-white dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/10">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-slate-700 dark:text-slate-200"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <div className="mt-3 text-center">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center">
                                    <Sparkles size={10} className="mr-1 text-primary-500" />
                                    Powered by PixelCore Intelligence
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
