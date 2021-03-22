<template>
  <div>
    <form @submit.prevent="loginUser">
      <label for="username">Username:</label>
      <input v-model="username" name="username" value="username">

      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password" value="password">

      <button type="submit" name="button">
        Login
      </button>

      <p>{{ error }}</p>
      <router-link :to="{ name: 'register'}">
        Don't have an account? Register
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async loginUser () {
      try {
        await this.login({
          username: this.username,
          password: this.password
        })
        this.$router.push({ name: 'dashboard' })
      } catch (err) {
        this.error = err.response.data.error
      }
    }

  }

}
</script>

<style>

</style>
