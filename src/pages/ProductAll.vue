<template>
    <div>
      <Loader v-if="loading" />
        <div class="container" v-if="!loading">
          <select class="form-select mt-5 mb-4" name="category" id="category" v-model="selectedCategory" @change="getData(1)">
                <option value="">All</option>
                <option :value="category.id" v-for="(category, index) in categories" :key="category.id">{{ category.name }}
                </option>
          </select>
          <h1 class="fw-light mt-2 mb-4">All our Products</h1>
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
import Loader from '../components/Loader.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProductAll',
    components: {
      Loader,

    },
    data(){
        return{
            products: [],
            categories: [],
            loading: true,
            store,
            apiUrl: 'http://127.0.0.1:8000/api',
            // imgBasePath: 'http://127.0.0.1:8000/storage/',
            selectedCategory: '',
            currentPage: 1,
            lastPage: null,

        };
    },
    methods: {
        getData(numPage) {
            // axios.get(`${this.apiUrl}/products`, {
              let params = {
                'page': numPage
                }
                if (this.selectedCategory) {
                    params.category_id = this.selectedCategory
                }
                axios.get(`${store.apiUrl}/products`, { params
                }).then((res) => {

                  console.log(res.data.results.categories)
                  this.products = res.data.results.products.data
                  this.currentPage = res.data.results.products.current_page;
                  this.lastPage = res.data.results.products.last_page;
                  this.categories = res.data.results.categories;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
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

