<script setup lang="ts">
import { ref } from 'vue'

const height = ref("748")
const width = ref("1024")

</script>

<template>
  <router-view/>
</template>

<style scoped>
body {
  width: v-bind(width);
  height: v-bind(height);
  overflow: hidden;
}
#app {
  width: v-bind(width);
  height: v-bind(height);
  overflow: hidden;
}
</style>
