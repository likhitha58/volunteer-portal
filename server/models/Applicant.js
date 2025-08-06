import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,

  address: {
    street: String,
    streetLine2: String,
    city: String,
    state: String,
    postalCode: String
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  volunteeringPreferences: {
    // 0: "Would love to!", 1: "Would like to.", 2: "Wouldn’t mind helping.", 3: "Not this area."
    type: Map,
    of: Number // Ex: { "T-Shirts": 0, "Ticket Sales": 1, ... }
  },

  shiftPreferences: {
    bestTime: [String],       // Example: ["8am–1pm", "6pm–11pm"]
    notAvailable: [String]    // Example: ["1pm–6pm"]
  },

  comments: String,

  date: {
    type: Date,
    default: Date.now
  }
});

const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant;
