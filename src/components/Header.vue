<template>
  <div class=" p-4 font-semibold bg-pink-800 text-white text-center pr-4">
       <router-link class="mx-2" to="/">Home</router-link>
       <router-link class="mx-2" to="/">Services</router-link>
       <router-link class="mx-2" to="/">About Us</router-link>
       <router-link class="mx-2" to="/">Contact Us</router-link>
  </div>
</template>

<script>
export default {
 name: 'Navbar',
 props: {
    links: [String]
 },
}
</script>

<style>

</style>