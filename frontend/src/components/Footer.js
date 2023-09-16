import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const linkVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <motion.div
            className="footer"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-center" whileHover={{ scale: 1.1 }}>
                All Rights Reserved &copy; Adarsh Gupta
            </motion.h1>
            <motion.p className="text-center mt-3">
                <Link to="/about" variants={linkVariants} whileHover="hover">
                    About
                </Link>{" "}
                |{" "}
                <Link to="/contact" variants={linkVariants} whileHover="hover">
                    Contact
                </Link>{" "}
                |{" "}
                <Link to="/policy" variants={linkVariants} whileHover="hover">
                    Privacy Policy
                </Link>
            </motion.p>
        </motion.div>
    );
};

export default Footer;
