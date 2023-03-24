const { graphql } = require('graphql');
const { schema } = require('../src/services/graphqlService');
const { getWeatherData } = require('../src/services/weatherService');

describe('GraphQL Service', () => {
  describe('Weather Query', () => {
    it('should return the weather data for a given city', async () => {
      // Arrange
      const city = 'New York';
      const weatherData = await getWeatherData(city);

      // Act
      const query = `
        query {
          weather(city: "${city}") {
            temperature
            feelsLike
            humidity
            pressure
            description
          }
        }
      `;
      const result = await graphql(schema, query);

      // Assert
      expect(result.errors).toBeUndefined();
      expect(result.data.weather).toEqual(weatherData);
    });

    it('should return an error if the city is not provided', async () => {
      // Arrange
      const query = `
        query {
          weather {
            temperature
            feelsLike
            humidity
            pressure
            description
          }
        }
      `;

      // Act
      const result = await graphql(schema, query);

      // Assert
      expect(result.errors).toBeDefined();
    });
  });

  describe('UpdateApiKey Mutation', () => {
    it('should update the API key', async () => {
      // Arrange
      const newApiKey = 'new-api-key';
      const query = `
        mutation {
          updateApiKey(apiKey: "${newApiKey}")
        }
      `;

      // Act
      const result = await graphql(schema, query);

      // Assert
      expect(result.errors).toBeUndefined();
      expect(result.data.updateApiKey).toEqual(newApiKey);
    });
  });
});
