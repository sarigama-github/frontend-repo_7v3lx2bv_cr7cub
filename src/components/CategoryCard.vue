<template>
  <RouterLink to="/search" class="block rounded-xl overflow-hidden bg-white border group">
    <div class="aspect-video bg-gray-100 overflow-hidden">
      <img :src="image" class="w-full h-full object-cover group-hover:scale-105 transition" />
    </div>
    <div class="p-3 font-medium">{{ title }}</div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({ title: String, image: String })
</script>
