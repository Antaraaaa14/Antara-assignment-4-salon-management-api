const express = require('express');

const {
    getSalonServices,
    createService,
    updateService,
    deleteService,
    getAvailableServices
} = require('../controllers/serviceController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/services/available', getAvailableServices);
router.get('/salons/:id/services', getSalonServices);

// Protected routes
router.post('/salons/:id/services', authMiddleware, createService);
router.put('/services/:id', authMiddleware, updateService);
router.delete('/services/:id', authMiddleware, deleteService);

module.exports = router;