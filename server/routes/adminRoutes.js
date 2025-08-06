import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';
import Applicant from '../models/Applicant.js'; // ✅ Import the model

const router = express.Router();

// Admin login
router.post('/login', loginAdmin);

// Get applicants
router.get("/applicants", async (req, res) => {
  try {
    const applicants = await Applicant.find(); // ✅ Use the correct model
    res.json(applicants);
  } catch (error) {
    console.error("Error fetching applicants:", error);
    res.status(500).json({ message: "Server error fetching applicants" });
  }
});

export default router;
