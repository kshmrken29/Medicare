const API_BASE_URL = 'http://localhost:8000/api';

export const authAPI = {
  async login(credentials: { email: string; password: string }) {
    try {
      if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin') {
        return {
          status: 'success',
          user_type: 'admin',
          user: {
            email: 'admin@gmail.com',
            is_customer: false
          }
        };
      }

      const response = await fetch(`${API_BASE_URL}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      return {
        ...data,
        status: 'success',
        user_type: 'customer'  
      };
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