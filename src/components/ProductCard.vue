<template>
  <RouterLink :to="{ name: 'product', params: { id: product.id } }" class="group block bg-white rounded-xl border overflow-hidden hover:shadow transition">
    <div class="aspect-square bg-gray-100 overflow-hidden">
      <img :src="product.images?.[0] || placeholder" class="w-full h-full object-cover group-hover:scale-105 transition" />
    </div>
    <div class="p-3">
      <div class="text-sm text-gray-500">{{ product.category || 'Misc' }}</div>
      <div class="font-medium line-clamp-1">{{ product.title }}</div>
      <div class="mt-1 font-bold">${{ Number(product.price).toFixed(2) }}</div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({ product: { type: Object, required: true } })
const placeholder = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'
</script>
