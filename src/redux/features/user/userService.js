import axios from 'axios';

const API_URL = 'http://yourapiurl.com/api/auth/';

const login = async (credentials) => {
  const response = await axios.post(API_URL + 'login', credentials);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response;
};

const authService = {
  login,
  logout,
  register,
};

export default authService;
