<template>
    <div class="p-8">
        <h3 class="mb-4 text-4xl font-bold">Ingredients</h3>
    <router-link :to="{name: 'byIngredient', params:{ingredient:ingredient.strIngredient} }" v-for="ingredient of ingredients" :key="ingredient.id" class="block p-3 mb-3 bg-white rounded shadow">
        <h3 class="p-3 mb-3 text-2xl font-bold ">
            {{ ingredient.strIngredient }}
        </h3>
        <p>{{ ingredient.strDescription }}</p>
    </router-link>
    </div>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import axiosClient from '../axiosClient'

const ingredients = ref([])  

onMounted(()=>{
    axiosClient.get('list.php?i=list')
    .then(({data})=>{
        ingredients.value = data.meals
    })
})

</script>