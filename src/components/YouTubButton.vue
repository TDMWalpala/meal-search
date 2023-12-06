<template>
     <a :href="href" target="_blank" class="px-3 py-2 bg-red-600 border-2 border-red-600 rounded hover:bg-red-600 hover:text-white"> <slot></slot></a>
</template>

<script setup>
const props = defineProps({
    href:String
})
</script>