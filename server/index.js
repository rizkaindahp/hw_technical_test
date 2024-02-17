const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://rizka96:rizka96@cluster0.trvnxb1.mongodb.net/hw_test?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/login", async (req, res) => {
  // Assuming the client sends email and password in the request body
  const { email, password } = req.body;
  console.log(email, password);

  try {
    // Create a new user instance
    const loginUser = new User({
      email: email,
      password: password,
    });

    // Save the user to the database
    await loginUser.save();

    const response = {
      success: true,
      msg: "User login successfully",
    };
    res.json(response);
  } catch (error) {
    console.error("Error registering user:", error);
    const response = {
      success: false,
      msg: "Failed to register user",
    };
    res.status(500).json(response);
  }
});

app.get("/register", async (req, res) => {
  // Assuming the client sends email and password in the request body
  const { name, email, phone, password } = req.body;
  console.log(name, email, phone, password,);

  try {
    // Create a new user instance
    const newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });

    // Save the user to the database
    await newUser.save();

    const response = {
      success: true,
      msg: "User registered successfully",
    };
    res.json(response);
  } catch (error) {
    console.error("Error registering user:", error);
    const response = {
      success: false,
      msg: "Failed to register user",
    };
    res.status(500).json(response);
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
