<template>
  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-4">
   <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>

import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const route = useRoute()
const meals = computed(()=> store.state.searchByIngredients)

onMounted(()=>{

    store.dispatch('searchedMealsByIngredients', route.params.ingredient)
})

</script>