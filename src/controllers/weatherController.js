const weatherService = require('../services/weatherService');

const getWeather = async (req, res, next) => {
  try {
    const city = req.query.city;
    if (!city) {
      const error = new Error('City parameter is required.');
      error.statusCode = 400;
      throw error;
    }

    const data = await weatherService.getWeatherData(city);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWeather,
};
