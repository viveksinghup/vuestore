<template>
  <div
    class="py-6 bg-gray px-8 mb-8"
    :class="open ? 'faq open' : 'faq'"
    @click="$emit('toggleOpen', index)"
  >
    <div class="flex justify-between question">
      <div
        class="text-darkBlue-600 font-medium font-sans flex-1 text-xl pr-8"
      >
        {{ faq.question }}
      </div>
      <div class="w-6 h-6 flex-shrink-0 icon">
        <img src="@/assets/images/down-arrow.png" />
      </div>
    </div>
    <div class="answer">
      <div class="border-t border-gray10 mt-2 pt-6"></div>
      <div>{{ faq.answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",
  props: ["faq", "index", "open"],
};
</script>