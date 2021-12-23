<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./index.css" />
