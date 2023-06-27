import { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner.js";

export default function PrivateRoute({ element: Element, ...rest }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("/api/v1/auth/user-auth");
                if (res.data.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error(error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return isAuthenticated ? (
        <Route {...rest} element={<Element />} />
    ) : (
        <Navigate to="/login" replace={true} />
    );
}
