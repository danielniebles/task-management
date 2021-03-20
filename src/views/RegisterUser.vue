<template>
  <div>
    <form @submit.prevent="registerUser">
      <label for="name">Name:</label>
      <input v-model="name" type="text" name="name" value>

      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value>

      <label for="password">Password:</label>
      <input v-model="password" type="password" name value>

      <button type="submit" name="button">
        Register
      </button>

      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>

      <router-link :to="{ name: 'login'}">
        Already have an account? Login you idiot
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      name: '',
      password: '',
      email: '',
      errors: null
    }
  },
  methods: {
    ...mapActions(['register']),
    registerUser () {
      this.register({
        name: this.name,
        password: this.password,
        email: this.email
      })
        .then(() => this.$router.push({ name: 'dashboard' }))
        .catch((err) => {
          this.errors = err.response.data.errors
          console.log(err.response.data.errors)
        })
    }
  }
}
</script>
