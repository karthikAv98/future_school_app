<template>
  <q-layout view="hHh lpR fFf">

    <q-header v-show="is_logged_in" elevated class="text-white bg-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Future School
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-show="is_logged_in" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "App",
  setup () {
    const leftDrawerOpen = ref(false)
    const is_logged_in = ref(false)

    return {
      leftDrawerOpen,
      is_logged_in,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>