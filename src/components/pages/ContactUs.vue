<template>
    <div>
        <div class="container w-80 mx-auto my-20 px-6 py-6 shadow">
           <h1 class="text-pink-600 font-bold font-sans text-4xl text-center">Contact Us</h1>
        <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
    </div>
    <EnquiryForm></EnquiryForm>
    </div>
</template>
<script>
import EnquiryForm from '../common/EnquiryForm'
export default {
    name:'Contact Us',
    components: { 
        EnquiryForm,
    }
}
</script>