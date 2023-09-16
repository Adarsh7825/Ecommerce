import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Policy = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <Layout title={'Privacy Policy'}>
            <motion.div
                className="policy-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="policy-section">
                    <h1 className="policy-main-heading">Privacy Policy</h1>
                    <p className="policy-text">
                        At <span className="policy-highlight">Saleshive</span>, we value the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or services.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Information Collection</h2>
                    <ul className="policy-list">
                        <li className="policy-list-item">
                            We may collect personal information, such as your name, email address, and contact details, when you interact with our website, create an account, make a purchase, or communicate with us.
                        </li>
                        <li className="policy-list-item">
                            We use this information to provide and improve our services, personalize your experience, and send you relevant updates and offers.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Information Sharing</h2>
                    <ul className="policy-list">
                        <li className="policy-list-item">
                            We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services to you.
                        </li>
                        <li className="policy-list-item">
                            However, we do not sell, trade, or otherwise transfer your personal information to external parties without your consent, except as required by law.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Security Measures</h2>
                    <ul className="policy-list">
                        <li className="policy-list-item">
                            We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </li>
                        <li className="policy-list-item">
                            Please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Cookie Policy</h2>
                    <ul className="policy-list">
                        <li className="policy-list-item">
                            We use cookies to enhance your browsing experience and gather information about how you interact with our website.
                        </li>
                        <li className="policy-list-item">
                            You can manage your cookie preferences through your browser settings.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Changes to this Policy</h2>
                    <ul className="policy-list">
                        <li className="policy-list-item">
                            We reserve the right to update or modify this Privacy Policy at any time.
                        </li>
                        <li className="policy-list-item">
                            Any changes will be effective upon posting the revised policy on this page.
                        </li>
                        <li className="policy-list-item">
                            We encourage you to review this policy periodically.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-sub-heading">Contact Us</h2>
                    <p className="policy-text">
                        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us using the information provided on our website.
                    </p>
                </div>
            </motion.div>
        </Layout>
    );
};

export default Policy;
