import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.3,
                ease: [0.645, 0.045, 0.355, 1.000]
            }}
        >
            <motion.div
                initial={{ y: 16 }}
                animate={{ y: 0 }}
                exit={{ y: 16 }}
                transition={{
                    duration: 0.4,
                    ease: [0.645, 0.045, 0.355, 1.000]
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default PageTransition; 