const StudentRoutes = {
    path: '/student',
    meta: {
      requiresAuth: true
    },
    redirect: '/student/dashboard',
    component: () => import('@/layouts/student/StudentLayout.vue'),
    children: [
      {
        name: 'Dashboard Student',
        path: '/student/dashboard',
        component: () => import('@/views/student/studentDashboard.vue')
      }
  
    ]
  };
  
  export default StudentRoutes;