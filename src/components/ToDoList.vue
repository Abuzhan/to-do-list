<template>
  <b-container>
    <h3 class="top-margins" v-if="loading">Loading Data From Server</h3>
    <to-do-item
      v-for="todo in allTodos"
      :key="todo.id"
      :todo="todo">
    </to-do-item>
  </b-container>
</template>

<script>
import { ALL_TO_DOS_QUERY } from '../constants/graphql'
import ToDoItem from './ToDoItem'

export default {
  name: 'ToDoList',
  data () {
    return {
      // 3
      allTodos: [],
      loading: 0
    }
  },
  components: {
    ToDoItem
  },
  apollo: {
    allTodos: {
      query: ALL_TO_DOS_QUERY
    }
  }
}
</script>
