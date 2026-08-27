const Salon = require('../models/Salon');

// GET /salons
const getAllSalons = async (req, res) => {
    try {
        const salons = await Salon.getAll();

        res.status(200).json(salons);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get salons'
        });
    }
};


// GET /salons/:id
const getSalonById = async (req, res) => {
    try {
        const salon = await Salon.getById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        res.status(200).json(salon);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get salon'
        });
    }
};


// POST /salons
const createSalon = async (req, res) => {
    try {
        const {
            name,
            city,
            address,
            rating
        } = req.body;

        if (!name || !city || !address) {
            return res.status(400).json({
                message: 'Name, city and address are required'
            });
        }

        if (
            rating !== undefined &&
            (isNaN(rating) || rating < 0 || rating > 5)
        ) {
            return res.status(400).json({
                message: 'Rating must be between 0 and 5'
            });
        }

        const salon = await Salon.create({
            name,
            city,
            address,
            rating: rating || 0
        });

        res.status(201).json({
            message: 'Salon created successfully',
            salon
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to create salon'
        });
    }
};


// PUT /salons/:id
const updateSalon = async (req, res) => {
    try {
        const salonId = req.params.id;

        const existingSalon = await Salon.getById(salonId);

        if (!existingSalon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        const {
            name,
            city,
            address,
            rating
        } = req.body;

        if (
            rating !== undefined &&
            (isNaN(rating) || rating < 0 || rating > 5)
        ) {
            return res.status(400).json({
                message: 'Rating must be between 0 and 5'
            });
        }

        const updatedSalon = await Salon.update(
            salonId,
            {
                name,
                city,
                address,
                rating
            }
        );

        res.status(200).json({
            message: 'Salon updated successfully',
            salon: updatedSalon
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to update salon'
        });
    }
};


// DELETE /salons/:id
const deleteSalon = async (req, res) => {
    try {
        const salonId = req.params.id;

        const existingSalon = await Salon.getById(salonId);

        if (!existingSalon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        await Salon.delete(salonId);

        res.status(200).json({
            message: 'Salon deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to delete salon'
        });
    }
};


// GET /salons/top
const getTopSalons = async (req, res) => {
    try {
        const salons = await Salon.getAll();

        const topSalons = salons
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);

        res.status(200).json(topSalons);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get top salons'
        });
    }
};


// GET /salons/city/:city
const getSalonsByCity = async (req, res) => {
    try {
        const city = req.params.city;

        const salons = await Salon.getAll();

        const filteredSalons = salons.filter(
            salon =>
                salon.city.toLowerCase() === city.toLowerCase()
        );

        res.status(200).json(filteredSalons);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get salons by city'
        });
    }
};


module.exports = {
    getAllSalons,
    getSalonById,
    createSalon,
    updateSalon,
    deleteSalon,
    getTopSalons,
    getSalonsByCity
};