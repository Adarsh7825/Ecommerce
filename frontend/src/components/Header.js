import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { useAuth } from '../context/auth.js';
import SearchInput from './Form/SearchInput.js';
import { useCart } from '../context/cart.js';
import { Badge } from 'antd'

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();

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

    const getGreeting = () => {
        if (auth.user && auth.user.name) {
            return `Hello, ${auth.user.name}`;
        } else {
            return 'Hello, User';
        }
    };

    const isAdmin = auth?.user?.role === 1; // Check if the user is an admin

    return (
        <header style={styles.header}>
            <animated.div style={{ ...styles.logoContainer, ...logoAnimationProps }} className="animated-logo">
                <Link to="/" className="navbar-brand">
                    🛒 SalesHive
                </Link>
            </animated.div>
            <SearchInput />
            <animated.div style={{ ...styles.navContainer, ...navAnimationProps }} className="animated-nav">
                <NavLink to="/" style={styles.navOption} activeClassName="active" exact>
                    <span className="greeting">{getGreeting()}</span>
                </NavLink>
                {isAdmin && ( // Show admin dashboard link if the user is an admin
                    <NavLink to="/dashboard/admin" style={styles.navOption} activeClassName="active" exact>
                        Admin Dashboard
                    </NavLink>
                )}
                {!isAdmin && ( // Show user dashboard link if the user is not an admin
                    <NavLink to="/dashboard/user" style={styles.navOption} activeClassName="active" exact>
                        User Dashboard
                    </NavLink>
                )}
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
                <NavLink to="/dashboard/user/orders" style={styles.navOption} activeClassName="active">
                    Your Orders
                </NavLink>
                <NavLink to="/cart" style={styles.navOption} activeClassName="active">
                    Cart <Badge count={cart?.length} showZero>
                    </Badge>
                </NavLink>
            </animated.div>
        </header>
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
