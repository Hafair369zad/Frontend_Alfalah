// src/router/AdminRoutes.ts
import type { RouteRecordRaw } from 'vue-router';

const AdminRoutes: RouteRecordRaw = {
  path: '/admin',
  component: () => import('@/layouts/admin/AdminLayout.vue'),
  meta: { 
    requiresAuth: true,
    role: ['admin']  
  },
  children: [
    // dashboard utama
    {
      path: 'dashboard',
      name: 'Dashboard Admin',
      component: () => import('@/views/admin/adminDashboard.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ================== Manajemen Pengguna ==================
    {
      path: 'user/employee',
      name: 'Data Employee',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'user/student',
      name: 'Data Student',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'user/visitor',
      name: 'Data Visitor',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // ================== Manajemen Santri  ==================
    // SPP
    {
      path: 'student/spp/billing',
      name: 'Manajemen Tagihan',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'student/spp/payment',
      name: 'Manajemen Pembayaran',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'student/spp/report',
      name: 'Manajemen Laporan Keuangan',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'student/spp/set',
      name: 'Pengaturan SPP',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Kelas & Akademik
    {
      path: 'student/class',
      name: 'Manajemen Kelas',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student/lesson',
      name: 'Manajemen Pelajaran',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student/presence',
      name: 'Manajemen Presensi',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student/report',
      name: 'Manajemen Laporan Akdemik',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // ================== Employee ==================
    {
      path: 'employee/jobs',
      name: 'Manajemen Jabatan dan Wali Kelas',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Payroll
    {
      path: 'employee/sallary/list',
      name: 'Daftar Gaji',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'employee/sallary/transaction',
      name: 'Riwayat Transaksi Gaji',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'employee/sallary/report',
      name: 'Laporan Penggajian',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'employee/sallary/set',
      name: 'Pengaturan Penggajian',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // ====================== Manajemen Content ======================

    // article
    {
      path: '/article',
      name: 'Data Article',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: '/article/type',
      name: 'Data Tipe Article',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // announcement
    {
      path: '/announcement',
      name: 'Data Pengumuman',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Event
    {
      path: '/event',
      name: 'Data Acara',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Manajemen Informasi lainnya
    {
      path: '/inforamtion',
      name: 'Manajemen Data Informasi',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // ====================== Manajemen Anggaran ======================
    // ===== Masjid =====
    // Pemasukan
    {
      path: 'mosque/income',
      name: 'Manajemen Pemasukan Masjid',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Pengeluaran 
    {
      path: 'mosque/expense',
      name: 'Manajemen Pengeluaran Masjid',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Rekap Keuangan
    {
      path: 'mosque/report',
      name: 'Manajemen Rekap Keuangan Masjid',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ==== TPQ ====
    // Pemasukan
    {
      path: 'tpq/income',
      name: 'Manajemen Pemasukan TPQ',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Pengeluaran 
    {
      path: 'tpq/expense',
      name: 'Manajemen Pengeluaran TPQ',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Rekap Keuangan
    {
      path: 'tpq/report',
      name: 'Manajemen Rekap Keuangan TPQ',
      component: () => import('@/views/admin/students/indexPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
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