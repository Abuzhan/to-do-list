<template>
  <b-container>
    <b-row class="my-1">
      <b-col sm="4">
        <b-form-input id="input-default" v-model="title" type="text" placeholder="Enter your task"></b-form-input>
      </b-col>
      <b-col sm="3">
        <b-form-checkbox id="checkbox1"
                         v-model="completed"
                         value=true
                         unchecked-value=false>
          Completed?
        </b-form-checkbox>
      </b-col>
      <b-col sm="3">
        <b-button variant="outline-success" @click="createToDo()">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { CREATE_TO_DO_MUTATION } from '../constants/graphql'
export default {
  name: 'CreateToDo',
  data () {
    return {
      title: '',
      completed: false
    }
  },
  methods: {
    createToDo () {
      const { title, completed } = this.$data
      this.$apollo.mutate({
        mutation: CREATE_TO_DO_MUTATION,
        variables: {
          title,
          completed
        }
      }).then((data) => {
        alert('Success!')
        this.$router.push({path: '/'})
      }).catch((error) => {
        console.error(error)
        alert('Error')
      })
    }
  }
}
</script>
