import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';

// Lazy load pages for performance
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Products = lazy(() => import('@/pages/Products'));
const Contact = lazy(() => import('@/pages/Contact'));
const WebDev = lazy(() => import('@/pages/services/WebDev'));
const MobileDev = lazy(() => import('@/pages/services/MobileDev'));
const Ecommerce = lazy(() => import('@/pages/services/Ecommerce'));
const SaaS = lazy(() => import('@/pages/services/SaaS'));
const PhotographySolutions = lazy(() => import('@/pages/PhotographySolutions'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const CaseStudies = lazy(() => import('@/pages/CaseStudies'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const BookDemo = lazy(() => import('@/pages/BookDemo'));
const Careers = lazy(() => import('@/pages/Careers'));
const Blog = lazy(() => import('@/pages/Blog'));
const AdminLogin = lazy(() => import('@/pages/auth/AdminLogin'));
const ClientDashboard = lazy(() => import('@/pages/dashboard/ClientDashboard'));

// Loading component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/web-development" element={<WebDev />} />
                    <Route path="services/mobile-development" element={<MobileDev />} />
                    <Route path="services/ecommerce" element={<Ecommerce />} />
                    <Route path="services/saas" element={<SaaS />} />
                    <Route path="products" element={<Products />} />
                    <Route path="photography-solutions" element={<PhotographySolutions />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="case-studies" element={<CaseStudies />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="book-demo" element={<BookDemo />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="blog" element={<Blog />} />
                </Route>

                {/* Special Layouts */}
                <Route path="admin/login" element={<AdminLogin />} />
                <Route path="dashboard" element={<ClientDashboard />} />

                {/* 404 Route */}
                <Route path="*" element={<div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-6xl font-bold text-primary-600">404</h1>
                    <p className="text-xl mt-4">Page Not Found</p>
                    <a href="/" className="mt-8 btn-primary">Go Home</a>
                </div>} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
