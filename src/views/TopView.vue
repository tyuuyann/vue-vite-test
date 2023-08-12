<template>
  <div class="topview">
    <v-app>
      <div>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>びゅうてぃふぁい</v-toolbar-title>
  
        <div class="flex-grow-1"></div>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-menu left bottom >
          <!-- <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template> -->
  
          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}" >
              <v-list-item-title>りんく {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
              <v-list-item-title><router-link class="test" :to="menuItem.url"><v-icon>{{ menuItem.icon }}</v-icon>{{ menuItem.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      </div>
      <v-content style="padding: 64px">
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import constans from '../assets/ts/constants';

export default defineComponent({
  name: 'TopView',
  data() {
    return {
      drawer: false,
      menuItems: constans.menuItems
    }
  },
  // mounted() {
  //   var router = this.$router
  //   router.push("/top")
  // }
  // components: {
  //   SideBar, // eslint-disable-line
  //   TopMain // eslint-disable-line
  // },
});
</script>

<style scoped>
.test {
  color: #2c2c2c;
  text-decoration: none;
}
</style>