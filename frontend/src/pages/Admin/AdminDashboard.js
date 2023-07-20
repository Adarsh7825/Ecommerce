import React from "react";
import AdminMenu from "../../components/AdminMenu";
import Layout from "./../../components/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
    const [auth] = useAuth();

    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card p-4">
                            <h2 className="mb-4">Admin Dashboard</h2>
                            <div className="d-flex flex-column">
                                <div className="mb-3">
                                    <strong>Admin Name:</strong>{" "}
                                    <span>{auth?.user?.name}</span>
                                </div>
                                <div className="mb-3">
                                    <strong>Admin Email:</strong>{" "}
                                    <span>{auth?.user?.email}</span>
                                </div>
                                <div className="mb-3">
                                    <strong>Admin Contact:</strong>{" "}
                                    <span>{auth?.user?.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
