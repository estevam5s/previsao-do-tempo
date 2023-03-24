const { buildSchema } = require('graphql');
const { getWeatherData, setApiKey } = require('./weatherService');
const { sendGraphQLRequest } = require('../utils/graphqlClient');

const schema = buildSchema(`
  type Weather {
    temperature: Float!
    feelsLike: Float!
    humidity: Int!
    pressure: Int!
    description: String!
  }

  type Query {
    weather(city: String!): Weather!
  }

  type Mutation {
    updateApiKey(apiKey: String!): String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

const root = {
  weather: async ({ city }) => {
    const weatherData = await getWeatherData(city);
    return weatherData;
  },
  updateApiKey: ({ apiKey }) => {
    setApiKey(apiKey);
    return apiKey;
  },
};

module.exports = { schema, root };
