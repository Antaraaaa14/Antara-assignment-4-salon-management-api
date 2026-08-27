require('dotenv').config();
const express = require('express');
const supabase = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const salonRoutes = require('./routes/salonRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const logger = require('./middleware/logger');

const app = express();
const port = 3000;

app.use(express.json());


app.use(logger);
app.use('/', authRoutes);
app.use('/', salonRoutes);
app.use('/', serviceRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Salon APIs');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});