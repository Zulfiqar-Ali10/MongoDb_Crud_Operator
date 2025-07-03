// ✅ Example: find()
// Sab users ko read karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const users = await User.find();
console.log("Users:", users);
