<script setup>
import HeaderPage from './HeaderPage.vue';
import {
    useRouter
} from 'vue-router';
import {
    ref
} from 'vue';
// it's for local storage data display on screen
let cart_data = new Array();
cart_data = JSON.parse(localStorage.getItem("add-cart")) ?
    JSON.parse(localStorage.getItem("add-cart")) : [];
var total = 0;
for (let cart of cart_data) {
total += cart.price;
}
console.log(total);
// delete item in local storage
const router = useRouter()

function deleted(i) {
    let cart_data = JSON.parse(localStorage.getItem("add-cart"));
    cart_data.splice(i, 1);
    localStorage.setItem("add-cart", JSON.stringify(cart_data));
    router.push({
        name: 'homePage'
    });
};
</script>

<template>
<HeaderPage msg="Added Cart Data Of Products" />

<!-- <h1>{{cart_data}}</h1> -->
<table class="table" id="myTable">
    <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Delete</th>
    </tr>

    <tr v-for="c of cart_data">
        <td> {{c.id}}</td>
        <td> {{c.title}}</td>
        <td> {{c.price}}</td>
        <td> {{c.quntity}}</td>
        <td><button @click="deleted(cart_data.indexOf(c))"> Delete </button></td>

    </tr>

</table>

<h1>Total Price: {{total}} </h1>
</template>

<style scoped>
th {
    background-color: #04AA6D;
    color: white;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #DDD;
}

tr:hover {
    background-color: #D6EEEE;
}
</style>
