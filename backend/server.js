import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { connectToDB } from './database.js';
import products from "./models/products.js";

const app = express();
connectToDB();
app.use(bodyParser.json({ extended: true, limit: '20mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}));
app.use(cors());
app.use('/products', products)

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
