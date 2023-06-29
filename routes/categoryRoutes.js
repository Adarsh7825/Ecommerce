import express from 'express';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from './../controllers/categoryController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route for creating a category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

//getall category 
router.get('/get-category', categoryController);

//single category
router.get('/single-category/:slug', singleCategoryController);

//Delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router;
