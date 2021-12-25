<template>
  <div class="mt-20 md:mt-20">
    <section class="overflow-hidden h-52 md:h-96">
      <img
        src="@/assets/images/backgorund/businessman-holding-arrow-graph-growth-business-financial-investment-strategy-planning.jpg"
        class="w-full object-cover h-full assets"
      />
    </section>
    <div class="container px-5 md:px-32 mx-auto mt-16">
      <div class="border-gray50 border-t mb-10 w-full"></div>
      <FaqItem
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
    <section class="overflow-hidden h-52 md:h-96 mt-32">
      <img
        src="@/assets/images/backgorund/real-estate-business-building-technology.jpg"
        class="w-full object-cover h-full assets"
      />
    </section>
  </div>
</template>

<script>
import FaqItem from "./FaqItem.vue";

export default {
  name: "app",
  components: {
    FaqItem,
  },
  data() {
    return {
      faqs: [
        {
          question: "What are FM services?",
          answer: "Facility management is the use of technology+skill that ensures the sustainability, maintenance and organization of an area. It can be briefly defined as a tool that promotes the functionality, safety, and sustainability of buildings, grounds, and infrastructure.",
          open: true,
        },
        {
          question: "What is Housekeeping?",
          answer: "Proper management of a workplace or living area can be termed as housekeeping. However, in an occupational setting, housekeeping entails a much more complexity than properly managing an area. From routine cleaning, checkups to assuring ongoing safety practice, orderly conditions in the workplace. Housekeeping operations in the workplace are considered to be an important service for occupational safety and are a necessary workplace protection activity in most jurisdictions. It also includes the maintenance of computer storage systems, waste disposal, spill control, dust and dirt removal, maintaining fixtures, etc. A decent housekeeping strategy ensures the optimisation of time, money and the work areas that are not utilized as warehouses by having workers moving equipment to and from work areas as needed. ",
          open: false,
        },
        {
          question: "Why it is important for organisations to have housekeeping services? ",
          answer: "For every organisation providing a remarkable customer experience is critical to the sustainable growth of any business. A promising customer experience improves loyalty, helps to secure more clients, and facilitates the brand's presence. The workplace plays a crucial role in maintaining a positive experience by setting the right tone and ambience for the visitors as well as employees.",
          open: false,
        },
        {
          question: "What is the role of Training in Housekeeping?",
          answer: "Housekeeping is a skill that needs rigorous training and experience to enrich and manage any place. Therefore, training is a fundamental part of any good housekeeping program. Workers need to have adequate knowledge of handling, maintaining and how to work safely with the products they use. Housekeeping is an ongoing process that needs to be maintained well and regularly.",
          open: false,
        },
        {
          question: "How can Maven help you? ",
          answer: "At Maven, we have highly experienced employees/workers to help you match your requirements and find the right housekeeper for the specific property and the needs of the organisation, family or individual. We are  here to help! Reach out to us to discuss your housekeeping needs with one of our professional consultants.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    },
  },
};
</script>
<style>
.answer {
  transition: padding 0.45s;
  max-height: 0px;
  overflow: hidden;
}
.faq.open .answer {
  padding-top: 12px;
  max-height: 1000px;
  overflow: visible;
}
.icon {
  transition: 0.45s;
}
.faq.open .icon {
  transform: rotate(180deg);
}
</style>