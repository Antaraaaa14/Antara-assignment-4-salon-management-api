const express = require('express');

const {
    getAllSalons,
    getSalonById,
    createSalon,
    updateSalon,
    deleteSalon,
    getTopSalons,
    getSalonsByCity
} = require('../controllers/salonController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/salons', getAllSalons);
router.get('/salons/top', getTopSalons);
router.get('/salons/city/:city', getSalonsByCity);
router.get('/salons/:id', getSalonById);

// Protected routes
router.post('/salons', authMiddleware, createSalon);
router.put('/salons/:id', authMiddleware, updateSalon);
router.delete('/salons/:id', authMiddleware, deleteSalon);

module.exports = router;