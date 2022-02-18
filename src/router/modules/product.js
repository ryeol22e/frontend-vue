export default [
    {
        path : '/products/detail/:prdtNo',
        name : 'ProductDetail',
        component : ()=> import('@/views/product/ProductDetail.vue')
    },
];