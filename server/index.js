import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import applicantRoutes from "./routes/applicantRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Volunteer Portal API is running");
});

app.use("/api/applicants", applicantRoutes);
app.use("/api/admin", adminRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
