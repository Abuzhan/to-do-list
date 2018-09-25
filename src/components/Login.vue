<template>
  <b-container>
    <b-row class="my-1">
      <b-col sm="4">
        <b-form-input id="input-default" v-model="email" type="text" placeholder="Enter your email"></b-form-input>
      </b-col>
      <b-col sm="4">
        <b-form-input id="input-default" v-model="password" type="text" placeholder="Password"></b-form-input>
      </b-col>
      <b-col sm="3">
        <b-button variant="outline-success" @click="Login()">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { LOGIN_MUTATION } from '../constants/graphql'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    Login () {
      const { email, password } = this.$data
      this.$apollo.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password
        }
      }).then((data) => {
        this.$router.push({path: '/'})
        alert('Success!')
      }).catch((error) => {
        console.error(error)
        alert('Error')
      })
    }
  }
}
</script>
