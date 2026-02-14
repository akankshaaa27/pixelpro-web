import { motion } from 'framer-motion';
import { LayoutDashboard, Users, MessageSquare, Settings, LogOut, Package, CreditCard } from 'lucide-react';

const ClientDashboard = () => {
    const stats = [
        { label: 'Active Projects', value: '3', icon: Package, color: 'text-blue-500' },
        { label: 'Unread Messages', value: '12', icon: MessageSquare, color: 'text-purple-500' },
        { label: 'Pending Invoices', value: '$1,200', icon: CreditCard, color: 'text-emerald-500' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-dark-bg">
            {/* Sidebar Placeholder */}
            <div className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col p-6">
                <div className="flex items-center space-x-2 mb-12">
                    <div className="w-8 h-8 rounded bg-primary-600"></div>
                    <span className="font-display font-bold text-xl">PixelPro</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { label: 'Dashboard', icon: LayoutDashboard, active: true },
                        { label: 'My Projects', icon: Package },
                        { label: 'Messages', icon: MessageSquare },
                        { label: 'Team', icon: Users },
                        { label: 'Billing', icon: CreditCard },
                        { label: 'Settings', icon: Settings },
                    ].map((item, i) => (
                        <button key={i} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${item.active
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}>
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors mt-auto">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-8 md:p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Welcome Back, Alex</h1>
                        <p className="text-slate-500">Here's what's happening with your projects today.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="btn-primary py-2 text-sm italic">New Request</button>
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold mb-6">Recent Activity</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center space-x-4 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                                    <div>
                                        <p className="text-sm font-bold">New update on Web App Project</p>
                                        <p className="text-xs text-slate-500">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold mb-6">Upcoming Milestones</h3>
                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                                    <span className="text-sm font-bold">Beta Prototype Launch</span>
                                    <span className="text-xs font-semibold px-2 py-1 bg-primary-600/10 text-primary-600 rounded">Oct 24</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
