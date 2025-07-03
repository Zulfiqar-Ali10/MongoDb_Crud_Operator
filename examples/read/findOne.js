// ✅ Example: findOne()
// Ek user dhoondhna jiska naam 'Ali' ho
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const user = await User.findOne({ name: "Ali" });
console.log("User:", user);
