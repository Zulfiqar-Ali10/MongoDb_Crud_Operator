import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import 'dotenv/config';
import userRoutes from './routes/user.routes.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/users", userRoutes);


mongoose.connect(process.env.MONGODBURI)
  .then(() => console.log(" MongoDB Connected Sucessfully"))
  .catch((err) => console.log(" Connection Error =>", err));

  app.get("/", (req, res) => {
    res.send("Server Is Running On Brower You Check It")
  } )


app.listen(PORT, () => console.log(" Server running on http://localhost:" + PORT));
