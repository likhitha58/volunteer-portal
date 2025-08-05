import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant;
