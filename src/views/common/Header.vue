<template>
  <b-nav tabs>
        <b-nav-item @click="clickTap" :data-link="'/'">홈!</b-nav-item>
        <b-nav-item @click="clickTap" :data-link="'/display/products/outer'">외투</b-nav-item>
        <b-nav-item @click="clickTap" :data-link="'/display/products/top'">상의</b-nav-item>
        <b-nav-item @click="clickTap" :data-link="'/display/products/buttom'">하의</b-nav-item>
        <b-nav-item @click="clickTap" :data-link="'/display/products/acc'">악세사리</b-nav-item>

        <b-nav-item @click="clickTap" :data-link="'/login'">로그인</b-nav-item>
    </b-nav>
</template>

<script>
export default {
    name : 'Header',
    data : function() {
        return {

        }
    },
    created : function() {
        
    },
    methods : {
        clickTap : function(e) {
            const url = e.target.parentNode.dataset.link.toString();
            // console.log(e.target.parentNode.parentNode.querySelectorAll('li'));
            e.target.parentNode.parentNode.querySelectorAll('a').forEach(function(item){
                item.classList.remove('active');
            });
            e.target.classList.add('active');
            this.$router.push(url).catch(()=>{});
            
        }
    }
}
</script>

<style>

</style>