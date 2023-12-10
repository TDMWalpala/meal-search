<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
  </div>
  <!-- <pre>{{ meals }}</pre> -->
  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-4">
   <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(()=> store.state.searchByLetter)
const route = useRoute()

watch(route,()=>{
  store.dispatch('searchedMealsByLetter', route.params.letter)
})

onMounted(()=>{
    store.dispatch('searchedMealsByLetter', route.params.letter)
})
</script>