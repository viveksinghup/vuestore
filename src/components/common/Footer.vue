<template>
  <div class="bg-gray-100 px-27 py-10 md:py-20 border-t border-gray10 border-opacity-50">
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
            :href="data.url"
            >{{ data.title }}</a
          >
        </div>
        <div class="p-5 md:w-1/4">
          <div class="text-lg text-gray-500 font-semibold">Services</div>
          <a
            v-for="(data, index) in footerCol2"
            :key="index"
            class="my-3 block text-sm opacity-50"
            :href="data.url"
            >{{ data.title }}</a
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
        {
          title: "Your Facility Expert",
          url: '/about/#facility'
        },
        {
          title: "Our Edge",
          url: '/about/#edge'
        },
        {
          title: "Mission",
          url: '/about/#mission'
        },
        {
          title: "Vision",
          url: '/about/#vision'
        },
        {
          title: "Our Values",
          url: '/about/#value'
        },
        {
          title: "Our Leadership Team",
          url: '/about/#leadership'
        },
        {
          title: "Our Accreditations",
          url: '/about/#accreditations'
        }
      ],
      footerCol2: [
        {
          title: "Service Offerings",
          url: '/services'
        },
        {
          title: "Technical Solutions",
          url: '/services'
        },
        {
          title: "Soft Service Solutions",
          url: '/services'
        },
        {
          title: "Pest Management Solutions",
          url: '/services'
        },
        {
          title: "Security Solutions",
          url: '/services'
        },
        {
          title: "Specialised Services Solutions",
          url: '/services'
        },
        {
          title: "Our Clients Say",
          url: '/services'
        }
      ],
      footerCol3: [
        {
          title: "FAQ`s",
          url: '/faq'
        },
        {
          title: "Terms and Conditions",
          url: '/tnc'
        }
        ],
    };
  },
};
</script>

<style>
</style>
