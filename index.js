require("dotenv").config();

const connectDB = require("./config/db");
const User = require("./models/User");

const run = async () => {
  await connectDB();

  // -----------------------
  // Valid User
  // -----------------------
  try {
    const user = await User.create({
      name: "Rahul",
      email: "rahul@example.com",
      password: "password123",
      role: "student",
    });

    console.log("Valid User Created:");
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }

  // -----------------------
  // Invalid User
  // -----------------------
  try {
    const invalidUser = await User.create({
      name: "Aman",
      password: "12345678",
      role: "teacher", // Invalid role
    });

    console.log(invalidUser);
  } catch (err) {
    console.log("\nValidation Error:");
    console.log(err.message);
  }

  process.exit();
};

run();