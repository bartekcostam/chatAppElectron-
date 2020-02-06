<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            v-if="$route.fullPath.includes('/chat')"
            v-go-back="'/'"
            icon="arrow_back"
            dense
            flat
            label="Back"
          />

          <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import { GoBack } from 'quasar'
export default {
  computed: {
    title() {
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Chat'
      else if (currentPath == '/chat') return 'Chat'
      else if (currentPath == '/auth') return 'Login'
    },
  },
  directives: {
    GoBack,
  },
  methods: {
    openURL,
  },
}
</script>
