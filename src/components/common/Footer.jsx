import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                P
                            </div>
                            <span className="text-xl font-display font-bold text-slate-900 dark:text-white">
                                Pixel<span className="text-primary-600">Pro</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Empowering businesses and creative professionals with cutting-edge software solutions. From e-commerce to specialized photography tools.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Mobile Apps', 'E-commerce', 'SaaS Solutions', 'Photography CRM'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Case Studies', 'Testimonials', 'Careers', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <MapPin size={18} className="text-primary-600 shrink-0" />
                                <span>123 Tech Avenue, Innovation City, CA 94043</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone size={18} className="text-primary-600 shrink-0" />
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Mail size={18} className="text-primary-600 shrink-0" />
                                <span>contact@pixelpro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-slate-200 dark:border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-md">
                        <h5 className="font-bold text-slate-900 dark:text-white">Subscribe to our newsletter</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Stay updated with the latest in tech and photography solutions.</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-600 flex-grow md:w-64"
                        />
                        <button className="bg-primary-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-primary-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-xs text-slate-500">
                        &copy; {currentYear} PixelPro Software Solutions. All rights reserved.
                        <Link to="/privacy" className="ml-4 hover:text-primary-600">Privacy Policy</Link>
                        <Link to="/terms" className="ml-4 hover:text-primary-600">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
