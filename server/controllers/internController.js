const Intern = require('../models/Intern');

const registerIntern = async (req, res, io) => {
    try {
        const newIntern = new Intern(req.body);
        const savedIntern = await newIntern.save();
        
        // Emit live update
        io.emit('newRegistration', savedIntern);
        
        res.status(201).json({
            message: 'Registration successful',
            data: savedIntern
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering intern', error: error.message });
    }
};

const getAllInterns = async (req, res) => {
    try {
        const interns = await Intern.find().sort({ createdAt: -1 });
        res.status(200).json(interns);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching interns', error: error.message });
    }
};

module.exports = {
    registerIntern,
    getAllInterns
};
