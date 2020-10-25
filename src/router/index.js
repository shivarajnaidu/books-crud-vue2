import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books/categories/new',
    name: 'Add New Category',
    component: () => import('../pages/categories/AddCategory.vue'),
  },
  {
    path: '/books/new',
    name: 'Add New book',
    component: () => import('../pages/books/CreateBook.vue'),
  },
  {
    path: '/books',
    name: 'Book List',
    component: () => import('../pages/books/BookList.vue'),
  },
  {
    path: '*',
    redirect: '/books',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
