<template>
  <div class="login_success">
    
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import config from "../assets/json/config.json";

export default defineComponent({
  name: 'LoginSuccess',
  components: {
    
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
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        response.json().then(data => {
          console.log(data)
        })
        router.push("/topview/top")
        
    }).catch(function (error){
        console.log(error)
    })
  }
});
</script>
