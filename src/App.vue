<script setup>
import HomePage from './components/HomePage.vue';

</script>

<template>
<!-- // do not import any other files in app.vue other wisee routing is not working  -->
<nav>
    <HomePage msg="Wering Products" />
    <router-view />
</nav>

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
