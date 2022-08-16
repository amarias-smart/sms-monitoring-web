<template>
  <q-layout view="lHh lpR lFf">

    <q-header
      elevated
      class="bg-dark"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          SMS MONITORING
        </q-toolbar-title>

        <div class="text-h6 text-orange">
          {{ updatedAsOf.timestamp }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUpdatedAsOfStore } from 'stores/updatedAsOf'

const updatedAsOf = useUpdatedAsOfStore()
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
