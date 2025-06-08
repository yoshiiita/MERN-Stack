import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // empty {} fetches all the data
        res.status(200).json({ success: true, data: products });

    } catch (error) {
        console.error("Error in fetching products", error.message);
        res.status(500).json({ sucess: false, message: "Server error" });

    }
};

export const createProduct = async (req, res) => {
    const product = req.body;//user will send this data


    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ sucess: false, message: "Please enter all details" });

    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ sucess: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create Product:", error.message);
        res.status(500).json({ sucess: false, message: "Server error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: false, message: "Product not found" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        console.log("Updated Product in DB:", updatedProduct); // Add this line
        res.status(200).json({ sucess: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Server Error" });

    }

};

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: false, message: "Product not found" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ sucess: true, message: "Product deleted" });

    } catch (error) {
        console.error("Error in Deleting Product:", error.message);
        res.status(500).json({ sucess: false, message: "Server error" });
    }
};