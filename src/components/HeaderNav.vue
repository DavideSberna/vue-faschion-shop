<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo image</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, index) in menuLink" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                <p class="p-0 m-0">{{ link.label }}</p>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
</template>

<script>

    
export default {
    name: 'HeaderNav',
    data(){
        return{
            menuLink: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About',
                    routeName: 'about'
                },
                {
                    label: 'Contact',
                    routeName: 'contact'
                },
                {
                    label: 'All Product',
                    routeName: 'products'
                }
            ]
            
        };
    },
        

}
</script>

<style lang="scss" scoped></style>