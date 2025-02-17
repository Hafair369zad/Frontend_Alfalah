// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
// import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import AdminRoutes from './AdminRoutes';
import StudentRoutes from './StudentRoutes';
import EmployeeRoutes from './EmployeeRoutes';
import VisitorRoutes from './VisitorRoutes';
import PublicRoutes from './PublicRoutes';

// Define role redirects at the top level
const roleRedirects: Record<string, string> = {
  admin: '/admin/dashboard',
  student: '/student/dashboard',
  employee: '/employee/home',
  visitor: '/visitor/home'
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    AdminRoutes,
    StudentRoutes,
    EmployeeRoutes,
    VisitorRoutes,
    PublicRoutes,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    }
  ]
});

// // Debug log setelah router dibuat
// console.log('All Registered Routes:', router.getRoutes().map(route => ({
//   path: route.path,
//   name: route.name,
//   meta: route.meta
// })));



router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // Initialize auth if needed
  if (!authStore.user && authStore.token) {
    await authStore.initAuth();
  }

  // menganilasi first path
  const isAdminRoute = to.path.startsWith('/admin');
  const isStudentRoute = to.path.startsWith('/student');
  const isEmployeeRoute = to.path.startsWith('/employee');
  const isVisitorRoute = to.path.startsWith('/visitor');

  // Debug: Log detail rute dan role
  console.log('Route Details:', {
    path: to.path,
    isAdminRoute,
    isStudentRoute,
    isEmployeeRoute,
    isVisitorRoute,
    userRole: authStore.userRole,
    matchedRoutes: to.matched.map(route => ({
      path: route.path,
      meta: route.meta
    }))
  });

  // Collect roles dari matched routes dengan cara yang lebih ketat
  const matchedRoles = to.matched.reduce((roles, route) => {
    const routeRole = route.meta?.role;
    if (Array.isArray(routeRole)) {
      roles.push(...routeRole);
    } else if (routeRole) {
      roles.push(routeRole);
    }
    return roles;
  }, [] as string[]);

  // Tambahkan role berdasarkan path jika tidak ada matched roles, ini agar middleware pada role dapt teratasi
  if (isAdminRoute && !matchedRoles.includes('admin')) {
    matchedRoles.push('admin');
  }
  if (isStudentRoute && !matchedRoles.includes('student')) {
    matchedRoles.push('student');
  }
  if (isEmployeeRoute && !matchedRoles.includes('employee')) {
    matchedRoles.push('employee');
  }
  if (isVisitorRoute && !matchedRoles.includes('visitor')) {
    matchedRoles.push('visitor');
  }

  const requiresAuth = to.matched.some(record => record.meta?.requiresAuth);

  // Enhanced debug logging
  console.log('Auth Check:', {
    path: to.path,
    matchedRoles,
    userRole: authStore.userRole,
    isAuthenticated: authStore.isAuthenticated,
    requiresAuth,
    matched: to.matched.length
  });

  // Check authentication
  if (requiresAuth && !authStore.isAuthenticated) {
    console.log('⛔ Authentication required, redirecting to login');
    return next('/login');
  }

  // Strict role checking
  const hasAccess = matchedRoles.length === 0 || matchedRoles.includes(authStore.userRole);

  // Additional path-based role protection, output console log
  if (isAdminRoute && authStore.userRole !== 'admin') {
    console.log('🚫 Non-admin trying to access admin route');
    return next(roleRedirects[authStore.userRole] || '/unauthorized');
  }

  if (isStudentRoute && authStore.userRole !== 'student') {
    console.log('🚫 Non-student trying to access student route');
    return next(roleRedirects[authStore.userRole] || '/unauthorized');
  }

  if (isEmployeeRoute && authStore.userRole !== 'employee') {
    console.log('🚫 Non-employee trying to access employee route');
    return next(roleRedirects[authStore.userRole] || '/unauthorized');
  }

  if (isVisitorRoute && authStore.userRole !== 'visitor') {
    console.log('🚫 Non-visitor trying to access visitor route');
    return next(roleRedirects[authStore.userRole] || '/unauthorized');
  }

  // Final role check
  if (!hasAccess) {
    console.log('🚫 Role authorization failed', {
      required: matchedRoles,
      current: authStore.userRole
    });
    const fallbackRoute = roleRedirects[authStore.userRole] || '/unauthorized';
    console.log(`↩️ Redirecting to ${fallbackRoute}`);
    return next(fallbackRoute);
  }

  // Log successful navigation
  console.log('✅ Access granted:', {
    path: to.path,
    userRole: authStore.userRole
  });

  next();
  });

  // // Debug: Log all registered routes at startup
  // console.log('Registered Routes:', router.getRoutes().map(route => ({
  //   path: route.path,
  //   meta: route.meta,
  //   name: route.name
  // })));

export default router;