import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Layout from "../Layout";

const Spinner = ({ path = "login" }) => {
    const [timer, setTimer] = useState(3);
    const [redirecting, setRedirecting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            setRedirecting(true);
            if (user) {
                navigate("/dashboard", { replace: true });
            } else {
                navigate(`/${path}`, { state: { from: location.pathname }, replace: true });
            }
        }
    }, [timer, navigate, path, user, location.pathname]);

    if (redirecting) {
        return null;
    }

    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: '#ff9900',
                            animation: 'bounce 1s infinite ease-in-out',
                            animationDelay: '0.1s',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: '#ff9900',
                            animation: 'bounce 1s infinite ease-in-out',
                            animationDelay: '0.3s',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: '#ff9900',
                            animation: 'bounce 1s infinite ease-in-out',
                            animationDelay: '0.6s',
                        }}
                    ></div>
                </div>
            </div>

            <style>
                {`
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}
            </style>
        </Layout>
    );
};

export default Spinner;
