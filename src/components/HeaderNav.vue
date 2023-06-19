<template>

<<<<<<< HEAD
<nav class="navbar navbar-expand-lg bg-body-secondary ">
=======
<nav class="navbar navbar-expand-lg bg-body-tertiary py-0">
>>>>>>> 037c4061e9707b248cae685cd526023ae57b8904
  <div class="container-fluid">
    <a class="navbar-brand p-0" href="#">
        <img class="image-logo" src="../../public/img/logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, index) in menuLink" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link px-3" exact-active-class="active">
                <p class="m-0">{{ link.label }}</p>
            </router-link>

        </li>
      </ul>
      <div class="ms-auto">
          <a href="http://localhost:8000" class="nav-link">
              <p class="m-0">Area Riservata</p>
          </a>
      </div>

    </div>
  </div>
</nav>
<<<<<<< HEAD
    
=======

>>>>>>> 037c4061e9707b248cae685cd526023ae57b8904
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

<style lang="scss" scoped>

<<<<<<< HEAD
</style>
=======
.image-logo {
    width: 200px;
    height: auto;
}

.nav-link {
    padding-top: 30px ;
    padding-bottom: 30px ;
}

.nav-link:hover,
.nav-link.active {
  background-color: black;
  color: white;
  transition: background-color 0.5s, color 0.5s;
}
</style>

>>>>>>> 037c4061e9707b248cae685cd526023ae57b8904
