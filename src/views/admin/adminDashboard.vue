<script setup lang="ts">
// imported components
import TotalEarning from './components/admin/TotalEarning.vue';
import TotalOrder from './components/admin/TotalOrder.vue';
import TotalIncome from './components/admin/TotalIncome.vue';
import TotalGrowth from './components/admin/TotalGrowth.vue';
import PopularStocks from './components/admin/PopularStocks.vue';
</script>

<template>
  <v-row>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Earning -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalEarning />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Order -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalOrder />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Income -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalIncome />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total Growth -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="8">
      <TotalGrowth />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Popular Stocks -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="4">
      <PopularStocks />
    </v-col>
  </v-row>
</template>
