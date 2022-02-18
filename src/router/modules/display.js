export default [
    // {
    //   path : '/display',
    //   redirect : {name : 'NotFound'},
    //   children : [
    //     {
    //       path : 'products',
    //       name : 'ProductList',
    //       component : ()=> import('@/views/display/ProductList.vue')
    //     }
    //   ]
    // },
    {
        path : '/display/products/outer',
        name : 'OuterList',
        component : ()=> import('@/views/display/productList/OuterList.vue')
      },
      {
        path : '/display/products/top',
        name : 'TopList',
        component : ()=> import('@/views/display/productList/TopList.vue')
      },
];