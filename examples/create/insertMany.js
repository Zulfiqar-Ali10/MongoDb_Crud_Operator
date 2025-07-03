// ✅ Example: insertMany()
// Multiple users insert karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const users = await User.insertMany([
  { name: "Sara", email: "sara@example.com", age: 22 },
  { name: "Bilal", email: "bilal@example.com", age: 30 }
]);
console.log("Inserted:", users);
