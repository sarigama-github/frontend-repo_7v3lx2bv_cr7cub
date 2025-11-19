<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div v-if="!shop" class="text-center text-gray-500">Loading…</div>
    <div v-else>
      <div class="bg-white rounded-xl border p-6 flex items-center gap-4">
        <img :src="shop.logo || placeholder" class="w-16 h-16 rounded-full object-cover" />
        <div>
          <h1 class="text-2xl font-bold">{{ shop.name }}</h1>
          <p class="text-gray-600">{{ shop.description }}</p>
        </div>
      </div>

      <h2 class="mt-8 font-bold text-xl mb-4">Items</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../utils/api'
import ProductCard from '../components/ProductCard.vue'
const route = useRoute()
const shop = ref(null)
const products = ref([])
const placeholder = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'

onMounted(async () => {
  const s = await api.get(`/api/shops/${route.params.id}`)
  shop.value = s.data
  const res = await api.get(`/api/products?shop_id=${route.params.id}`)
  products.value = res.data
})
</script>
