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
     <div class="my-20 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex pt-48 pb-28">
        <div class="lg:w-1/2 pl-32">
          <div class="w-80 h-full bg-darkBlue"></div>
        </div>
        <div class="flex items-center text-center lg:text-left lg:w-1/2 pr-20">
          <div>
            <div class="text-3xl">
              Customer-centric solutions by Maven are powered by our experience + expertise approach, a unique combination of best industry practices with specialized solutions. Our solution driven methodology delivers increased productivity and provides the right ambiance for employees, visitors, and potential clients.
            </div>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                class="
                  px-9
                  py-2
                  leading-8
                  font-medium
                  bg-darkBlue 
                  text-white
                  transition
                  flex
                  items-center
                "
                href="#"
                >
                Explore More
                <span class="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section>
     <div class="my-20 bg-black relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex pt-48 pb-48 items-center text-white">
          <div class="lg:w-1/2 pl-32">
            <div class="flex items-center lg:text-left  pr-20">
              <div>
                <h2 class="text-4xl font-semi md:text-5xl">
                  Why Choose Maven For Your Facility Needs?
                </h2>
                <div class="h-2 w-16 bg-darkBlue mt-5 mb-4"></div>
              </div>
          </div>
          </div>
          <div class="flex items-center text-center lg:text-left lg:w-1/2 pr-32">
            <div>
              <ul class="list list-outside space-y-10">
                  <li class="flex items-center" v-for="(data,index) in textList" :key="index">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22.698" height="15.063" viewBox="0 0 22.698 15.063">
                          <path id="Path_36" data-name="Path 36" d="M-137.889,6350.618l-2.566-7.657h-5.228l2.483,7.407h-4.7l-2.483-7.407h-5.228l2.482,7.406h-4.888l-2.566,7.657h5.228l2.482-7.406h4.711l-2.483,7.405h5.228l2.483-7.405Z" transform="translate(160.586 -6342.961)" fill="#ffcd28"/>
                      </svg>
                      <p class="ml-4">{{data}}</p>
                  </li>        
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  </section>
  <section>
    <img src="@/assets/images/home-coverimg.png" class="w-full h-auto" />
  </section>
</template>

<script>
import EnquiryForm from "../common/EnquiryForm";
export default {
  name: "Home",
  data(){
     return {
       textList:[
         'We are always up-to-date with the current trends and best practices in the Facility Management space.',
         'We strictly adhere to statutory compliance norms without compromising quality in our services.',
         'Our employees/staff go through rigorous training before they are assigned to any project.',
         'We believe in a better tomorrow therefore, we use sustainable technology, tools & equipment in the delivery of soft services.',
         'We offer customized and innovative solutions to reach beyond your expectations.'
       ]
     }
  },
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
