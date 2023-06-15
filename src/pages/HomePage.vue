<template>
  <!-- <Loader/> -->
  <h1>Home page</h1>
  <div class="row mt-5 mb-3">
    <div class="col-4" v-for="product in products" :key="product.id">
      <div class="card">
        <h4>{{ product.name }}</h4>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-4" v-for="category in categories" :key="category.id">
      <div class="card">
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'HomePage',
    components:{
      Loader,
    },
    data() {
        return {
            store,
            loaders: true,
            products: [],
            categories: []
        }
    },
    methods: {
        getData(){
          axios.get(`${store.apiUrl}/mixed`).then((res)=> {
            console.log(res.data.results.products);
            console.log(res.data.results.categories);
            this.products = res.data.results.products;
            this.categories = res.data.results.categories;
          });
           
        }
    },
    mounted() {
        this.getData();
    }
    
    

}
</script>

<style lang="scss" scoped></style>