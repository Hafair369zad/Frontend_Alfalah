// src/router/AdminRoutes.ts
import type { RouteRecordRaw } from 'vue-router';

const AdminRoutes: RouteRecordRaw = {
  path: '/admin',
  component: () => import('@/layouts/admin/AdminLayout.vue'),
  // Perbaiki format meta di parent
  meta: { 
    requiresAuth: true,
    role: ['admin']  // Pastikan dalam bentuk array
  },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard Admin',
      component: () => import('@/views/admin/adminDashboard.vue'),
      // Perbaiki format meta di child
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student',
      name: 'Manajemen Student',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    }
  ]
};

// Debug log
console.log('Admin Routes Configuration:', {
  path: AdminRoutes.path,
  parentMeta: AdminRoutes.meta,
  children: AdminRoutes.children.map(child => ({
    path: child.path,
    meta: child.meta
  }))
});

export default AdminRoutes;