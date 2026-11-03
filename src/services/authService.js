import api from "./api";

const authService = {
  login: async (email, password) => {
    try {
      // Correct path: /api/auth/login, correct fields: email + password
      const res = await api.post('/auth/login', { email, password });
      return res.data;
    } catch (error) {
      console.log(error);
      // Return a structured error so callers can check response.success
      return { success: false, message: error?.response?.data?.message || 'Login failed' };
    }
  },

  signup: async (email, name, password) => {
    try {
      // Correct path: /api/auth/signup, correct fields: name + email + password
      const res = await api.post('/auth/signup', { name, email, password });
      return res.data;
    } catch (error) {
      console.log(error);
      return { success: false, message: error?.response?.data?.message || 'Signup failed' };
    }
  }
};

export default authService;
