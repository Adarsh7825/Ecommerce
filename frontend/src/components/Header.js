import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { useAuth } from '../context/auth';

const Header = () => {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        });
        localStorage.removeItem('auth');
    };

    const logoAnimationProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' }
    });

    const navAnimationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500
    });

    const searchAnimationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000
    });

    const getGreeting = () => {
        if (auth.user && auth.user.name) {
            return `Hello, ${auth.user.name}`;
        } else {
            return 'Hello, User';
        }
    };

    return (
        <header style={styles.header}>
            <animated.div style={{ ...styles.logoContainer, ...logoAnimationProps }} className="animated-logo">
                <Link to="/" className="navbar-brand">
                    🛒 SalesHive
                </Link>
            </animated.div>
            <animated.div style={{ ...styles.searchContainer, ...searchAnimationProps }}>
                <input type="text" placeholder="Search" style={styles.searchInput} />
                <button style={styles.searchButton}>Search</button>
            </animated.div>
            <animated.div style={{ ...styles.navContainer, ...navAnimationProps }} className="animated-nav">
                <NavLink to="/" style={styles.navOption} activeClassName="active" exact>
                    <span className="greeting">{getGreeting()}</span>
                </NavLink>
                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : "user"}`} style={styles.navOption} activeClassName="active" exact>
                    Dashboard
                </NavLink>
                {!auth.user ? (
                    <>
                        <NavLink to="/login" style={styles.navOption} activeClassName="active">
                            Sign in
                        </NavLink>
                        <NavLink to="/register" style={styles.navOption} activeClassName="active">
                            Sign up
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink onClick={handleLogout} to="/login" style={styles.navOption} activeClassName="active">
                            Sign out
                        </NavLink>
                    </>
                )}
                <NavLink to="/orders" style={styles.navOption} activeClassName="active">
                    Your Orders
                </NavLink>
                <NavLink to="/cart" style={styles.navOption} activeClassName="active">
                    Cart
                </NavLink>
            </animated.div>
        </header >
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#232f3e',
        color: '#ffffff'
    },
    logoContainer: {
        marginRight: '10px'
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px'
    },
    searchInput: {
        padding: '5px',
        marginRight: '5px',
        borderRadius: '3px',
        border: 'none'
    },
    searchButton: {
        padding: '5px 10px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#febd69',
        color: '#232f3e',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    navOption: {
        margin: '0 10px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
        color: '#ffffff' // Change this to the desired color
    }
};

export default Header;
