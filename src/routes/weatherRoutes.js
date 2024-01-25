const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

// Rota básica para testar se o servidor está funcionando
router.get('/', (req, res) => {
    res.send('Weather API is working!');
});

// Rota para obter a previsão do tempo para uma cidade específica
// Acessível em GET /api/weather/:city
router.get('/:city', weatherController.getWeatherForecast);

module.exports = router;
