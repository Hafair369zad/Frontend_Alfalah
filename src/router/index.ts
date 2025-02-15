import { createRouter, createWebHistory } from 'vue-router';
import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import AdminRoutes from './AdminRoutes';
import StudentRoutes from './StudentRoutes';
import EmployeeRoutes from './EmployeeRoutes';
import VisitorRoutes from './VisitorRoutes';
import PublicRoutes from './PublicRoutes';;

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    AdminRoutes,
    StudentRoutes,
    EmployeeRoutes,
    VisitorRoutes,
    PublicRoutes
  ]
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
  const authStore = useAuthStore();
  
  if (!authStore.user && authStore.token) {
    await authStore.initAuth();
  }

  const requiresAuth = to.meta.requiresAuth;
  const requiredRole = to.meta.role;

  // Debug logging
  console.log('Current route:', to.path);
  console.log('Required auth:', requiresAuth);
  console.log('Required role:', requiredRole);
  console.log('User role:', authStore.userRole);
  console.log('Is authenticated:', authStore.isAuthenticated);

  // If route requires auth and user is not authenticated
  if (requiresAuth && !authStore.isAuthenticated) {
    console.log('Not authenticated, redirecting to login');
    next('/login');
    return;
  }

  // Check role access
  if (requiredRole) {
    const hasRequiredRole = Array.isArray(requiredRole)
      ? requiredRole.includes(authStore.userRole)
      : requiredRole === authStore.userRole;

    if (!hasRequiredRole) {
      console.log('Unauthorized role access');
      console.log('Required role:', requiredRole);
      console.log('User role:', authStore.userRole);
      // Redirect to appropriate page based on user's role
      switch (authStore.userRole) {
        case 'student':
          next('/student/dashboard');
          break;
        case 'admin':
          next('/admin/dashboard');
          break;
        case 'employee':
          next('/employee/home');
          break;
        default:
          next('/unauthorized');
      }
      return;
    }
  }

  next();
});

export default router;