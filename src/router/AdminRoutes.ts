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
      name: 'DashboardAdmin',
      component: () => import('@/views/admin/adminDashboard.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ================== Manajemen Pengguna ==================
    {
      path: 'user/employee',
      name: 'DataEmployee',
      component: () => import('@/views/admin/users/employeePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'user/student',
      name: 'DataStudent',
      component: () => import('@/views/admin/users/studentPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'user/visitor',
      name: 'DataVisitor',
      component: () => import('@/views/admin/users/visitorPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // ================== Manajemen Santri  ==================

    // Report Kesluruhan
    {
      path: 'student/report',
      name: 'LaporanAkdemik',
      component: () => import('@/views/admin/students/reportPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Sub Menu SPP

    // Daftar tagihan
    {
      path: 'student/spp/billing', 
      name: 'TagihanSPP',
      component: () => import('@/views/admin/students/spps/billingPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },


    // Riwayat Pembayaran
    {
      path: 'student/spp/payment',
      name: 'PembayaranSPP',
      component: () => import('@/views/admin/students/spps/paymentPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // menampilkan dashboard laporan pemasukan keuangan
    {
      path: 'student/spp/report',
      name: 'LaporanKeuanganSPP',
      component: () => import('@/views/admin/students/spps/reportPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    {
      path: 'student/spp/set',
      name: 'PengaturanSPP',
      component: () => import('@/views/admin/students/spps/setPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Sub Menu Kelas & Akademik
    {
      path: 'student/class',
      name: 'KelasProgram',
      component: () => import('@/views/admin/students/classPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student/lesson',
      name: 'Pelajaran',
      component: () => import('@/views/admin/students/lessonPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'student/presence',
      name: 'PresensiSantri',
      component: () => import('@/views/admin/students/presencePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    
    // ================== Manajemen Employee  Tpq ==================

    // presence
    {
      path: 'employee/presence',
      name: 'PresensiEmployee',
      component: () => import('@/views/admin/employees/presencePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Positions
    {
      path: 'employee/position',
      name: 'JabatanEmployee',
      component: () => import('@/views/admin/employees/positionPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Sub Menu Sallary 
    {
      path: 'employee/sallary/transaction',
      name: 'TransaksiPenggajian',
      component: () => import('@/views/admin/employees/sallarys/transactionPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'employee/sallary/report',
      name: 'LaporanPenggajian',
      component: () => import('@/views/admin/employees/sallarys/reportPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    {
      path: 'employee/sallary/set',
      name: 'PengaturanPenggajian',
      component: () => import('@/views/admin/employees/sallarys/setPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ====================== Manajemen Content ======================

    // article
    {
      path: 'user/article',
      name: 'DataArticle',
      component: () => import('@/views/admin/users/articlePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // announcement
    {
      path: 'user/announcement',
      name: 'DataPengumuman',
      component: () => import('@/views/admin/users/announcementPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Event
    {
      path: 'user/event',
      name: 'DataAcara',
      component: () => import('@/views/admin/users/eventPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Manajemen Informasi lainnya
    {
      path: 'user/information',
      name: 'DataInformasi',
      component: () => import('@/views/admin/users/informationPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ====================== Manajemen Anggaran ======================
    // Sub Menu ===== Masjid =====
    // Pemasukan
    {
      path: 'mosque/income',
      name: 'PemasukanMasjid',
      component: () => import('@/views/admin/mosques/incomePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Pengeluaran 
    {
      path: 'mosque/expense',
      name: 'PengeluaranMasjid',
      component: () => import('@/views/admin/mosques/expensePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Rekap Saldo Keuangan
    {
      path: 'mosque/report',
      name: 'RekapKeuanganMasjid',
      component: () => import('@/views/admin/mosques/reportPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // ==== TPQ ====
    // Pemasukan
    {
      path: 'tpq/income',
      name: 'PemasukanTPQ',
      component: () => import('@/views/admin/tpqs/incomePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Pengeluaran 
    {
      path: 'tpq/expense',
      name: 'PengeluaranTPQ',
      component: () => import('@/views/admin/tpqs/expensePages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },
    // Rekap Saldo Keuangan
    {
      path: 'tpq/report',
      name: 'RekapKeuanganTPQ',
      component: () => import('@/views/admin/tpqs/reportPages.vue'),
      meta: { 
        requiresAuth: true,
        role: ['admin']
      }
    },

    // Pengaturan halaman Admin
    {
      path: 'settings',
      name: 'Settings',
      component: () => import('@/views/admin/settingPages.vue'),
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