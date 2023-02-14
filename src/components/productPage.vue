<script setup>
import HeaderPage from './HeaderPage.vue';
import {ref} from 'vue';
import {onMounted} from 'vue';
import {useRoute} from 'vue-router';

const listItems = ref([]);

onMounted(() => {
    const route = useRoute();
    // console.warn(route.params.id);
    async function getData() {
        //featch product detail from this api
        const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
        const finalRes = await res.json();
        listItems.value = finalRes;
    }
    getData();
});

 import { defineComponent } from 'vue'
  import { Pagination, EffectCoverflow } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import '../assets/main.css';
</script>

<template>
<HeaderPage msg="Product Detail Page" />
<div class="p-box one-product">
    <h1 class="product-title">Product Details</h1>
    <!-- <h3>{{ $route.params.id }}</h3> -->
    <h3>PRODUCT ID : <span> {{listItems.id }}</span> <br></h3>
    <h3>PRODUCT PRICE: {{ listItems.price }}</h3>
    <h3>PRODUCT TITLE : <span> {{listItems.title}}</span> <br></h3>
    <h3>PRODUCT DESCRIPTION : <span> {{listItems.description}}</span> <br></h3>
    <h3>PRODUCT RATING : <span> {{listItems.rating}}</span> <br></h3>
    <h3>PRODUCT STOCK : <span> {{listItems.stock}}</span> <br></h3>
    <h3>PRODUCT BRAND : <span> {{listItems.brand}}</span> <br></h3>
    <h3>PRODUCT CATEGORY : <span> {{listItems.category}}</span> <br></h3>
    <h3>PRODUCT THUMBNAIL : <span class="thumb-span"> <br>
    <!-- {{listItems.thumbnail}} -->
    <img class="thumb-img" :src="`${listItems.thumbnail}`" alt="">
        </span> <br></h3>
</div>
<h3 class="thumb-span">PRODUCT IMAGE</h3>
<!-- <div class="p-images">
    <p v-for="i in listItems.images" class="p-img">
        {{i}}<img class="blocks-imgs" :src="`${i}`" alt="">
    </p>

</div> -->
   <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="slide" v-for="i in listItems.images" :key="index">
      <img :src="`${i}`" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

/* .swiper {
  width: 100%;
  height: 100%;
} */

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px 0;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
