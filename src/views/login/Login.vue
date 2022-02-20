<template>
  <div>
    <span>email : <b-form-input v-model="email" type="email" placeholder="Enter your eamil"></b-form-input></span>
    <span>password : <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input></span>
    <b-button @click="login" variant="primary">로그인</b-button>
    <b-button @click="info" variant="primary">토큰확인</b-button>
  </div>
</template>

<script>
  export default {
    name : 'Login',
    data() {
      return {
        email : '',
        password : '',
      };
    },
    created() {

    },
    methods : {
      login() {
        let api = this.$store.state.api;
        this.$axios
          .post(api.concat('/logins/login'), this.$data)
          .then((response)=> {
            document.cookie = 'Authorization='.concat(response.headers['authorization']).concat(';');
            console.log(response.headers);
          })
          .catch((error)=> {
            alert(error);
          });
      },
      info() {
        let api = this.$store.state.api;
        const headers = document.cookie.toString().split(';');
        const header = new Object();
        
        for(let s of headers) {
          const key = s.substring(0, s.indexOf('='));
          const value = s.substring(s.indexOf('=')+1, s.length);
          header[key] = value;
        }
        
        this.$axios
          .get(api.concat('/logins/info'), {
            headers : {
              Authorization : header['Authorization'],
            }
          })
          .then((response)=> {
            console.log(response);
          })
          .catch((error)=> {
            alert(error);
          });

      }
    }
  }
</script>

<style>

</style>