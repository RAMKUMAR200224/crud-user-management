import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/useroutes.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.port || 3000;
const mongo_url = process.env.mongo_url;

mongoose.connect(mongo_url).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.log(error));

app.use("/api/user", route);