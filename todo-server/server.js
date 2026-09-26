import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from 'dns';

dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();
const app = express();


await connectDB();
app.get("/", (req, res) => {
  res.send({ message: "Todo API is running" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
