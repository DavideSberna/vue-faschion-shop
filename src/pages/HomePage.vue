<template>
    <Loader v-if="loading" />
    <section class="jumb">
        <h1 class="fw-light mt-2">Welcome to BoolBeauty</h1>
    </section>
  <div class="container">
    <hr />
    <div class="row justify-content-center my-4">
      <div class="col-12 col-lg-8">
        <div id="productCarousel" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              v-for="(product, index) in products"
              :key="product.id"
              data-bs-target="#productCarousel"
              :class="{ active: activeSlide === index }"
            ></button>
          </div>
          <div class="carousel-inner">
            <!-- <Transition :name="direction"> -->
            <div class="carousel-item active" :key="products[activeSlide]">
              <img
                :src="products[activeSlide]?.cover_image"
                class="d-block"
                :alt="products[activeSlide]"
              />
              <div class="carousel-caption d-md-block">
                <h5 class="bg-white p-2" style="--bs-bg-opacity: 0.5">
                  {{ products[activeSlide]?.name }}
                </h5>
              </div>
            </div>
            <!-- </Transition> -->
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#productCarouselCaptions"
            data-bs-slide="prev"
            @click="prev()"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="##productCarouselCaptions"
            data-bs-slide="next"
            @click="next()"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row gy-4 gx-1 justify-content-center">
      <div
        class="col-2 col-md-2 col-lg-1"
        v-for="(category, index) in categories"
        :key="category.id">
        <div class="card">
          <div class="card-img-top h-300 p-3">
            <img
              :src="'/images/' + category.slug + '.svg'"
              :alt="category.name"
              class="image-fit"/>
          </div>
          <div class="card-title">
            <h6 class="text-center">{{ category.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import Loader from "../components/Loader.vue";
export default {
  name: "HomePage",
  components: {
    Loader,
  },
  data() {
    return {
      store,
      loading: true,
      products: [],
      categories: [],
      activeSlide: 0,
    };
  },
  methods: {
    getData() {
      axios
        .get(`${store.apiUrl}/mixed`)
        .then((res) => {
          console.log(res.data.results);
          this.products = res.data.results.products;
          this.categories = res.data.results.categories;
        })
        .catch((errors) => {
          console.log(errors);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    next() {
      this.direction = "next";
      this.activeSlide =
        this.activeSlide < this.products.length - 1 ? this.activeSlide + 1 : 0;
    },
    prev() {
      this.direction = "prev";
      this.activeSlide =
        this.activeSlide > 0 ? this.activeSlide - 1 : this.products.length - 1;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.d-block {
  height: 500px;
  width: auto;
  margin: 0 auto;
}
.w-30{
    width: 30%;
}
.h-300{
    height: 120px;
}
.image-fit{
    object-fit: cover;
    width: 100%;
    height:100%;
}
.jumb{
    background-image: url('/public/img/cosmetics-up.jpg');
    background-size: cover;
    height: 60vh;
    min-height: 300px;
    h1{
        font-size: 10vw;
        padding: 20px;
        color: $txt_dark_gray;
        opacity: 0.5;
    }

}
#productCarousel{
    height: 400px;
    .carousel-inner{
        height: 100%;
        .carousel-item {
            height:100%;

            img {
              height: 70%;
              margin: 0 auto;
            }
        }
    }
}
#product-list{
    .card{
        .card-title{
            h3{
                color: $txt_dark_gray;
                min-height: 3em;
            }
        }
        .card-img-top {
                height: 250px;

                img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
  
    }
}
</style>
