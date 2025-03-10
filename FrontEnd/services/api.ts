import { Product } from '@/types/product';
import axios from 'axios';
import { Customer } from '@/types/customer';
import { 
  FiShoppingBag, 
  FiPackage,
  FiTrendingUp,
  FiPlusCircle,
  FiGrid,
  FiSend,
  FiStar,
  FiUsers 
} from 'react-icons/fi';

const API_BASE_URL = 'http://localhost:8000/api';

export const productAPI = {
  async getAllProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/`);
      const data = await response.json();
      return data.map((product: Product) => ({
        ...product,
        price: typeof product.price === 'string' ? parseFloat(product.price) : product.price
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async getProduct(id: number) {
    const response = await fetch(`${API_BASE_URL}/products/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },

  async createProduct(formData: FormData) {
    try {
      if (!formData.has('prescription_required')) {
        formData.append('prescription_required', 'false');
      }
      
      const response = await axios.post(`${API_BASE_URL}/products/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Error Details:', error);
      throw error;
    }
  },

  async updateProduct(id: number, formData: FormData) {
    try {
      const response = await axios.patch(`${API_BASE_URL}/products/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  async deleteProduct(id: number) {
    const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return true;
  },
};

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
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
      
      const data = await response.json();
      localStorage.setItem('userInfo', JSON.stringify(data));
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async signup(userData: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
};

export const categoryAPI = {
  async getAllCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/category/`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to fetch categories');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  async createCategory(categoryData: { name: string; description: string }) {
    try {
      const response = await axios.post(`${API_BASE_URL}/category/`, categoryData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error creating category:', error.response?.data || error);
      throw new Error(error.response?.data?.detail || 'Failed to create category');
    }
  },

  async updateCategory(id: number, categoryData: { name: string; description: string }) {
    try {
      const response = await fetch(`${API_BASE_URL}/category/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to update category');
      }
      return response.json();
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  },

  async deleteCategory(id: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/category/${id}/`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to delete category');
      }
      return true;
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  },
};

export const postAPI = {
  async getAllPosts() {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to fetch posts');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  async createPost(postData: { product: number; type: string }) {
    try {
      const response = await axios.post(`${API_BASE_URL}/posts/`, postData);
      return response.data;
    } catch (error: any) {
      console.error('Error response:', error.response?.data);
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.detail || 
                          'Failed to create post';
      throw new Error(errorMessage);
    }
  },

  async updatePost(id: number, postData: { type: string }) {
    try {
      const response = await axios.patch(`${API_BASE_URL}/posts/${id}/`, postData);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  async deletePost(id: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },

  async getPostsByType(type: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/?type=${type}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to fetch posts');
      }
      return response.json();
    } catch (error) {
      console.error(`Error fetching ${type} posts:`, error);
      throw error;
    }
  },
};

export const customerAPI = {
  async getAllCustomers(): Promise<Customer[]> {
    const response = await axios.get(`${API_BASE_URL}/customers/`);
    return response.data;
  },

  async getCustomer(id: number): Promise<Customer> {
    const response = await axios.get(`${API_BASE_URL}/customers/${id}/`);
    return response.data;
  },

  async createCustomer(data: Partial<Customer>): Promise<Customer> {
    const response = await axios.post(`${API_BASE_URL}/customers/`, data);
    return response.data;
  },

  async updateCustomer(id: number, data: Partial<Customer>): Promise<Customer> {
    const response = await axios.put(`${API_BASE_URL}/customers/${id}/`, data);
    return response.data;
  },

  async deleteCustomer(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}/customers/${id}/`);
  },
};

export const dashboardAPI = {
  async getDashboardStats() {
    try {
      // Get products count
      const productsResponse = await fetch(`${API_BASE_URL}/products/`);
      const products = await productsResponse.json();

      // Get categories count
      const categoriesResponse = await fetch(`${API_BASE_URL}/category/`);
      const categories = await categoriesResponse.json();

      // Get posts count
      const postsResponse = await fetch(`${API_BASE_URL}/posts/`);
      const posts = await postsResponse.json();

      // Get customers count
      const customersResponse = await fetch(`${API_BASE_URL}/customers/`);
      const customers = await customersResponse.json();

      // Calculate post types
      const topPosts = posts.filter((post: any) => post.type === 'top').length;
      const exclusivePosts = posts.filter((post: any) => post.type === 'exclusive').length;

      return {
        totalProducts: products.length,
        totalOrders: 0, // You'll need to implement orders API
        totalCategories: categories.length,
        totalCustomers: customers.length,
        totalPosts: posts.length,
        topPosts,
        exclusivePosts
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  }
};
