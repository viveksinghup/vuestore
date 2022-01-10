<template>
  <div
    class="border-b border-gray10 border-opacity-100 z-10"
    :class="
      bgClass +
      `flex header transition ${
        isMenuVisible ? 'header--visible' : 'header--hidden'
      }`
    "
  >
    <nav :class="'px-0 ' + bgClass">
      <div class="container px-4 mx-auto">
        <div class="md:flex items-center justify-between py-7">
          <div class="flex justify-between items-center">
            <div class="text-2xl font-bold bg-gray-800 md:text-3xl w-40">
              <router-link to="/">
                <img
                  v-if="currentRouteName == 'About'"
                  src="@/assets/white_logo.png"
                  class="w-full assets"
                />
                <img
                  v-else
                  src="@/assets/images/MAVEN.png"
                  class="w-full assets"
                />
              </router-link>
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
                :class="{ active: isHamburgerOpen }"
                @click="isHamburgerOpen = !isHamburgerOpen"
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
          <div
            class="flex flex-col md:flex-row md:space-x-12 mob-link"
            :class="{ active: isHamburgerOpen }"
          >
            <div class="relative mob-list">
              <router-link
                class="link font-semibold py-4 md:border-none md:py-0 relative"
                @click="closeHamburgerMenu()"
                to="/"
                >Home</router-link
              >
            </div>
            <div class="relative mob-list">
              <router-link
                class="link font-semibold py-4 md:border-none md:py-0 relative"
                to="/about"
                @click="closeHamburgerMenu()"
                >About</router-link
              >
              <ul
                class="
                  md:absolute
                  left-0
                  top-0
                  bg-white
                  md:border-t-2 border-brandBlue
                  md:w-48
                "
              >
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#facility"
                    @click="closeHamburgerMenu()"
                    >Profile</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#edge"
                    @click="closeHamburgerMenu()"
                    >Our Edge</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#mission"
                    @click="closeHamburgerMenu()"
                    >Mission</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#vision"
                    @click="closeHamburgerMenu()"
                    >Vision</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#value"
                    @click="closeHamburgerMenu()"
                    >Our Values</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/about/#accreditations"
                    @click="closeHamburgerMenu()"
                    >Our Accreditations</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="relative mob-list">
              <router-link
                class="link font-semibold py-4 md:border-none md:py-0 relative"
                to="/services"
                @click="closeHamburgerMenu()"
                >Services</router-link
              >
              <ul
                class="
                  md:absolute
                  left-0
                  top-0
                  bg-white
                  md:border-t-2 border-brandBlue
                  md:w-52
                "
              >
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#techsolution"
                    @click="closeHamburgerMenu()"
                    >Technical Solutions</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#softsolution"
                    @click="closeHamburgerMenu()"
                    >Soft Service Solutions</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#pest"
                    @click="closeHamburgerMenu()"
                    >Pest Management Solutions</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#security"
                    @click="closeHamburgerMenu()"
                    >Security Solutions</router-link
                  >
                </li>
                <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#specialservices"
                    @click="closeHamburgerMenu()"
                    >Specialised Services Solutions</router-link
                  >
                </li>
                <!-- <li class=" text-black px-4 py-1 md:py-2 border-b border-gray group hover:bg-brandBlue transition">
                  <router-link
                    class="inline-block text-sm group-hover:text-white transition"
                    to="/services/#clients"
                    @click="closeHamburgerMenu()"
                    >Client testimonials</router-link
                  >
                </li> -->
              </ul>
            </div>
            <div class="relative mob-list">
              <router-link
                class="link font-semibold py-4 border-none md:py-0 relative"
                to="/contact-us"
                @click="closeHamburgerMenu()"
                >Contact Us</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isMenuVisible: true,
    isHamburgerOpen: false,
    lastScrollPosition: 0,
  }),
  watch: {
    isHamburgerOpen(isOpen) {
      document.body.classList[isOpen ? "add" : "remove"]("overflow-y-hidden");
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    bgClass() {
      return this.currentRouteName == "About"
        ? "bg-black text-white"
        : "text-black header-color";
    },
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // this.isMenuVisible = currentScrollPosition > 90
      if (currentScrollPosition > 90) {
        this.isMenuVisible = currentScrollPosition < this.lastScrollPosition;
      } else {
        this.isMenuVisible = true;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
    closeHamburgerMenu() {
      return (this.isHamburgerOpen = false);
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  beforeUnmount() {
    if (process.browser) {
      window.removeEventListener("scroll", this.onScroll);
    }
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
.header {
  @apply fixed top-0 left-0 right-0 transition;
}
.header-color {
  background-color: #dfdfdf;
}
@screen md {
  .header li > a {
    padding-top: 4px;
  }
}
.header--visible {
  transform: translateY(0);
}
.header--hidden {
  transform: translateY(-100%);
}
.mob-list ul {
  display: none;
  margin-top: 50px;
}
.mob-list ul:after {
  content: '';
  position: absolute;
  left: 0px;
  top: -30px;
  width: 100%;
  height: 30px;
  background-color: transparent;
}
.mob-list:hover ul {
  display: block;
}
@media screen and (max-width: 800px) {
  .mob-link {
    display: none;
    padding-top: 1.5rem;
  }
  .mob-link.active {
    display: flex;
    min-height: calc(100vh - 50px);
    overflow-y: auto;
  }
  .mob-list ul {
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
