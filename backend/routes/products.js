import express from "express";
import mongoose from "mongoose";
import products from "../models/products.js";

const router = express.Router();

// Get All Products => GET
router.get("/", async (req, res) => {
  try {
    const getAllProducts = await products.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    console.log(
      error.message,
      "Error fetching products, please try again Later!"
    );
    res.send(404).json({ errorInfo: "No products found" });
  }
});

//Get A single Product => GET + ${id}

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getOneProduct = await products.findOne(id);
    res.status(200).json(getOneProduct);
  } catch (error) {
    console.log(error.message);
    res.send(404).json({ errorInfo: `Product with id  ${id} was not found` });
  }
});

//Create a Single Products => POST

router.post("/", async (req, res) => {
  const {
    productName,
    ProductType,
    productCreator,
    productDescription,
    productRating,
    productPrice,
  } = req.body;

  const newlyCreatedProduct = new products({
    productName,
    ProductType,
    productCreator,
    productDescription,
    productRating,
    productPrice,
  });

  try {
    await newlyCreatedProduct.save();
    res.send(201).json(newlyCreatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ ErrInfo: "User Not Created" });
  }
});

//Update a product => PATCH + ${id}

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  const {
    productName,
    ProductType,
    productCreator,
    productDescription,
    productRating,
    productPrice,
  } = req.body;

  // Check ID Validity

  if (mongoose.Types.ObjectId.isValid(id)) {
    return res.send(404).send(`No product found with ID ${id}`);
  }
  const updatedProduct = {
    productName,
    ProductType,
    productCreator,
    productDescription,
    productRating,
    productPrice,
    _id: id,
  };
  await products.findByIdAndUpdate(id, updatedProduct, { new: true });
});

//Delete a product => DELETE + ${id}

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .send(404)
        .send(`No Product was found with id ${id}, please check and confirm`);
    }

    await products.findByIdAndDelete(id);
    res
      .send(200)
      .json({ message: `Product with id ${id} was deleted Successfully` });
  } catch (error) {
    res.send(500).json({ errorInfo: "error.message" });
  }
});


export default router ;
