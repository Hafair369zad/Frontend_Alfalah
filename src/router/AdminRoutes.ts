import type { RouteRecordRaw } from 'vue-router';

const AdminRoutes: RouteRecordRaw = {
  path: '/admin',
  component: () => import('@/layouts/admin/AdminLayout.vue'),
  meta: {
    requiresAuth: true,
    role: ['admin']
  },
  redirect: '/admin/dashboard',
  children: [
    {
      name: 'Dashboard Admin',
      path: 'dashboard',
      component: () => import('@/views/admin/adminDashboard.vue'),
      meta: { 
        requiresAuth: true, 
        role: ['admin'] 
      }
    },
    {
      name: 'Manajemen Student',
      path: 'student',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true, 
        role: ['admin'] 
      }
    }
  ]
};

export default AdminRoutes;