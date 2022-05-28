<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/views/common/Header.vue';

  export default {
    name : 'App',
    components : {
      Header,
    },
    created() {
      console.log('hello vue');
      console.log('stage');
      console.log('dev');
    },
    methods : {
      clickEvnet() {
        
      }
    },
  }
</script>

<style>

</style>

