<template>
  <div class="p-6">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="w-full border-2 border-gray-200 rounded"
      placeholder="search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-4">
   <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { ref } from "vue";
import { useRoute } from "vue-router";
import YouTubButton from "../components/YouTubButton.vue";
import MealItem from "../components/MealItem.vue";

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(()=>{
 keyword.value = route.params.name
 if(keyword.value){
  searchMeals()
 }
})

</script>
