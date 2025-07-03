// ✅ Example: updateMany()
// Sab users jinki age < 25 hai, unko 25 set karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const result = await User.updateMany({ age: { $lt: 25 } }, { $set: { age: 25 } });
console.log("UpdateMany Result:", result);
