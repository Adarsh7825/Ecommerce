import slugify from 'slugify';
import productModel from '../models/productModel.js';
import fs from 'fs';

export const createProductController = async (req, res) => {
    try {
        const { name, description, slug, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name is required' });
            case !description:
                return res.status(500).send({ error: 'Description is required' });
            case !price:
                return res.status(500).send({ error: 'Price is required' });
            case !category:
                return res.status(500).send({ error: 'Category is required' });
            case !quantity:
                return res.status(500).send({ error: 'Quantity is required' });
            case !photo && photo.size > 1000000:
                return res.status(500).send({ error: 'Photo is required and should be less than 1 MB' });
        }

        const products = new productModel({ ...req.fields, slug: slugify(name) });

        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }

        await products.save();

        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating product',
            error,
        });
    }
};

// get product
export const getproductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            totalCount: products.length,
            message: "All Products",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting product',
            error: error.message,
        });
    }
};


// get single product
export const getsingleProuctController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate("category")
        res.status(200).send({
            success: true,
            message: 'Single Product fetched'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in getting single product',
            error: error.message
        })

    }
}


export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo")
        if (product.photo.data) {
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while getting photo ',
            error
        })

    }
}

export const deleteProductController = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success: true,
            message: 'Product Delete Successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while deleting Product',
            error
        })

    }
}

export const updateProductController = async (req, res) => {
    try {
        const { name, description, slug, price, category, quantity, shipping } = req.fields
        const { photo } = req.files
        //Validation 
        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name is required' })
            case !description:
                return res.status(500).send({ error: 'description is required' })
            case !price:
                return res.status(500).send({ error: 'Price is required' })
            case !category:
                return res.status(500).send({ error: 'category is required' })
            case !quantity:
                return res.status(500).send({ error: 'quantity is required' })
            case !photo && photo.size > 1000000:
                return res.status(500).send({ error: 'Photo is required and should be less then 1 mb' })
        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,
            { ...req.fields, slug: slugify(name) }, { new: true });

        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        resolveSoa.status(201).send({
            success: true,
            message: 'Product updated Succesfully',
            products,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: true,
            message: 'Error in updating product',
            error,
        })
    }
}

export const productFiltersController = async (req, res) => {
    try {
        const { checked, radio } = req.body;
        let args = {};
        if (checked.length > 0) args.category = checked;
        if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
        const products = await productModel.find(args);
        res.status(200).send({
            success: true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error WHile Filtering Products",
            error,
        });
    }
};

export const productCountController = async (req, res) => {
    try {
        const total = await productModel.find({}).estimatedDocumentCount();
        res.status(200).send({
            success: true,
            total,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Error in product count",
            error,
            success: false,
        });
    }
};

// product list base on page
export const productListController = async (req, res) => {
    try {
        const perPage = 2;
        const page = req.params.page ? req.params.page : 1;
        const products = await productModel
            .find({})
            .select("-photo")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "error in per page ctrl",
            error,
        });
    }
};