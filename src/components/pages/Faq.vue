<template>
  <div class="container mx-auto pt-40 md:px-40">
    <FaqItem
      v-for="(faq, i) in faqs"
      :faq="faq"
      :index="i"
      :key="i"
      :open="faq.open"
      @toggleOpen="toggleOpen"
    />
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
          question: "Who is the best Superhero?",
          answer: "I'm not sure but we love him 3000",
          open: false,
        },
        {
          question: "What is Goku's form called with White Hair?",
          answer: "Mastered Ultra Instinct",
          open: false,
        },
        {
          question: "Have you liked & subscried yet?",
          answer: "YES",
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
.icon{
    transition: 0.45s;
}
.faq.open .icon {
    transform: rotate(180deg);
}
</style>