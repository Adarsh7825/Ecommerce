import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    const buttonStyles = {
        display: "block",
        width: "80%",
        padding: "12px 20px",
        fontSize: "16px",
        backgroundColor: "#fbbd02",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px",
        marginBottom: "10px",
        textAlign: "center",
    };

    return (
        <>
            <div className="text-center">
                <div className="list-group">
                    <h4>Admin Panel</h4>
                    <NavLink
                        to="/dashboard/admin/create-category"
                        className="list-group-item list-group-item-action"
                        style={buttonStyles}
                    >
                        Create Category
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/create-product"
                        className="list-group-item list-group-item-action"
                        style={buttonStyles}
                    >
                        Create Product
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/products"
                        className="list-group-item list-group-item-action"
                        style={buttonStyles}
                    >
                        Update Product
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/orders"
                        className="list-group-item list-group-item-action"
                        style={buttonStyles}
                    >
                        Orders
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/users"
                        className="list-group-item list-group-item-action"
                        style={buttonStyles}
                    >
                        Users
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;
