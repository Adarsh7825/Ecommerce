import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth';

const HomePage = () => {
    const [auth] = useAuth()
    return (
        <Layout>
            <div className="styles.container">
                <header className="styles.header">
                    <h1>Welcome to Amazon</h1>
                </header>
                <div className="styles.content">
                    <h2>Discover Amazing Products</h2>
                    <p>Shop for a wide range of products from various categories.</p>

                    <pre>{JSON.stringify(auth, null, 4)}</pre>
                </div>
            </div>
        </Layout>
    )
};
// eslint-disable-next-line
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #f64f59, #c471ed, #12c2e9)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
    },
    formContainer: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '4px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#fff',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    loginButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#f0c14b',
        border: '1px solid #a88734',
        borderRadius: '3px',
        color: '#111',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    registerText: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
        color: '#fff',
    },
    registerLink: {
        color: '#0066c0',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px',
    },
};

export default HomePage
