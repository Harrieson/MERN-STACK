import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mernstack:mernstack@cluster0.ahnyyml.mongodb.net/"
    );
    console.log("Mongo db has connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

