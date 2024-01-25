const logger = require('../utils/logger');
const axios = require('axios');
const weatherModel = require('../models/weatherModel');
require('dotenv').config();

exports.getWeatherForecast = async (cityName) => {
    const apiKey = process.env.HGBRASIL_API_KEY;
    const url = `https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${cityName}`;
    console.log(url); // Para ver a URL final

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        logger.error(`Error fetching weather data: ${error.message}`);
        throw new Error('Error fetching weather data');
    }
};
