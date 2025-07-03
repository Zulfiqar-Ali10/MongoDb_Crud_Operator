// ✅ Example: deleteOne()
// Ek user delete karna jiska email 'ali@example.com' ho
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const result = await User.deleteOne({ email: "ali@example.com" });
console.log("Deleted:", result);
