<template>
  <section class="bg-gray10 bg-opacity-50">
    <div class="container mx-auto px-4">
      <div
        class="
          flex flex-col-reverse
          md:flex-row
          pt-32
          pb-16
          md:pb-16
          px-6
          md:px-0
        "
      >
        <div
          class="flex items-center text-center lg:text-left lg:w-2/5"
        >
          <div>
            <h2 class="text-4xl font-semibold md:text-7xl">
              We Will Take Care Of Your Facility
            </h2>
            <div class="h-2 md:w-16 bg-brandBlue mt-5 mb-4"></div>
            <p>We operate PAN India.</p>
          </div>
        </div>
        <div class="lg:w-3/5">
          <div class="h-full md:mb-0 mb-10">
            <img
              src="@/assets/images/backgorund/contact-hero.png"
              class="max-w-full assets"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-darkBlue text-white">
    <div class="pt-10 pb-20 relative overflow-hidden">
      <div class="container bg-darkBlue text-white mx-auto px-6 md:px-20">
        <div class="flex md:flex-row items-center flex-col">
          <div class="md:w-1/2 md:pr-24">
            <div
              class="
                text-2xl text-center
                md:text-left md:text-5xl md:pr-32
                form-heading
                mb-10
                md:mb-0
              "
            >
              Contact Us
            </div>
            <div
              class="h-0.5 w-96 hidden text-white md:flex bg-white mt-5 mb-4"
            ></div>
            <p class="my-10">
              We take pride in providing our clients with the best solutions and
              customer experience. Our support desk is competently trained to
              understand and resolve your queries within 48-72 working hours.
            </p>
            <p class="my-10 text-xl">
              To date, our team has successfully accomplished multiple projects
              in the FM industry with expertise in the same vertical.
            </p>
            <h2 class="text-xl font-semibold">Head Office</h2>
            <div class="h-2 md:w-16 text-center bg-yellow mt-4 mb-4"></div>
            <p>
              Plot No : 84 & 85, 2nd Floor, VK Towers, Behind IDFC First Bank,
              Kavuri Hills Extn, Madhapur, Hyderabad 500081 <br /><br />
              Phone Number: +91 9100114610
            </p>
            <br />
            <p>Email:</p>
            <br />
            <p>Follow Us:</p>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <EnquiryForm></EnquiryForm>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="overflow-hidden h-52 md:h-96">
    <img
      src="@/assets/images/backgorund/pexels-scott.png"
      class="w-full object-cover h-full assets"
    />
  </section>
</template>
<script>
import EnquiryForm from "../common/EnquiryForm";
export default {
  name: "Contact Us",
  components: {
    EnquiryForm,
  },
};
</script>
