const supabase = require('../config/db');

const Service = {

    async getBySalonId(salonId) {
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .eq('salon_id', salonId);

        if (error) {
            throw error;
        }

        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .eq('id', id)
            .single();

        if (error && error.code !== 'PGRST116') {
            throw error;
        }

        return data;
    },

    async create(serviceData) {
        const { data, error } = await supabase
            .from('services')
            .insert([serviceData])
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    },

    async update(id, serviceData) {
        const { data, error } = await supabase
            .from('services')
            .update(serviceData)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    },

    async delete(id) {
        const { data, error } = await supabase
            .from('services')
            .delete()
            .eq('id', id)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    },

    async getAvailable() {
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .eq('is_available', true);

        if (error) {
            throw error;
        }

        return data;
    }
};

module.exports = Service;