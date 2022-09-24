import React from 'react';
import { motion } from "framer-motion";

const SmoothMotion = (props: { children: React.ReactNode }) => {
    const pageVariants = {
        initial: {
            opacity: 0
        },
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };
    console.log(pageVariants)
    const pageTransition = {
        type: 'tween',
        ease: 'linear',
        duration: .5
    };
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            {/* {props.children} */}
        </motion.div>
    )
}

export default SmoothMotion;