<template>
  <b-nav tabs>
        <b-nav-item @click="clickTap" active>Active</b-nav-item>
        <b-nav-item @click="clickTap"><router-link to="/display/products">Link</router-link></b-nav-item>
        <b-nav-item @click="clickTap">Another Link</b-nav-item>
        <b-nav-item @click="clickTap">Disabled</b-nav-item>
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
            console.log(e.target.parentNode.parentNode.querySelectorAll('li'));
            e.target.parentNode.parentNode.querySelectorAll('a').forEach(function(item){
                item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    }
}
</script>

<style>

</style>