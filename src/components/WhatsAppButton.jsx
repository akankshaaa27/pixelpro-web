import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center group"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
            <div className="absolute right-full mr-4 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-sm font-bold shadow-xl opacity-0 scale-90 -translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                Chat with our AI Team
            </div>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12.031 6.172c-2.135 0-4.148 1.054-5.385 2.818-.328.468-.535.992-.61 1.536-.075.544.025 1.096.287 1.583l-1.01 3.682 3.766-.988c.456.248.966.386 1.488.4l1.464.004c2.14 0 4.156-1.056 5.394-2.822.33-.468.536-.993.612-1.538.076-.545-.024-1.1-.286-1.587-1.238-1.764-3.254-2.82-5.392-2.82h-.128zm3.975 6.452c-.172.484-.664.912-1.156 1.12-.492.21-.992.21-1.38.21-.388 0-1.428-.184-2.612-.832-1.184-.648-2.148-1.844-2.736-2.912-.588-1.068-.78-1.808-.78-2.672 0-.864.44-1.28.6-1.44.156-.16.348-.204.464-.204.116 0 .228.004.32.008.096.004.22-.036.34.256.124.292.428 1.04.464 1.116.04.076.064.164.012.268-.052.104-.1.172-.2.288-.1.116-.212.26-.3.344-.1.084-.204.176-.088.372.116.196.516.852 1.112 1.38.764.68 1.408.892 1.612.996.204.104.324.088.444-.048.12-.136.524-.612.664-.824.14-.212.28-.176.472-.104.192.072 1.22.576 1.428.68.208.104.348.156.4.244.052.088.052.512-.12.996z" />
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12s4.477-10 10-10zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
            </svg>
        </motion.button>
    );
};

export default WhatsAppButton;
