import Vue from 'vue'
import Router from 'vue-router'
import CreateToDo from '../components/CreateToDo'
import ToDoList from '../components/ToDoList'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ToDoList
    },
    {
      path: '/create',
      component: CreateToDo
    },
    {
      path: '/login',
      component: Login
    }
  ],
  mode: 'history'
})
