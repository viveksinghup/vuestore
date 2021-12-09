<template>
  <nav class="bg-white shadow-lg">
    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="#">Brand</a>
        </div>
        <div class="md:hidden">
          <button
            type="button"
            class="
              block
              text-gray-800
              hover:text-gray-700
              focus:text-gray-700 focus:outline-none
            "
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row hidden md:block -mx-2">
        <router-link class="mx-2" to="/">Home</router-link>
        <router-link class="mx-2" to="/about">About</router-link>
        <router-link class="mx-2" to="/services">Services</router-link>
        <router-link class="mx-2" to="/products">Products</router-link>
        <router-link class="mx-2" to="/contact-us">Contact Us</router-link>
      </div>
    </div>
  </nav>
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