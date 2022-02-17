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
      console.log(process.env);
    }
  }
</script>

<style>

</style>

