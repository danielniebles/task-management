<template>
  <div id="card">
    <v-card width="400">
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="username" prepend-icon="mdi-account-circle" label="Username" />
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          :to="{ name: 'register' }"
        >
          Register
        </v-btn>
        <v-spacer />
        <v-btn @click="loginUser">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null,
      showPassword: false
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

<style></style>
