const EmployeeRoutes = {
    path: '/admin',
    meta: {
      requiresAuth: true
    },
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        name: 'Dashboard Admin',
        path: '/admin/dashboard',
        component: () => import('@/views/admin/adminDashboard.vue')
      },
      {
        name: 'Manajemen Student',
        path: '/admin/student',
        component: () => import('@/views/admin/students/indexPages.vue')
      },
  
    ]
  };
  
export default EmployeeRoutes;