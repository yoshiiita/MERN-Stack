import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt and updatedAt
});
const Product = mongoose.model('Product', productSchema); 
// This tells to mongoose create collection product which has schema from productSchema
// mongoose later makes it products automatically
export default Product;