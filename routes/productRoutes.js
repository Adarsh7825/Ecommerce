import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getsingleProuctController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'
import { getproductController } from '../controllers/productController.js'
const router = express.Router()

//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

//get product 
router.get('/get-product', getproductController);

//get single product
router.get('/get-product/:slug', getsingleProuctController);

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/product/:pid', deleteProductController)

//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);


export default router;