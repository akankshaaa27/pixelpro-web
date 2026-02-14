import ServicesOverview from '@/components/sections/ServicesOverview';
import TechStack from '@/components/sections/TechStack';

const Services = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Full <span className="text-gradient">Service Suite</span></h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    From initial consultation to deployment and maintenance, we offer a comprehensive range of software development services.
                </p>
            </div>
            <ServicesOverview />
            <TechStack />

            {/* Process Section */}
            <section className="mt-32 container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Our Development Process</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'Consultation', desc: 'Understanding your goals and requirements.' },
                        { step: '02', title: 'Strategy', desc: 'Designing the architecture and user experience.' },
                        { step: '03', title: 'Development', desc: 'Building with high-quality, clean code.' },
                        { step: '04', title: 'Launch', desc: 'Deploying and scaling your solution.' },
                    ].map((item, i) => (
                        <div key={i} className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl">
                            <div className="text-6xl font-black text-slate-100 dark:text-slate-800 mb-4 group-hover:text-primary-600/20 transition-colors">{item.step}</div>
                            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
