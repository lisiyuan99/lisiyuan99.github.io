import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import ShowCart from './components/ShowCart.vue'
const routes = [
  { path: '/index', component: Index,name:'index' },
  { path: '/login', component: Login ,name:'login'},
  { path: '/register', component: Register,name:'register' },
  { path: '/products', component: ProductList ,name:'products'},
  { path: '/detail/', component: ProductDetail ,name:'detail'},
  { path: '/cart', component: ShowCart ,name:'cart'},
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default  router;