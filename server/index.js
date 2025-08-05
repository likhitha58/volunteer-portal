import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Applicant from "./models/Applicant.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// Routes
app.post("/api/applicants", async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (err) {
    res.status(500).json({ error: "Failed to register" });
  }
});

app.get("/api/applicants", async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ date: -1 });
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch applicants" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
