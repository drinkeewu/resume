<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  scroll-behavior:smooth;

  @media screen and (max-width: 1049px){
    font-size: 16px;
  }
}


</style>
