import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
const app = express();

dotenv.config();
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;
try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connection sucessful");
} catch (error) {
  console.log("error" + error);
}

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
