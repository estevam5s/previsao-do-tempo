const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const weatherService = require('../services/weatherService');
const cityService = require('../services/cityService');

async function getWeatherByCity(req, res, next) {
  try {
    const { cityName } = req.params;
    const city = await cityService.getCityByName(cityName);
    if (city) {
      return res.status(200).json(city);
    }
    const weatherData = await weatherService.getWeatherByCity(cityName);
    const newCity = await cityService.createCity({
      name: cityName,
      ...weatherData,
    });
    return res.status(200).json(newCity);
  } catch (error) {
    return next(error);
  }
}

async function createCity(cityData) {
  const city = await prisma.city.create({ data: cityData });
  return city;
}

async function getCityByName(cityName) {
  const city = await prisma.city.findUnique({ where: { name: cityName } });
  return city;
}

async function updateCity(id, cityData) {
  const city = await prisma.city.update({ where: { id }, data: cityData });
  return city;
}

async function deleteCity(id) {
  const city = await prisma.city.delete({ where: { id } });
  return city;
}

module.exports = {  };
module.exports = { createCity, getWeatherByCity, getCityByName, updateCity, deleteCity };
