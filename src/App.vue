<template>
    <header>
      <HeaderNav/>
    </header>
    <main class="main-content">
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

<style lang="scss" scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

.main-content {
  width: 100%;
  height: calc(100vh - 84px);
  overflow-y: auto;
  background-image: url(https://static.vecteezy.com/ti/vettori-gratis/p1/2379059-sfondo-onda-bianco-elegante-vettoriale.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>