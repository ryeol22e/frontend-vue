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
      console.log('app.vue by stage');
    },
    methods : {

    },
  }
</script>

<style>

</style>

