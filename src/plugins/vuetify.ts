import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { icons } from './mdi-icon'; // Import icons from separate file
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme } from '@/theme/AdminTheme';
import { YellowTheme } from '@/theme/StudentTheme';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      ...icons
    },
    sets: {
      mdi
    }
  },

  // Admin 
  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme
    }
  },

  // Student
  // theme: {
  //   defaultTheme: 'YellowTheme',
  //   themes: {
  //     YellowTheme
  //   }
  // },

  
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
