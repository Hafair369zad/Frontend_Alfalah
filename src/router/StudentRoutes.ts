import type { RouteRecordRaw } from 'vue-router';

const StudentRoutes: RouteRecordRaw = {
  path: '/student',
  component: () => import('@/layouts/student/StudentLayout.vue'),
  meta: { requiresAuth: true, role: 'student' },
  redirect: '/student/dashboard',
  children: [
    {
      name: 'Dashboard Student',
      path: 'dashboard',
      component: () => import('@/views/student/studentDashboard.vue'),
      meta: { requiresAuth: true, role: 'student' }
    }
    // ... other student routes
  ]
};

export default StudentRoutes;