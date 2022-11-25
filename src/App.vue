<template>
  <q-layout view="hHh lpR fFf">

    <q-header style="height: 5vh" v-show="is_logged_in" elevated class="text-white bg-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Future School
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-show="is_logged_in" v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container style="height: 95vh">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false);
const is_logged_in = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

defineExpose({
  leftDrawerOpen,
  is_logged_in,
  toggleLeftDrawer
})
</script>