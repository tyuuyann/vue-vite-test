<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import config from "../assets/json/config.json";
import { ref } from 'vue'

const config_url = ref(config.url + "/login/")
</script>

<template>
  <div class="hello">
    <div>
      <!-- <form action="https://origin.yamashino.net/api/login/" method="post"> -->
      <form :action="config_url" method="post">
        <v-btn type="submit" variant="flat" color="#6162b3" style="color: white; display" >スタート</v-btn>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
