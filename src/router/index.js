import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: ()=> import('../views/main/Main.vue')
  },
  {
    path : '/error',
    name : 'NotFound',
    component : ()=> import('../views/common/NotFound.vue')
  },
  // {
  //   path : '/display',
  //   redirect : {name : 'NotFound'},
  //   children : [
  //     {
  //       path : 'products',
  //       name : 'ProductList',
  //       component : ()=> import('../views/display/ProductList.vue')
  //     }
  //   ]
  // },
  {
    path : '/display/products/outer',
    name : 'OuterList',
    component : ()=> import('../views/display/ProductList/OuterList.vue')
  },
  {
    path : '/display/products/top',
    name : 'TopList',
    component : ()=> import('../views/display/ProductList/TopList.vue')
  },
  {
    path : '/product/detail/',
    name : 'ProductDetail',
    component : ()=> import('../views/product/ProductDetail.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from)=>{
  const title = to.meta.title;
  
  Vue.nextTick(()=>{
    document.title = title==undefined ? 'shopping mall' : title;
  });
});

export default router
