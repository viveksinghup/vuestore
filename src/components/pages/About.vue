<template>
    <div class="bg-black">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row pt-32 md:pt-48 pb-16 md:pb-28 px-20"
      >
        <div
          class="flex items-center text-center lg:text-left lg:w-1/2 md:pr-20"
        >
          <div>
            <h2 class="text-4xl text-white font-semibold md:text-7xl">
              Customised Solutions For Clients
            </h2>
            <div class="h-2 md:w-16 bg-darkBlue mt-5 mb-4"></div>
          </div>
        </div>
        <div class="lg:w-1/2 pl-32">
          <div class="w-80 h-full bg-darkBlue"></div>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-darkBlue">
    <div class="container bg-darkBlue text-white mx-auto md:px-16 py-10">
      <div class="flex flex-col text-center md:text-left md:flex-row">
        <div class="flex flex-col items-left md:w-1/2">
          <div class="text-2xl md:text-5xl font-medium">Maven: Your Facility Expert</div>
          <div class="h-0.5 hidden md:flex w-96 bg-white mt-6 mb-4"></div>
          <p class="mt-7">
          We are facility management experts based in India. With our experience and expertise, we aim to deliver the finest facility management solutions to create a positive ambience for your employees and visitors.
          </p>
          <p class="mt-2">
            Our Customer-Centric solutions are powered by our experience + expertise approach, a unique combination of best industry practices with specialized solutions. Our solution-driven methodology delivers increased productivity and provides the right atmosphere for employees, visitors, and potential clients.
          </p>
          <p class="mt-2">
            We believe in contributing towards a sustainable environment and creating excellence through our capabilities by delivering tailored management services to optimize and enhance facilities.
          </p>
        </div>
        <div
          class="
            px-20
            md:w-2/3
            flex-shrink-0
            text-lg
            md:text-2xl
            mt-20
            md:mt-20
          "
        >
        <p class="mt-7">
          Our staff and employees are highly skilled professionals with an understanding of a whole range of industries.
        </p>
        </div>
      </div>

      <div class="flex text-center md:text-left md:flex-row mt-20">
        <div class="flex flex-col items-left md:w-1/">
          <div class="text-2xl md:text-5xl font-medium">Our Edge</div>
        </div>
      </div>
      <div>
         <div
        class="
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-4
          border-t border-white mt-6
        "
      >
        <div
          v-for="(data, index) in ourEdge"
          :key="index"
          class="flex flex-col px-20 py-10 "
        >
          <div class="flex-1">
            <div class="flex items-center ">
              <h2 class="mt-4  text-2xl">{{ data.title }}</h2>
            </div>
            <p class="text-gray-500 mt-5">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>

   <section>
    <img src="@/assets/images/businessman.png" class="w-full h-auto" />
  </section>

</template>

<script>
export default {
  name: "About",
  data(){
    return {
      ourEdge:[
        { 
          title: 'Always Equipped',
          description: 'We are always up-to-date with the current trends and best practices in the Facility Management space.'
        },
        {
          title: 'Fully Compliant',
          description: 'We strictly adhere to statutory compliance norms without compromising the quality of our services.'
        },
        { 
          title: 'Trained Workforce',
          description: 'Our employees/staff go through rigorous training before they are assigned to any project.'
        },
        { 
          title: 'Sustainable Approach',
          description: 'We believe in a better tomorrow therefore, we use sustainable technology, tools & equipment in the delivery of soft services.'
        },
        { 
          title: 'Customized Solutions',
          description: 'We offer tailored and innovative solutions to reach beyond your expectations.'
        }
      ]
    }
  }
};
</script>

<style>
</style>