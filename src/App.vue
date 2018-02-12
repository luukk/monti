<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <!-- <transition name="slide-right" mode="out-in"> -->
   <router-view></router-view>
 <!-- </transition> -->
  </div>
</template>

<script>

export default {
    name: "app"
};
</script>
<style src="./assets/styles/app.scss" lang="scss"></style>
