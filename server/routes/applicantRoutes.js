import express from "express";
import { submitApplicant, getAllApplicants } from "../controllers/applicantController.js";

const router = express.Router();

router.post("/", submitApplicant);
router.get("/", getAllApplicants);

export default router;
 