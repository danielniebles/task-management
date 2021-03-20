<template>
  <div>
    <form @submit.prevent="loginUser">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value="email">

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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser () {
      this.login({
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push({ name: 'dashboard' }))
        .catch((err) => { this.error = err.response.data.error })
    }

  }

}
</script>

<style>

</style>
