// ✅ Example: insertOne()
// Ek single user create karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const user = await User.create({ name: "Ali", email: "ali@example.com", age: 24 });
console.log("Inserted:", user);
