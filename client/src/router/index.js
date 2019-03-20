import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import CreateUser from '@/components/Users/CreateUser'
import ShowUser from '@/components/Users/ShowUser'
import EditUser from '@/components/Users/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: CreateUser
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: EditUser
    },
    {
      path: '/user',
      name: 'user',
      component: ShowUser
    }
  ]
})
