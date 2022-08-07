import Vue from 'vue'
import VueRouter from 'vue-router'
import Listworker from '@/components/Listworker'
import ToDoList from '@/components/ToDoList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Listworker
    },
    {
        path: '/todo',
        component: ToDoList
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})