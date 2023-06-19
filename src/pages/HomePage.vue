<template>
  <!-- <Loader/> -->
  <h1>Home page</h1>
  <div class="row justify-content-center my-4">
      <div class="col-12 col-lg-8">
          <div id="productCarousel" class="carousel carousel-dark slide">
              <div class="carousel-indicators">
                  <button type="button" v-for="(product, index) in products" :key="product.id"
                      data-bs-target="#productCarousel" :class="{ 'active': activeSlide === index }">
                  </button>
              </div>
              <div class="carousel-inner">
                  <!-- <Transition :name="direction"> -->
                      <div class="carousel-item active" :key="products[activeSlide]">
                          <img :src="store.LinkImage + products[activeSlide]" class="d-block" :alt="products[activeSlide]" />
                          <div class="carousel-caption d-none d-md-block">
                              <h5>{{ products[activeSlide] }}</h5>
                          </div>
                      </div>
                  <!-- </Transition> -->
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#productCarouselCaptions"
                  data-bs-slide="prev" @click="prev()">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="##productCarouselCaptions"
                  data-bs-slide="next" @click="next()">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
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
            categories: [],
            activeSlide: 0
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
        },
        next() {
            // this.direction = 'next';
            this.activeSlide = this.activeSlide < this.products.length - 1 ? this.activeSlide + 1 : 0;
        },
        prev() {
            // this.direction = 'prev';
            this.activeSlide = this.activeSlide > 0 ? this.activeSlide - 1 : this.products.length - 1;
        }
    },
    mounted() {
        this.getData();
    }
    
    

}
</script>

<style lang="scss" scoped></style>