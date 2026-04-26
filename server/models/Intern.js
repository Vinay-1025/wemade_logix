const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    collegeName: { type: String, required: true },
    department: { type: String, required: true },
    yearOfStudy: { type: String, required: true },
    address: { type: String, required: true },
    laptopMandatory: { type: Boolean, default: false },
    paymentProcess: { type: String, default: 'Pending' },
    github: { type: String },
    linkedin: { type: String },
    motivation: { type: String },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Intern', internSchema);
