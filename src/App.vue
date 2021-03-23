<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-title>Task Management</v-app-bar-title>
      <v-spacer />
      <v-btn rounded :to="{ name: 'home'}" retain-focus-on-click>
        Home
      </v-btn>
      <v-btn
        v-if="!loggedIn"
        rounded
        :to="{ name: 'login'} "
        retain-focus-on-click
      >
        Login
      </v-btn>
      <v-btn
        v-if="loggedIn"
        rounded
        retain-focus-on-click
        :to="{ name: 'dashboard'}"
      >
        Dashboard
      </v-btn>
      <v-btn
        v-if="loggedIn"
        rounded
        retain-focus-on-click
        @click="logoutUser"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view class="page" />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { authComputed } from './store/helpers.js'
export default {
  name: 'App',
  computed: {
    ...authComputed
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser () {
      this.logout()
    }
  }
}
</script>

<style lang="scss">
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}

</style>
