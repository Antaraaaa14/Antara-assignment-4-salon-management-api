const Service = require('../models/Service');
const Salon = require('../models/Salon');

// GET /salons/:id/services
const getSalonServices = async (req, res) => {
    try {
        const salon = await Salon.getById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        const services = await Service.getBySalonId(req.params.id);

        res.status(200).json(services);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get services'
        });
    }
};


// POST /salons/:id/services
const createService = async (req, res) => {
    try {
        const salonId = req.params.id;

        const salon = await Salon.getById(salonId);

        if (!salon) {
            return res.status(404).json({
                message: 'Salon not found'
            });
        }

        const {
            serviceName,
            price,
            duration,
            isAvailable
        } = req.body;

        if (!serviceName || price === undefined || !duration) {
            return res.status(400).json({
                message: 'Service name, price and duration are required'
            });
        }

        if (isNaN(price) || Number(price) < 0) {
            return res.status(400).json({
                message: 'Price must be a valid positive number'
            });
        }

        const service = await Service.create({
            salon_id: salonId,
            service_name: serviceName,
            price: Number(price),
            duration,
            is_available: isAvailable !== undefined
                ? isAvailable
                : true
        });

        res.status(201).json({
            message: 'Service created successfully',
            service
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to create service'
        });
    }
};


// PUT /services/:id
const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;

        const existingService = await Service.getById(serviceId);

        if (!existingService) {
            return res.status(404).json({
                message: 'Service not found'
            });
        }

        const {
            serviceName,
            price,
            duration,
            isAvailable
        } = req.body;

        if (price !== undefined && (isNaN(price) || Number(price) < 0)) {
            return res.status(400).json({
                message: 'Price must be a valid positive number'
            });
        }

        const updatedService = await Service.update(
            serviceId,
            {
                service_name: serviceName,
                price: price !== undefined ? Number(price) : undefined,
                duration,
                is_available: isAvailable
            }
        );

        res.status(200).json({
            message: 'Service updated successfully',
            service: updatedService
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to update service'
        });
    }
};


// DELETE /services/:id
const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;

        const existingService = await Service.getById(serviceId);

        if (!existingService) {
            return res.status(404).json({
                message: 'Service not found'
            });
        }

        await Service.delete(serviceId);

        res.status(200).json({
            message: 'Service deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to delete service'
        });
    }
};


// GET /services/available
const getAvailableServices = async (req, res) => {
    try {
        const services = await Service.getAvailable();

        res.status(200).json(services);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get available services'
        });
    }
};


module.exports = {
    getSalonServices,
    createService,
    updateService,
    deleteService,
    getAvailableServices
};