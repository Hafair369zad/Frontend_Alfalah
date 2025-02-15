<script setup lang="ts">
import { ref } from 'vue';
import { SettingsIcon, LogoutIcon, UserIcon, SearchIcon } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/auth';

const swt1 = ref(true);
const swt2 = ref(false);
const authStore = useAuthStore();
const showLogoutDialog = ref(false);
const isLoggingOut = ref(false);

const handleLogout = async () => {
  try {
    isLoggingOut.value = true;
    await authStore.logout();
    showLogoutDialog.value = false;
  } catch (error) {
    console.error('Logout failed:', error);
  } finally {
    isLoggingOut.value = false;
  }
};
</script>

<template>
  <!-- Profile DD -->
  <div class="pa-4">
    <h4 class="mb-n1">Good Morning, <span class="font-weight-regular">John Doe</span></h4>
    <span class="text-subtitle-2 text-medium-emphasis">Project admin</span>

    <v-text-field 
      persistent-placeholder 
      placeholder="Search" 
      class="my-3" 
      color="primary" 
      variant="outlined" 
      hide-details
    >
      <template v-slot:prepend-inner>
        <SearchIcon stroke-width="1.5" size="20" class="text-lightText SearchIcon" />
      </template>
    </v-text-field>

    <v-divider></v-divider>
    <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 515px">
      <div class="bg-lightwarning rounded-md pa-5 my-3 circle sm-circle lg-circle">
        <h4>Upgrade your plan</h4>
        <h6 class="text-subtitle-2 text-medium-emphasis mr-11 pr-11 mb-3 mt-2">
          70% discount for 1 years subscriptions.
        </h6>
        <v-btn color="warning" variant="flat" target="_" href=""> Go Premium </v-btn>
      </div>

      <v-divider></v-divider>

      <div class="bg-lightprimary rounded-md px-5 py-3 my-3">
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Start DND Mode</h5>
          <div>
            <v-switch v-model="swt1" color="primary" hide-details></v-switch>
          </div>
        </div>
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Allow Notifications</h5>
          <div>
            <v-switch v-model="swt2" color="primary" hide-details></v-switch>
          </div>
        </div>
      </div>

      <v-divider></v-divider>

      <v-list class="mt-3">
        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <SettingsIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">Account Settings</v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">Social Profile</v-list-item-title>
          <template v-slot:append>
            <v-chip color="warning" class="text-white" text="02" variant="flat" size="small" />
          </template>
        </v-list-item>

        <v-list-item 
          @click="showLogoutDialog = true" 
          color="secondary" 
          rounded="md"
          :disabled="isLoggingOut"
        >
          <template v-slot:prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            {{ isLoggingOut ? 'Logging out...' : 'Logout' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>

  <!-- Logout Confirmation Dialog -->
  <v-dialog
    v-model="showLogoutDialog"
    max-width="400"
    :retain-focus="false"
    content-class="logout-dialog"
  >
    <v-card>
      <v-card-title class="text-h6 pa-6">
        Konfirmasi Logout
      </v-card-title>
      
      <v-card-text class="pa-6 pt-0">
        Apakah Anda yakin ingin keluar dari aplikasi?
      </v-card-text>
      
      <v-card-actions class="pa-6 pt-0">
        <v-spacer></v-spacer>
        <v-btn
          color="grey-darken-1"
          variant="text"
          @click="showLogoutDialog = false"
          :disabled="isLoggingOut"
          class="mr-2"
        >
          Batal
        </v-btn>
        <v-btn
          color="error"
          variant="flat"
          @click="handleLogout"
          :loading="isLoggingOut"
          :disabled="isLoggingOut"
        >
          Ya, Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.logout-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>