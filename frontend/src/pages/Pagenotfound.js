import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Pagenotfound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const errorPageStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
    };

    const titleStyles = {
        fontSize: '64px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const headingStyles = {
        fontSize: '24px',
        marginBottom: '30px',
    };

    const buttonStyles = {
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#fbbd02',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <Layout title={'Go Back - Page Not Found'}>
            <div className='container' style={errorPageStyles}>
                <h1 className='title' style={titleStyles}>
                    404
                </h1>
                <h2 className='heading' style={headingStyles}>
                    Oops! Page Not Found
                </h2>
                <button className='btn' style={buttonStyles} onClick={handleGoBack}>
                    GO Back
                </button>
            </div>
        </Layout>
    );
};

export default Pagenotfound;
