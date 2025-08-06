import Applicant from "../models/Applicant.js";

export const submitApplicant = async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json({ message: "Application submitted", data: applicant });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).json({ error: "Failed to register applicant" });
  }
};

export const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ date: -1 });
    res.status(200).json(applicants);
  } catch (err) {
    console.error("Error fetching applicants:", err);
    res.status(500).json({ error: "Failed to fetch applicants" });
  }
};


