<template>
     <div  class="bg-white rounded shadow">
      <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover w-full h-60 rounded-t-xl">
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <!-- <P class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deserunt!</P> -->
        <div class="flex justify-between">
          <YouTubButton :href="meal.strYoutube" >Youtube</YouTubButton>
        </div>
      </div>
    </div>
</template>

<script setup>
import YouTubButton from '../components/YouTubButton.vue'
const {meal} = defineProps({
    meal:{
        required: true,
        type: Object
    }
})
</script>