const API_BASE_URL = 'http://localhost:8000/api';

export const authAPI = {
  async login(email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify({
        user_type: data.user_type,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        // ... other user properties
      }));
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async signup(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email,
          password: userData.password,
          is_customer: true
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
      return data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
}; 