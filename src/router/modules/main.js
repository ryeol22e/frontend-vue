export default [
    {
        path: '/',
        name: 'Main',
        component: ()=> import('@/views/main/Main.vue')
      },
      {
        path : '/error',
        name : 'NotFound',
        component : ()=> import('@/views/common/NotFound.vue')
      },
      {
          path : '/login',
          name : 'Login',
          component : ()=> import('@/views/login/Login.vue')
      }
];