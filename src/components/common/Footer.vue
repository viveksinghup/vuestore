<template>
  <div class="bg-white-100 px-27 my-10 md:my-20">
    <div
      class="
        max-w-6xl
        flex-col
        md:flex-row
        m-auto
        text-gray-800
        flex flex-wrap
        justify-center
      "
    >
      <div class="p-5 md:w-72">
        <div class="text-xs">
          <img src="@/assets/images/Footer-logo.svg" class="" />
        </div>
        <a class="my-3 block" href="/#"></a>
        <a class="my-3 block font-bold" href="/#"
          >Your Facility<br />
          Experts</a
        >
      </div>
      <div class="flex flex-col md:flex-row flex-1">
        <div class="p-5 md:w-1/4">
          <div class="text-lg text-gray-500 font-semibold">About Maven</div>
          <a
            v-for="(data, index) in footerCol1"
            :key="index"
            class="my-3 block text-sm opacity-50"
            href="/#"
            >{{ data }}</a
          >
        </div>
        <div class="p-5 md:w-1/4">
          <div class="text-lg text-gray-500 font-semibold">Services</div>
          <a
            v-for="(data, index) in footerCol2"
            :key="index"
            class="my-3 block text-sm opacity-50"
            href="/#"
            >{{ data }}</a
          >
        </div>
        <div class="p-5 md:w-1/4">
          <div class="text-lg text-gray-500 font-semibold">Articles</div>
          <a
            v-for="(data, index) in footerCol3"
            :key="index"
            class="my-3 block text-sm opacity-50"
            :href="data.url"
            >{{ data.title }}</a
          >
        </div>
        <div class="p-5 md:w-1/4">
          <div class="text-lg text-gray-500 font-semibold">Contact Us</div>
          <a class="my-3 block text-sm opacity-50" href="/#"
            >Maven Facility Management Pvt. Ltd. <br /><br />
            Plot No 84 & 85, VK Towers, 2nd Floor, Kavuri Hills Ext., Near IDFC
            Bank, Guttala Begumpet, Madhapur, Hyderabad 500081 Ph : +91
            9100114610</a
          ><a class="my-3 block" href="/#">contact@company.com</a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 px-4 py-5 bg-black text-white">
    <div class="grid grid-cols-3 text-xs md:text-sm gap-4 max-w-6xl m-auto">
      <h4 class="text-left">©2021 Maven Facility Management Pvt. Ltd.</h4>
      <!-- <h4 class="text-center">Disclaimer</h4> -->
      <div class="text-center"><router-link to="/tnc"
        >Disclaimer</router-link></div>
      <h4 class="text-right">
        Website by- <span class="text-bold">SocialCulture</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerCol1: [
        "Profile",
        "Our Edge",
        "Vision & Mission",
        "Values",
        "Leadership Team",
        "Accreditations",
      ],
      footerCol2: [
        "Technical Solutions",
        "Soft Service Solutions",
        "Pest Management Solutions",
        "Security Solutions",
        "Specialised and Additional Service Solutions",
      ],
      footerCol3: [
        { 
          title: "Home",
          url: '/'
        },
        {
          title: "Services",
          url: '/services'
        },
        {
          title: "FAQ`s",
          url: '/faq'
        },
        {
          title: "Terms and Conditions",
          url: '/tnc'
        },
        {
          title: "About Us",
          url: '/about'
        },
        {
          title: "Contact Us",
          url: '/contact-us'
        }
        ],
    };
  },
};
</script>

<style>
</style>
