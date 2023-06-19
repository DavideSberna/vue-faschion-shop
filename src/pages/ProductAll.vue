<template>

        <div class="container">
          <h1 class="fw-light mb-3">All our Products</h1>
          <hr>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" v-for="(product, index) in products" :key="product.id">
              <div class="card h-100">
                <img :src="product.cover_image" class="card-img-top img-fluid" :alt="product.name">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                  <p class="card-title text-uppercase fw-bolder">{{ product.name }}</p>
                  <div class="fw-lighter">
                    <p class="mb-0 fst-italic">Brand: <span class="fw-normal">{{ product.brand.name }}</span></p>
                    <p class="mb-0 fst-italic">Price: <span class="fw-normal">€ {{ product.price }}</span></p>
                    </div>
                    </div>
                    <div class="d-flex align-items-end flex-column flow-end">
                        <router-link :to="{ name: 'product-show', params: { slug: product.slug } }" class="button-style" role="button">Details</router-link>
                    </div>
                    </div>
              </div>
            </div>
            <hr>




          </div>
          <nav aria-label="Page navigation example my-3">
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
            <hr>
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
            apiUrl: 'http://127.0.0.1:8000/api',
            // imgBasePath: 'http://127.0.0.1:8000/storage/',
            currentPage: 1,
            lastPage: null,

        };
    },
    methods: {
        getData(numPage) {
            // axios.get(`${this.apiUrl}/products`, {
                axios.get(`${store.apiUrl}/products`, {
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
    height: 250px;
    object-fit: cover;
}

.bottom-right {
            bottom: 5px;
            right: 5px;
        }

.button-style {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #373B44;

  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-style:hover,
.button-style:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-style:active {
  background: var(--color);
  color: #fff;
}

.page-link {
    color: black;
}

.page-link.active {
    background-color: black;
    border-color: black;
    color: white;
}

</style>

