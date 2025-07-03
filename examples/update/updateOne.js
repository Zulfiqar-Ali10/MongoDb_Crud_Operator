// ✅ Example: updateOne()
// Ek user ka naam update karna
import mongoose from "mongoose";
import "dotenv/config";
import User from "../../models/User.js";

await mongoose.connect(process.env.MONGODBURI);
const result = await User.updateOne({ name: "Ali" }, { $set: { name: "Ali Raza" } });
console.log("Update Result:", result);
