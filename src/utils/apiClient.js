const axios = require('axios');

class ApiClient {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }

  async get(endpoint, params) {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ApiClient;
