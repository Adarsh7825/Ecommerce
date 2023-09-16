import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getsingleProuctController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductConroller, searchProductController, updateProductController } from '../controllers/productController.js'
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

router.delete('/delete-product/:pid', deleteProductController);

router.post('/product-filters', productFiltersController)

router.get("/product-count", productCountController);


router.get('/product-list/:page', productListController);

router.get('/search/:keyword', searchProductController);

router.get('/related-product/:pid/:c:id', relatedProductConroller);

router.get('/braintree/token', braintreeTokenController);

router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;