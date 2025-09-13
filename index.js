const axios = require('axios');

class MortalSoftClient {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  async listGames(queryParams = {}) {
    const url = `${this.baseUrl}/api/${this.token}/listGames`;
    const queryString = Object.keys(queryParams).map((key) => `${key}=${queryParams[key]}`).join('&');
    const fullUrl = queryString ? `${url}?${queryString}` : url;
    
    try {
      const response = await axios.get(fullUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching games:', error.message);
      return null;
    }
  }

  async getBalance(identifier) {
    const url = `${this.baseUrl}/api/${this.token}/getBalance`;
    const data = {
      identifier: identifier
    };

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user balance:', error.message);
      return null;
    }
  }

  async changeBalance(identifier, amount) {
    const url = `${this.baseUrl}/api/${this.token}/changeBalance`;
    const data = {
      identifier: identifier,
      amount: amount
    };

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error changing user balance:', error.message);
      return null;
    }
  }

  async createSession(identifier) {
    const url = `${this.baseUrl}/api/${this.token}/createSession`;
    const data = {
      identifier: identifier
    };

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error creating user session:', error.message);
      return null;
    }
  }

  async closeSession(identifier) {
    const url = `${this.baseUrl}/api/${this.token}/closeSession`;
    const data = {
      identifier: identifier
    };

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error closing user sessions:', error.message);
      return null;
    }
  }
}

module.exports = MortalSoftClient;