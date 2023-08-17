<template>
  <div class="login_success">
    
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import config from "../assets/json/config.json";
import store from '../store';

export default defineComponent({
  name: 'LoginSuccess',
  components: {
    
  },
  data() {
    return {
      store: store
    }
  },
  mounted: async function() {
  var router = this.$router
    // await fetch("https://origin.yamashino.net/api/login-users/", {
    await fetch(config.url + "/login-users/", {
      method: 'GET',
      mode:"cors",
      credentials: "include",
      headers: new Headers({
        "content-type": "application/json",
      })
    }).then(function (response){
      console.log(response)
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        response.json().then(data => {
          store.dispatch('updateUser', data.user)
          store.dispatch('updateUserId', data.userId);
          store.dispatch('updateEmail', data.email);
        })
        router.push("/topview/top")
        
    }).catch(function (error){
        // 初期画面に遷移
        store.dispatch('deleteUser')
        store.dispatch('deleteUserId');
        store.dispatch('deleteEmail');
        router.push("/")
    })
  }
});
</script>
