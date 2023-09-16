import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name="description" content='{description}' />
                <meta name="keywords" content='{keywords}' />
                <meta name="author" content='{author}' />
                <title>{title}</title>
            </Helmet>
            <Header></Header>
            <main style={{ minHeight: '80vh' }}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "Salehive - Shop Now",
    description: "Discover the best deals on our ecommerce platform. Shop now for a wide range of products including electronics, fashion, home decor, beauty, and more. Enjoy secure and convenient online shopping with fast shipping and excellent customer service.",
    keywords: "ecommerce, online shopping, deals, products, electronics, fashion, home decor, beauty, fast shipping, secure shopping, excellent customer service",
    author: "Adarsh Gupta",
};



export default Layout
