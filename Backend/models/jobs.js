const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;
