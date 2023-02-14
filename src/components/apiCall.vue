<script setup>
import {
    ref
} from 'vue';
import HeaderPage from './HeaderPage.vue';

const listItems = ref([]);
const q = ref(1);

// getting all data in page through fetch api
async function getData() {
    const res = await fetch("https://dummyjson.com/carts");
    const finalRes = await res.json();
    // add api data in empty array
    listItems.value = finalRes;
}

// add cart item in local storage click on btn add-to-cart
async function data(id, title, price) {
    console.log(q.value)
    const res = await fetch("https://dummyjson.com/carts");
    const finalRes = await res.json();
    listItems.value = finalRes;
    //storing data in local storage
    let cart_data = new Array();
    cart_data = JSON.parse(localStorage.getItem("add-cart")) ?
        JSON.parse(localStorage.getItem("add-cart")) : [];
    // push cart in local storage
    if (cart_data.some((v) => {
            return v.id == id;
        })) {

        //Find id of specific object using find method.
        let objIndex = cart_data.find((obj => obj.id == id));
        //Update object's name property.
        objIndex.quntity++

        let quan = objIndex.quntity;
        let p1 = objIndex.price;
        let total = quan * p1;
        objIndex.price = total;
console.log(typeof total)

        // alert("dublicate data");
    } else {
        cart_data.push({
            id: id,
            title: title,
            price: parseInt(price),
            quntity: q.value,
        });
    }
    getData();
    localStorage.setItem("add-cart", JSON.stringify(cart_data));

}
getData();

// display number of quntity on screen of local storage
let cart_data = new Array();
cart_data = JSON.parse(localStorage.getItem("add-cart")) ?
    JSON.parse(localStorage.getItem("add-cart")) : [];


</script>

<template>
<div>
    <HeaderPage msg="All Product List" />
    <div class="nav">
        <div>
        </div>
        <h1>
            <router-link :to="`/addToCart`">
                <fa icon="cart-shopping" />{{cart_data.length}}
            </router-link>
        </h1>
    </div>
    <div v-for="c in listItems.carts" class="c-box" :key="c.id">
        <!-- carts-id: {{c.id}} | carts-total: {{c.total}} {{c.products}} -->
        <div v-for="p in c.products" class="p-box" :key="p.id">
            <p class="p-title">{{p.title}}</p>

            <div class="p-detail">Price :
                $<span class="rprice">{{p.price}}</span> only
                <span class="dprice">${{p.discountedPrice}}</span>
                <p>{{p.id}}</p>

                <p>total : {{p.total}}</p>
            </div>
            <!-- c.products.indexOf(p)  <router-link :to="`/addToCart/${p.id}`" class="viewProduct"><button type="submit" class="addToCartBtn" @click="increment">Add to Cart</button></router-link>-->
            <!-- <button @click="q--">-</button> -->
            <span v-for="datas of cart_data">
                <span v-if="datas.id==p.id">
                    items : {{datas.quntity}}
                </span>
            </span><br>
            <!--   <button @click="q++">+</button> -->
            <button class="addToCartBtn" @click="data(`${p.id}`,`${p.title}`,`${p.price}`)">Add to Cart</button>
            <router-link :to="`/viewProduct/${p.id}`" class="viewProduct">View Product</router-link>
        </div>

    </div>
</div>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
