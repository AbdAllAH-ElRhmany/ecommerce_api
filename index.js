const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config({ path: "./config.env" });

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfull!!"))
  .catch((err) => console.log(err));

// app.get("/api/v1/test", () => {
//   console.log("Test is successfull");
// });

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/orders", orderRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!");
});
