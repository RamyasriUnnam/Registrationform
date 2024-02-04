const express = require("express");
const app = express();
const dotenv = require("dotenv");

const { connectDB } = require("./db/index.js");
dotenv.config();
connectDB();

const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/userRoutes.js");

app.use(express.static("public"));

app.use("/", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});  