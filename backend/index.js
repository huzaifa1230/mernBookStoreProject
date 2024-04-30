import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;
try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connection sucessful");
} catch (error) {
  console.log("error" + error);
}
// routes define below
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
