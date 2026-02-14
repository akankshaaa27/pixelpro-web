import AppRouter from './routes/AppRouter';
import { AnimatePresence } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-200">
            <AnimatePresence mode="wait">
                <AppRouter />
            </AnimatePresence>

            <AIChatbot />
            <WhatsAppButton />
        </div>
    );
}

export default App;
