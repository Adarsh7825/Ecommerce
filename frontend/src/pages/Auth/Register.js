import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post('/api/v1/auth/register', {
                name,
                email,
                password,
                phone,
                address,
                answer,
            });

            const toastPromise = toast.promise(
                res.data.success ? Promise.resolve('You have successfully registered!') : Promise.reject(res.data.message),
                {
                    loading: 'Registering...',
                    success: 'Registration successful!',
                    error: 'Registration failed!',
                    duration: 3000, // Set duration to 3 seconds (3000 milliseconds)
                }
            );

            await toastPromise;

            if (res.data.success) {
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Delay the navigation by 1 second (1000 milliseconds)
            }
        } catch (error) {
            toast.error('Something went wrong');
            console.log(error);
        }
    };

    return (
        <Layout>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <h2 style={styles.heading}>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="What is your favorite movie ?"
                            style={styles.input}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={styles.input}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {passwordError && <p style={styles.error}>{passwordError}</p>}
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            style={styles.input}
                            value={phone}
                            onChange={(e) => {
                                const enteredValue = e.target.value.replace(/\D/g, '');
                                if (enteredValue.length <= 10) {
                                    setPhone(enteredValue);
                                }
                            }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            style={styles.input}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <button type="submit" style={styles.registerButton}>
                            Create your Amazon account
                        </button>
                    </form>
                    <p style={styles.loginText}>
                        Already have an account?{' '}
                        <Link to="/login" style={styles.loginLink}>
                            Sign in
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
    registerButton: {
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

export default Register;
