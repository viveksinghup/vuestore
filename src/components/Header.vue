<template>
  <div class="p-4 bg-brandBlue text-white text-center pr-4">
    <router-link class="mx-2" to="/">Home</router-link>
    <router-link class="mx-2" to="/about">About</router-link>
    <router-link class="mx-2" to="/services">Services</router-link>
    <router-link class="mx-2" to="/products">Products</router-link>
    <router-link class="mx-2" to="/contact-us">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: [String],
  },
};
</script>

<style>
</style>