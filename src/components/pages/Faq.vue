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
          question: "What are the types of FM services? ",
          answer: "Facility management can be classified into two parts:</br></br>◾ Hard Facility management (FM) includes services like plumbing, electrical work, air conditioning, light and fixture, fire safety, building maintenance, etc. They are primarily adopted by employers to ensure the health and safety of everyone around while adhering to government regulations.</br></br>◾ Soft Facility management (FM) includes regular cleaning, dusting, waste management, security, catering, vendor management, etc, to ensure the longevity of a workplace and maintain a delightful ambience for employees and visiting clients.</br></br>Below is a brief list of types of facilities that requires special attention to elongate and preserve the life span of the fixed assets.</br></br>◾Commercial and Institutional Sector</br>◾Office Buildings</br>◾Hospitals</br>◾Hotels</br>◾Restaurants</br>◾Educational Facilities</br>◾Industrial and Manufacturing</br></br>A good combination of both types of FM services concerning your industry type is very vital to check the kind of service required to ensure your building is running as smoothly as possible with optimum performance and productivity.",
          open: false,
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
          question: "What kinds of housekeepers are suitable for you? ",
          answer: "Choosing a housekeeping team can be difficult at times as it is hard to figure out which housekeepers might be right for your organisation.</br></br>However, below is a brief list to help you define your housekeeping recruitment goals:</br></br>◾Define the size of your property</br>◾What is the frequency of services your facility needs?</br>◾Is your property Live in or Live-out?</br>◾What tasks and duties outside of specific cleaning are required?</br>◾What is the mobility of your organisation?</br>◾Do you need housekeepers to travel with you or look after your property when you are away?",
          open: false,
        },
        {
          question: "How can Maven help you? ",
          answer: "At Maven, we have highly experienced employees/workers to help you match your requirements and find the right housekeeper for the specific property and the needs of the organisation, family or individual. We are  here to help! Reach out to us to discuss your housekeeping needs with one of our professional consultants.",
          open: false,
        },
        {
          question: "Housekeeping checklist  ",
          answer: "The fundamental prerequisites for credible housekeeping include proper layout and equipment planning, material handling, storage, cleanliness and order.</br>Here is a brief list of tasks included in housekeeping services:</br></br><b>Cleaning</b></b> : Cleaning is a fundamental part of housekeeping services. There are several methods of cleaning which involve eliminating dirt, dust, mud by implementing different methods such as dusting, shaking, sweeping, mopping, washing or polishing. However, it highly depends on the industry type to determine which methods to adopt.</br></b>Every organisation needs sufficient storage space therefore adequate knowledge of maintenance of stored materials is crucial for overcoming storage problems. A housekeeper must have a good knowledge of flammable, combustible, toxic and other hazardous materials. Moreover, the materials should meet all requirements prescribed in the fire codes, regulations of environmental, occupational health and safety agencies required by the government.</br></br><b>Waste Disposal</b> : Sustainability is a key to the success of any organisation and waste management plays a crucial role in the regular collection, grading and sorting of scrap. A good waste management plan contributes to good housekeeping practices and makes it possible to separate materials that can be converted from those going to waste disposal facilities and save lots of unnecessary wastage of resources.</br></br><b>Employee Facilities</b> : Due to inadequate housekeeping practices, companies lose a lot of potential visitors, good employees and potential clients, hence reducing profits and creating an unhealthy ambience for employees at work. Latest housekeeping techniques should be followed to ensure a systematic workflow with a substantial reduction in non-value added activities and improving workplace conditions.</br></br><b>Spill Control</b> : Chemical Spills can be very detrimental to the environment around and therefore a prepared spill response plan is crucial for minimizing the risk of damage from any chemical spill. Organizations must have adequate skills to deal with such emergencies and take the necessary steps to ensure a quick and safe chemical spill response; one must know all the procedures, precautions, and safety conditions while dealing with such situations.",
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