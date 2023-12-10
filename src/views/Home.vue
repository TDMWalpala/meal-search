<template>
  <div class="flex flex-col p-8">
    <div class="items-center justify-center">
      <input
        type="text"
        name=""
        id=""
        class="w-full border-2 border-gray-200 rounded"
        placeholder="search for meals"
      />
    </div>

    <div class="flex justify-center gap-1">
     
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";


const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
