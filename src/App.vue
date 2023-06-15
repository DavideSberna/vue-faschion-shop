<template>
  <header>
    <HeaderNav/>
  </header>
  <main>
    <router-view></router-view>
  </main>
  
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  name: 'App',
  components: {
      HeaderNav
    }

}
</script>

<style lang="scss" scoped></style>