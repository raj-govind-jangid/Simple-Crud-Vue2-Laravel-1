import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/Student'
import AddStudent from '@/components/AddStudent'
import EditStudent from '@/components/EditStudent'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Student',
      component: Student
    },
    {
      path: '/addstudent',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/editstudent/:id',
      name: 'EditStudent',
      component: EditStudent
    }
  ]
})
