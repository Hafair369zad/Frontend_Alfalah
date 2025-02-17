// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axiosInstance from '@/plugins/axios';


// Define valid role types
type UserRole = 'admin' | 'student' | 'employee' | 'visitor' | 'guest';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(null);
  const token = ref<string | null>(localStorage.getItem('token'));
  const role = ref<UserRole | null>(localStorage.getItem('role') as UserRole | null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Computed properties
  const isAuthenticated = computed(() => !!token.value);
  const userRole = computed(() => {
    const currentRole = role.value ?? "guest";
    console.log('Current role:', currentRole);
    return currentRole;
  });
  
  const hasRole = (requiredRole: string | string[]): boolean => {
    console.log('Checking role:', {
      required: requiredRole,
      current: role.value,
    });
    
    if (!role.value) return false;
    
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(role.value);
    }
    return requiredRole === role.value;
  };

  // Login method
  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axiosInstance.post('/api/login', {
        email,
        password,
      });

      const { access_token, role: userRole } = response.data;
      
      // Set token and role
      token.value = access_token;
      role.value = userRole;
      
      // Store in localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('role', userRole);
      
      // Set axios default header
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      
      await fetchUser();

      // Handle routing based on role
      const roleRoutes: Record<string, string> = {
        admin: '/admin/dashboard',
        student: '/student/dashboard',
        employee: '/employee/home',
        visitor: '/home'
      };

      const targetRoute = roleRoutes[userRole] || '/home';
      await router.push(targetRoute);

      return userRole;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      error.value = errorMessage;
      throw new Error(errorMessage);
    } finally {
      loading.value = false;
    }
  };

  // Fetch user details
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get('/api/me');
      user.value = response.data.user;
      role.value = response.data.role;
  
      // Pastikan role tersimpan dengan benar di localStorage
      localStorage.setItem('role', response.data.role);
      console.log('🔄 Updated user role:', response.data.role);
    } catch (error) {
      console.error('❌ Failed to fetch user details:', error);
      await logout();
    }
  };
  
  // Initialize auth state
  const initAuth = async () => {
    if (token.value) {
      loading.value = true;
      try {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
        await fetchUser();
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        await logout();
      } finally {
        loading.value = false;
      }
    }
  };

  // Logout method
  const logout = async () => {
    loading.value = true;
    try {
      if (token.value) {
        // Call logout endpoint
        await axiosInstance.post('/api/logout');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear all auth data
      user.value = null;
      token.value = null;
      role.value = null;
      error.value = null;
      
      // Remove from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      
      // Clear axios header
      delete axiosInstance.defaults.headers.common['Authorization'];
      
      // Reset loading state
      loading.value = false;
      
      // Redirect to login
      await router.push('/');
    }
  };

  // Check auth status
  const checkAuth = async () => {
    if (!token.value) {
      return false;
    }

    try {
      await fetchUser();
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    // State
    user,
    token,
    role,
    loading,
    error,

    // Computed
    isAuthenticated,
    userRole,

    // Methods
    login,
    logout,
    fetchUser,
    initAuth,
    checkAuth,
    hasRole
  };
});