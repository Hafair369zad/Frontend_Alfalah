import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon,
  UserCircleIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [

  // Dashboard
  { header: '' },
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    to: '/admin/dashboard'
  },
  { divider: true },

  // Manajemen Student
  { header: 'Student' },

  // Manajemen Student/Data Student
  {
    title: 'Data Santri',
    icon: KeyIcon,
    to: '/santri',
    children: [
      {
        title: 'Monitoring',
        icon: CircleIcon,
        to: '/admin/student'
      },
  //     {
  //       title: 'Transaksi',
  //       icon: CircleIcon,
  //       to: '/admin/student/spp/transaksi'
  //     },
  //     {
  //       title: 'Pengaturan',
  //       icon: CircleIcon,
  //       to: '/admin/student/spp/set'
  //     }
    ]
  },

  // Manajemen Student/SPP
  // {
  //   title: 'SPP',
  //   icon: KeyIcon,
  //   to: '/spp',
  //   children: [
  //     {
  //       title: 'Monitoring',
  //       icon: CircleIcon,
  //       to: '/admin/student'
  //     },
  //     {
  //       title: 'Transaksi',
  //       icon: CircleIcon,
  //       to: '/admin/student/spp/transaksi'
  //     },
  //     {
  //       title: 'Pengaturan',
  //       icon: CircleIcon,
  //       to: '/admin/student/spp/set'
  //     }
  //   ]
  // },

  // Manajemen Student/Absen
  // {
  //   title: 'Kehadiran',
  //   icon: UserCircleIcon,
  //   to: '/absen',
  //   children: [
  //     {
  //       title: 'Monitoring',
  //       icon: CircleIcon,
  //       to: '/admin/student/absen/monitoring'
  //     },
  //     {
  //       title: 'Laporan',
  //       icon: CircleIcon,
  //       to: '/admin/student/absen/laporan'
  //     },
  //     {
  //       title: 'Pengaturan',
  //       icon: CircleIcon,
  //       to: '/admin/student/absen/set'
  //     }
  //   ]
  // },

  {
    title: 'Error 404',
    icon: BugIcon,
    to: '/error'
  },
  { divider: true },



  // Manajemen Employee
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: TypographyIcon,
    to: '/utils/typography'
  },
  {
    title: 'Shadows',
    icon: ShadowIcon,
    to: '/utils/shadows'
  },
  {
    title: 'Colors',
    icon: PaletteIcon,
    to: '/utils/colors'
  },

  {
    title: 'Icons',
    icon: WindmillIcon,
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: CircleIcon,
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: CircleIcon,
        to: '/icons/material'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: BrandChromeIcon,
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
