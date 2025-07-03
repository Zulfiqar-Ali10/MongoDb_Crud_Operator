// ✅ Example: deleteMany()
// Sab users jinki age 25 hai unko delete karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const result = await User.deleteMany({ age: 25 });
console.log("DeleteMany:", result);
