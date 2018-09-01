<template>
  <div id="app">
   <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import Listing from './components/List.vue'
import Headers from './components/Header.vue'
export default {
  name: 'App',
  components:{
    'add-article':Add,
    'lists-article':Listing,
    'app-header':Headers
  }
}
</script>

<style>

</style>
