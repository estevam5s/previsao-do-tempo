const ApiClient = require('../utils/apiClient');

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const apiClient = new ApiClient(BASE_URL);

const getWeatherData = async (city) => {
  try {
    const endpoint = '/weather';
    const params = {
      q: city,
      appid: API_KEY,
      units: 'metric',
    };

    const data = await apiClient.get(endpoint, params);
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getWeatherData,
};
