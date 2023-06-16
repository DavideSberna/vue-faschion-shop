<template>
    <div>
        <div class="container">
          <h1>All our Products</h1>
          <div class="row mb-3">
            <div class="col" v-for="(product, index) in products" :key="product.id">

              <div class="card h-100">
                <img :src="product.cover_image" class="card-img-top" :alt="product.title">
                <div class="card-body">
                  <p class="card-title text-uppercase fw-bolder">{{ product.name }}</p>
                  <div class="fw-lighter">
                  <p>Brand: <span class="fw-normal">{{ product.brand.name }}</span></p>
                  <p>Price: <span class="fw-normal">€ {{ product.price }}</span></p>
                  </div>
                 <p><router-link :to="{ name: 'product-show', params: { slug: product.slug } }" class="btn btn-primary bottom-right position-absolute">Details</router-link></p>
                </div>
              </div>
            </div>

          </div>
          <nav aria-label="Page navigation example">
              <ul class="pagination">
                  <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                  @click="getData(currentPage - 1)">Previous</button></li>
                  <li class="page-item" v-for="n in lastPage"><button
                                :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                  </li>
                  <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                  @click="getData(currentPage + 1)">Next</button></li>
              </ul>
            </nav>
        </div>
      </div>
</template>

<script>

import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProductAll',
    data(){
        return{
            products: [],
            store,
            apiURL: 'http://127.0.0.1:8001/api',
            imgBasePath: 'http://127.0.0.1:8001/storage/',
            currentPage: 1,
            lastPage: null,

        };
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiURL}/products`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                // console.log(res)
                this.products = res.data.results.data
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;

            })
        }
    },
    mounted(){
        this.getData();

    }

}
</script>

<style lang="scss" scoped>

.card-img-top {
width: 100%;
    height: 15vw;
    object-fit: cover;
}

.bottom-right {
            bottom: 5px;
            right: 5px;
        }

</style>