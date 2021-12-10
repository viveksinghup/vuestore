<template>
  <div class="bg-opacity-50 bg-gray10">
    <div class="container mx-auto px-4">
      <div class="flex pt-48 pb-28">
        <div class="flex items-center text-center lg:text-left lg:w-1/2 pr-20">
          <div>
            <h2 class="text-4xl font-semibold md:text-7xl">
              Your Facility Experts
            </h2>
            <div class="h-2 w-16 bg-darkBlue mt-5 mb-4"></div>
            <div class="mt-2 text-sm md:text-lg">
              We are a full-fledged facility management company based in India.
              Our offerings include comprehensive facility management solutions
              to meet the growing demands for a better and healthier working
              environment.
            </div>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                class="
                  px-7
                  py-2
                  leading-8
                  font-medium
                  rounded
                  border-2 border-darkBlue
                  text-darkBlue
                  hover:bg-darkBlue hover:text-white
                  transition
                  flex
                  items-center
                "
                href="#"
                >Know More</a
              >
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 pl-32">
          <div class="w-80 h-full bg-darkBlue"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-20 relative overflow-hidden">
    <div class="container mx-auto md:px-20">
      <div class="flex md:flex-row items-center flex-col">
        <div class="md:w-1/2">
          <div class="text-5xl md:pr-32 form-heading">
            Get a free consultation from top industry professionals and manage
            your facility with ease and perfection.
          </div>
          <div class="h-2 w-16 bg-darkBlue mt-5 mb-4"></div>
        </div>
        <div class="md:w-1/2">
          <EnquiryForm></EnquiryForm>
        </div>
      </div>
    </div>
    <div
      class="
        max-w-md
        absolute
        top-0 right-0
        sideimg sm:rounded-l-3xl
        bg-brandBlue
        p-10 hidden md:block
        h-full
        text-white
      "
    ></div>
  </div>
  <div
    class="
      container
      mx-auto
      px-4
      border-t border-gray10 border-opacity-50
      py-10
      my-10
    "
  >
    <div class="flex flex-col items-center">
      <div class="text-4xl font-medium">Our Clients</div>
      <div class="h-1 w-16 bg-darkBlue mt-5 mb-4"></div>
    </div>
    <div class="flex justify-center">
      <img src="@/assets/images/clients.png" />
    </div>
  </div>
  <section>
    <img src="@/assets/images/home-coverimg.png" class="w-full h-auto" />
  </section>
</template>

<script>
import EnquiryForm from "../common/EnquiryForm";
export default {
  name: "Home",
  components: {
    EnquiryForm,
  },
};
</script>

<style lang="postcss" scoped>
.form-heading {
  line-height: 60px;
}
</style>