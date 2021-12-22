<template>
  <div
    class="
      mx-auto
      max-w-md
      px-10
      py-12
      bg-white
      text-black
      border-0
      shadow-lg
      sm:rounded-3xl
    "
  >
    <h1 class="text-2xl font-medium mb-8">Get In Touch</h1>
    <form id="form" novalidate>
      <div class="relative z-0 w-full mb-8">
        <input
          type="text"
          name="name"
          v-model="data.name"
          placeholder=" "
          required
          class="
            pt-3
            pb-2
            block
            w-full
            px-0
            mt-0
            bg-transparent
            border-0 border-b
            appearance-none
            focus:outline-none focus:ring-0 focus:border-black
            border-gray20
          "
        />
        <label
          for="name"
          class="absolute duration-300 top-3 -z-1 font-light origin-0 text-gray50"
          >Name</label
        >
        <span class="text-sm text-red-600 font-light hidden" id="error"
          >Name is required</span
        >
      </div>

      <div class="relative z-0 w-full mb-8">
        <input
          type="email"
          name="email"
          v-model="data.email"
          placeholder=" "
          class="
            pt-3
            pb-2
            block
            w-full
            px-0
            mt-0
            bg-transparent
            border-0 border-b
            appearance-none
            focus:outline-none focus:ring-0 focus:border-black
            border-gray20
          "
        />
        <label
          for="email"
          class="absolute duration-300 top-3 -z-1 font-light origin-0 text-gray50"
          >Enter Email Address*</label
        >
        <span class="text-sm text-red-600 font-light hidden" id="error"
          >Email address is required</span
        >
      </div>
      <div class="relative z-0 w-full mb-8">
        <input
          type="number"
          name="phone"
          v-model="data.phone"
          placeholder=" "
          class="
            pt-3
            pb-2
            block
            w-full
            px-0
            mt-0
            bg-transparent
            border-0 border-b
            appearance-none
            focus:outline-none focus:ring-0 focus:border-black
            border-gray20
          "
        />
        <label
          for="email"
          class="absolute duration-300 font-light top-3 -z-1 origin-0 text-gray50"
          >Phone Number*</label
        >
        <span class="text-sm text-red-600 font-light hidden" id="error"
          >Phone is required</span
        >
      </div>
      <div class="relative z-0 w-full mb-8">
        <input
          type="email"
          name="email"
          placeholder=" "
          v-model="data.area"
          class="
            pt-3
            pb-2
            block
            w-full
            px-0
            mt-0
            bg-transparent
            border-0 border-b
            appearance-none
            focus:outline-none focus:ring-0 focus:border-black
            border-gray20
          "
        />
        <label
          for="email"
          class="absolute duration-300 top-3 font-light -z-1 origin-0 text-gray50"
          >Area of Interest</label
        >
        <span class="text-sm text-red-600 font-light hidden" id="error"
          >Interest is required</span
        >
      </div>
      <div class="relative z-0 w-full mb-8">
        <textarea
          type="email"
          v-model="data.message"
          name="email"
          placeholder=" "
          class="
            pt-3
            pb-2
            block resize-none
            w-full
            px-0
            mt-0
            bg-transparent
            border-0 border-b
            appearance-none
            focus:outline-none focus:ring-0 focus:border-black
            border-gray20
          "
        />
        <label
          for="email"
          class="absolute duration-300 top-3 font-light -z-1 origin-0 text-gray50"
          >Message</label
        >
        <span class="text-sm text-red-600 font-light hidden" id="error"
          >Message</span
        >
      </div>

      <fieldset class="relative z-0 w-full p-px mt-10">
        <div class="block pt-3 text-xs pb-2 space-x-4 text-gray50">
          <label class="text-base">
            <input
              type="checkbox"
              name="radio"
              value="1"
              v-model="data.agree"
              class="
                mr-2
                border-2 border-gray-300
                focus:border-gray-300 focus:ring-black
              "
            />
          </label>
            I agree to receive updates on the latest trends, best practices and services offered by Maven.
        </div>
      </fieldset>

      <button
        id="button"
        type="button"
        @click="submitForm()"
        class="
          w-full
          px-6
          py-4
          mt-5
          text-lg text-white
          transition-all
          duration-150
          ease-linear
          shadow-md
          outline-none bg-brandBlue hover:bg-darkBlue
          hover:shadow-lg
          focus:outline-none
        ">
        Submit
      </button>
      <p v-if="alert !== ''" class="text-green-500 mt-5">
        {{alert}}
      </p>
      <p v-if="error">
        <b>Please correct the following error(s):</b>
        <ul>
          <li>{{ error }}</li>
        </ul>
      </p>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      data:{},
      alert:'',
      error:'',
    };
  },
  methods: {
    submitForm(){
      console.log(this.data)
      this.error = this.validateFormData(this.data);
      if(this.error == ''){
          axios
          .post('http://vikash.programsmagic.com/api/email', this.data)
          .then(response => {
            console.log(response)
            this.$toast('Sucessfully Submmited',{ type:'success'});
          })
          .catch(error => {
            console.log(error)
            this.$toast(error,{type: 'error'});
          })
      }else{
       this.$toast(this.error,{ type:'error'});
      }
       this.alert =''
       this.error =''
    },
    setData(){
      this.data = {
        name: '',
        email: '',
        phone: '',
        area: '',
        message: '',
        agree: false
      }
    },
    validateFormData(data){
      console.log(data)
      for (var key in data) {
         if(data[key] === ''){
             return `Please fill ${key} Field`;
         }
      }
      return '';
    }
  },
  created(){
    this.setData()
  }
};
</script>
<style lang="postcss" scoped>
.-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }

  input:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    left: 0px;
  }
</style>
