<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            v-if="$route.fullPath.includes('/chat')"
            v-go-back.single
            icon="arrow_back"
            dense
            flat
            label="Back"
          />

          <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>
          <q-btn
            v-if="!userDetails.userId"
            to="/auth"
            class="absolute-right q-pa-sm"
            icon="account_circle"
            no-caps
            dense
            flat
            label="Login"
          />
          <q-btn
            v-else
            @click="logoutUser"
            class="absolute-right q-pa-sm"
            icon="account_circle"
            no-caps
            dense
            flat
          >
            Logout
            <br />
            {{ userDetails.name }}
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { Quasar, GoBack } from 'quasar'
import { mapState, mapActions } from 'vuex'
import { Vue } from 'vue'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'
export default {
  mixins: [mixinOtherUserDetails],
  computed: {
    ...mapState('store', ['userDetails']),
    title() {
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Chat'
      else if (currentPath.includes('/chat')) return this.otherUserDetails.name
      else if (currentPath == '/auth') return 'Login'
    },
  },
  methods: {
    ...mapActions('store', ['logoutUser']),
  },
}
</script>
<style lang="stylus">
.q-toolbar {
  .q-btn {
    line-height: 1.2;
  }
}
</style>
