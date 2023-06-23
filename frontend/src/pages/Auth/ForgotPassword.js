import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [answer, setAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);

                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <h2 style={styles.heading}>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p style={styles.question}>What is your favorite movie?</p>
                        <input
                            type="text"
                            placeholder="Answer"
                            style={styles.input}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            style={styles.input}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        {error && <p style={styles.error}>{error}</p>}
                        <button type="submit" style={styles.submitButton}>
                            Recover Password
                        </button>
                    </form>
                    <p style={styles.loginText}>
                        Remember your password?{' '}
                        <Link to="/login" style={styles.loginLink}>
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#FFEDB3',
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
    },
    question: {
        fontSize: '16px',
        marginBottom: '15px',
        fontWeight: 'bold',
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
    submitButton: {
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
    loginText: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
    },
    loginLink: {
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

export default ForgotPassword;
