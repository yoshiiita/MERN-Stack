import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';


dotenv.config();
const app = express();
const PORT =process.env.PORT;
app.use(express.json()); // allows to accespt json data in req.body in line 12


app.use("/api/products",productRoutes);


app.listen(PORT, () => {
    connectDB();// connects to db.js
    console.log('Server Started!');
});