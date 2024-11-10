import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedListProps {
    children: ReactNode[];
}

const AnimatedList = ({ children }: AnimatedListProps) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.645, 0.045, 0.355, 1.000]
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            {children.map((child, index) => (
                <motion.div key={index} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AnimatedList; 