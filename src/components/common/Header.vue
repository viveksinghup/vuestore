<template>
  <div class="border-b border-gray30 border-opacity-30 bg-opacity-40 bg-gray10">
    <nav class="container px-4 mx-auto">
      <div class="md:flex items-center justify-between py-2">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold bg-gray-800 md:text-3xl">
            <a href="#"
              ><img src="@/assets/images/MAVEN.png" class="w-full h-16"
            /></a>
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
              <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
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
        <div class="flex flex-col md:flex-row md:space-x-12 md:block">
          <router-link
            class="
              link
              font-semibold
              py-4
              border-b border-gray10
              md:border-none md:py-0
              relative
            "
            to="/"
            >Home</router-link
          >
          <router-link
            class="
              link
              font-semibold
              py-4
              border-b border-gray10
              md:border-none md:py-0
              relative
            "
            to="/about"
            >About</router-link
          >
          <router-link
            class="
              link
              font-semibold
              py-4
              border-b border-gray10
              md:border-none md:py-0
              relative
            "
            to="/services"
            >Services</router-link
          >
          <router-link
            class="link font-semibold py-4 border-b md:py-0 relative"
            to="/contact-us"
            >Contact Us</router-link
          >
        </div>
      </div>
    </nav>
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

<style lang="postcss" scoped>
.link:after {
  content: "";
  position: absolute;
  width: 0px;
  height: 2px;
  background-color: #013cac;
  left: 50%;
  bottom: -15px;
  border-radius: 5px;
  transform: translateX(-50%);
}
.router-link-active:after {
  width: 20px;
}
@media screen and (max-width: 800px) {
  .router-link-active:after {
    width: 0px;
  }
}
</style>