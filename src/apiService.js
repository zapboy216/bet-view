import axios from 'axios';

const API_KEY = '8d944c5086fa3049f5ce6efa8639199c';  // Replace with your API key
const BASE_URL = 'https://api.the-odds-api.com';

const fetchSports = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v4/sports/`, {
      params: { apiKey: API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sports data:', error);
    return [];
  }
};

export default {
  fetchSports,
};
