<template>
  <div>
      <button>{{buttonName}}</button>
  </div>
</template>

<script>
    export default {
        name : submit-button,
        data : function() {
            return {
                buttonName : '확인'
            };
        },
        created() {
            console.log('button start..');
        },
        methods : {

        }
    };
</script>

<style>

</style>