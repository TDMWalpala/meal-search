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
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white rounded shadow">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover w-full h-60 rounded-t-xl">
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <!-- <P class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deserunt!</P> -->
        <div class="flex justify-between">
          <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 bg-red-600 border-2 border-red-600 rounded hover:bg-red-600 hover:text-white">YouTube</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { ref } from "vue";
import { useRoute } from "vue-router";

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
