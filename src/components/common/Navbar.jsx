import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
    { name: 'Home', path: '/' },
    {
        name: 'Services', path: '/services', dropdown: [
            { name: 'AI & Automation', path: '/services' },
            { name: 'Web Engineering', path: '/services/web-development' },
            { name: 'Mobile Systems', path: '/services/mobile-development' },
            { name: 'E-commerce Mastery', path: '/services/ecommerce' },
            { name: 'SaaS Architecture', path: '/services/saas' },
        ]
    },
    { name: 'Solutions', path: '/photography-solutions', label: 'Photography' },
    { name: 'Best Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-primary-500/10">
                        P
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                        Pixel<span className="text-primary-600">Pro</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative group">
                            <Link
                                to={link.path}
                                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                <span>{link.name}</span>
                                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </Link>

                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2">
                                    {link.dropdown.map((sub) => (
                                        <Link
                                            key={sub.path}
                                            to={sub.path}
                                            className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Link to="/book-demo" className="hidden md:block btn-primary py-2 px-5 text-sm">
                        Book a Demo
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-600 dark:text-slate-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-lg font-medium text-slate-900 dark:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 mt-2 space-y-2 border-l border-slate-200 dark:border-slate-800">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.path}
                                                    to={sub.path}
                                                    className="block text-sm text-slate-600 dark:text-slate-400"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link to="/book-demo" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
