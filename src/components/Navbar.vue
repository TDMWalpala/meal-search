<template>
    <header class="flex items-center justify-between h-16 bg-white shadow">
      <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-3 py-3 mx-5 rounded hover:bg-purple-500">Home</router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'byName'}" class="h-full px-3 py-3 rounded hover:bg-purple-400">
          Search Meals
        </router-link>
        <router-link  :to="{name:'byLetter'}" class="h-full px-3 py-3 rounded hover:bg-purple-400">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="h-full px-3 py-3 rounded hover:bg-purple-400">
          Meals By ingredients
        </router-link>
      </div>
    </header>
</template>