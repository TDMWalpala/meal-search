<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="mb-5 text-5xl font-bold">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal"  class="max-w-[100%]"/>
    <div class="grid grid-cols-1 mt-2 sm:grid-cols-3 w-[600px] mx-auto">
      <div
        class="flex justify-center p-2"
      >
        <strong class="font-bold">Category</strong>{{ meal.strCategory }}
      </div>
      <div
        class="flex justify-center p-2 "
      >
        <strong class="font-bold"> Area</strong>{{ meal.strCategory }}
      </div>
      <div
        class="flex justify-center p-2"
      >
        <strong class="font-bold">Tags</strong> {{ meal.strTags }}
      </div>
    </div>
    <div class="my-3">{{ meal.strInstructions }}</div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="mb-3 text-2xl font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind+1}`]">
               {{ ind+1 }} {{ meal[`strIngredient${ind+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="mb-3 text-2xl font-semibold">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind+1}`]">
               {{ ind+1 }} {{ meal[`strMeasure${ind+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="my-4">
        <YouTubButton :href="meal.strYoutube">Go to Youtube</YouTubButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import YouTubButton from "../components/YouTubButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // debugger
    meal.value = data.meals[0] || {};
  });
});
</script>
