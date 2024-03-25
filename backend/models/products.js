import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productType: {
    type: String,
  },
  productCreator: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: String,
  },
  productRating: {
    type: String,
  },
});

export default mongoose.model("products", productSchema);
