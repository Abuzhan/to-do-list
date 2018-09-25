<template>
  <b-row>
    <b-col class="top-margins">
        <h5>{{todo.title}}</h5>
    </b-col>
    <b-col class="top-margins">
        <h5 v-if="todo.completed"> (Already completed) </h5>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['todo']
}
</script>
