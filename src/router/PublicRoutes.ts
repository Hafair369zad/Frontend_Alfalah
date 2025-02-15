const PublicRoutes = {
  path: '/',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Landing Page',
      path: '',
      component: () => import('@/views/indexPage.vue')
    },
    {
      name: 'Login',
      path: 'login', // Perbaikan: path relatif
      component: () => import('@/views/authentication/auth/LoginPage.vue')
    },
    {
      name: 'Register',
      path: 'register', // Perbaikan: path relatif
      component: () => import('@/views/authentication/auth/RegisterPage.vue')
    },
    {
      name: 'Error 404',
      path: 'error',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error' // Perbaikan: Redirect otomatis ke halaman 404
    }
  ]
};

export default PublicRoutes;
