import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/v1/auth/login', {
                email,
                password,
            });

            const toastPromise = toast.promise(
                res.data.success ? Promise.resolve('Login successful!') : Promise.reject(res.data.message),
                {
                    loading: 'Logging in...',
                    success: 'Login successful!',
                    error: 'Login failed!',
                    duration: 2000,
                }
            );

            await toastPromise;

            if (res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                setTimeout(() => {
                    navigate(location.state || '/');
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setLoginError('An error occurred during login.');
        }
    };

    return (
        <Layout>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <h2 style={styles.heading}>Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {loginError && <p style={styles.error}>{loginError}</p>}
                        <button type="submit" style={styles.loginButton}>
                            Log In
                        </button>
                    </form>
                    <p style={styles.registerText}>
                        <Link to="/forgot-password" style={styles.forgotPasswordLink}>
                            Forgot Password?
                        </Link>
                    </p>
                    <p style={styles.registerText}>
                        Don't have an account?{' '}
                        <Link to="/register" style={styles.registerLink}>
                            Create an account
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

export default Login;