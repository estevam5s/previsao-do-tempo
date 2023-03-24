const { request } = require('graphql-request');

const BASE_URL = 'https://graphql-weather-api.herokuapp.com/';

/**
 * Sends a GraphQL request to the API and returns the response data
 *
 * @param {string} query The GraphQL query to send
 * @param {object} [variables] The variables to include in the query
 *
 * @returns {Promise<object>} A promise that resolves with the response data
 */
async function sendGraphQLRequest(query, variables = {}) {
  const response = await request(BASE_URL, query, variables);
  return response;
}

module.exports = { sendGraphQLRequest };
