const PagePlaceholder = ({ title }) => (
    <div className="py-32 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
            This page is currently under construction. We are bringing you something amazing!
        </p>
        <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
    </div>
);

export default PagePlaceholder;

export const Products = () => <PagePlaceholder title="Our Products" />;
export const PhotographySolutions = () => <PagePlaceholder title="Photography Solutions" />;
export const Portfolio = () => <PagePlaceholder title="Portfolio" />;
export const CaseStudies = () => <PagePlaceholder title="Case Studies" />;
export const Testimonials = () => <PagePlaceholder title="Testimonials" />;
export const Pricing = () => <PagePlaceholder title="Pricing Plans" />;
export const BookDemo = () => <PagePlaceholder title="Book a Demo" />;
export const Careers = () => <PagePlaceholder title="Careers" />;
export const Blog = () => <PagePlaceholder title="Blog" />;
export const WebDev = () => <PagePlaceholder title="Web Development" />;
export const MobileDev = () => <PagePlaceholder title="Mobile App Development" />;
export const Ecommerce = () => <PagePlaceholder title="E-commerce Solutions" />;
export const SaaS = () => <PagePlaceholder title="SaaS Solutions" />;
