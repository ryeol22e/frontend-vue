import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './modules/main.js';
import display from './modules/display.js';
import product from './modules/product.js';

Vue.use(VueRouter)

const routes = [
  ...main,
  ...display,
  ...product,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next)=> {
  console.log(to.name.concat(' link ready.'));
  // 로그인 인증로직
  if(true) {
    next();
  }
});

router.afterEach((to, from)=>{
  const title = to.meta.title;
  
  Vue.nextTick(()=> {
    document.title = title==undefined ? 'shopping mall' : title;
  });
});

export default router
