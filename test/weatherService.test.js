const weatherService = require('../src/services/weatherService');

describe('Weather Service', () => {
  test('Should return weather data for a valid city', async () => {
    const city = 'New York';
    const data = await weatherService.getWeatherData(city);

    expect(data).toBeDefined();
    expect(data.name).toEqual(city);
    expect(data.main).toHaveProperty('temp');
  });

  test('Should throw an error for an invalid city', async () => {
    const city = 'InvalidCityName';
    try {
      await weatherService.getWeatherData(city);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.response.status).toEqual(404);
    }
  });
});
