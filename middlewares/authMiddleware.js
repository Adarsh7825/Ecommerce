import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


// Checking by token base

export const requireSignIn = (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode; // Assign decoded user information to the request object
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized Access',
        });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user || user.role !== 1) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized Access',
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
