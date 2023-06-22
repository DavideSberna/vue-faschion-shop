<template>
    <Loader v-if="loading" />
    <section class="container" v-if="!loading">
        <div class="mb-4">
            <!-- <div class="container-fluid d-flex justify-content-between">
                <div class="p-4 w-25">
                    <img :src="product.cover_image" :alt="product.name" class="image-fit" />
                </div>

                <div class="p-4 w-75">
                    <h1 class="display-5 fw-bold">{{ product.name }}</h1>
                    <p class="fs-4">{{ product.description }}
                    </p>
                    <router-link :to="{ name: 'product-show', params: { slug: 'blotted-lip' } }" class="btn btn-primary">Altro
                    Prodotto
                </router-link>
                </div>

            </div> -->




            <div class="card bg-secondary text-white my-5">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="product.cover_image" class="img-fluid rounded-start bg-white" :alt="product.name">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title text-uppercase">{{ product.name }}</h3>
                            <hr>
                            <p class="card-text"><span class="fw-light">Category: </span><span
                                    class="text-capitalize fw-bold">{{ product.category.name }}</span></p>
                            <p class="card-text fst-italic">{{ product.description }}</p>

                            <div class="text-end">
                                <small class="">
                                    <p class="fw-lighter fst-italic">
                                        Price: €{{ product.price }}</p>
                                    <p class="fw-lighter fst-italic">
                                        Brand: {{ product.brand.name }}</p>
                                </small>
                                <button type="button" class="btn btn-primary">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<ul v-if="product.colors">
            <li v-for="color in product.colors" :style="{ backgroundColor: color.hex_value }">
                {{ color.name }}
            </li>
        </ul>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import Loader from '../components/Loader.vue';
import axios from 'axios'
export default {
    name: 'showProduct',
    components: {
        Loader
    },
    data() {
        return {
            store,
            product: null,
            loading: true
        }
    },
    methods: {
        getProduct() {
            axios.get(`${store.apiUrl}/products/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                this.product = res.data.results;
            }).catch((error) => {
                console.log(error);
                console.log(error.response.data);
                this.$router.push({ name: 'not-found', query: { e: error.response.data.message } });
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.product.cover_image;
        }
    },
    mounted() {
        this.getProduct();
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // react to route changes...
                this.getProduct();
            }
        )
    },
}
</script>

<style lang="scss" scoped></style>