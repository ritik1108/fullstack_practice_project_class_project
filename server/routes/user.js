const router = require('express').Router();
const User = require('../models/User');

// READ USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE USER
router.put('/:id', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        
    } catch (error) {}
});