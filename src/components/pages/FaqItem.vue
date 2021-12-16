<template>
  <div
    class="py-6 border-b border-gray10"
    :class="open ? 'faq open' : 'faq'"
    @click="$emit('toggleOpen', index)"
  >
    <div class="flex justify-between question">
      <div
        class="text-darkBlue-600 font-bold font-sans flex-1 text-xl pr-8"
      >
        {{ faq.question }}
      </div>
      <div class="w-6 h-6 flex-shrink-0 icon">
        <img src="@/assets/images/down-arrow.png" />
      </div>
    </div>
    <div class="answer">{{ faq.answer }}</div>
  </div>
</template>

<script>
export default {
  name: "faq",
  props: ["faq", "index", "open"],
};
</script>