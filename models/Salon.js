const supabase = require('../config/db');

const Salon = {

    async getAll() {
        const { data, error } = await supabase
            .from('salons')
            .select('*');

        if (error) {
            throw error;
        }

        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
            .from('salons')
            .select('*')
            .eq('id', id)
            .single();

        if (error && error.code !== 'PGRST116') {
            throw error;
        }

        return data;
    },

    async create(salonData) {
        const { data, error } = await supabase
            .from('salons')
            .insert([salonData])
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    },

    async update(id, salonData) {
        const { data, error } = await supabase
            .from('salons')
            .update(salonData)
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
            .from('salons')
            .delete()
            .eq('id', id)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    }
};

module.exports = Salon;