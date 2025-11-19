<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="flex items-center gap-3 mb-6">
      <input v-model="q" @keyup.enter="load" placeholder="Search products" class="flex-1 px-4 py-2 rounded-md border bg-gray-50" />
      <select v-model="category" class="px-3 py-2 rounded-md border bg-white">
        <option value="">All categories</option>
        <option v-for="c in cats" :key="c" :value="c">{{ c }}</option>
      </select>
      <button @click="load" class="px-4 py-2 rounded-md bg-gray-900 text-white">Search</button>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../utils/api'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const q = ref(route.query.q || '')
const category = ref('')
const cats = ['Jewelry','Home decor','Art & prints','Clothing','Toys','Bath & beauty']
const products = ref([])

watch(() => route.query, () => {
  q.value = route.query.q || ''
  load()
})

async function load() {
  const params = new URLSearchParams()
  if (q.value) params.append('q', q.value)
  if (category.value) params.append('category', category.value)
  params.append('limit', '24')
  const res = await api.get(`/api/products?${params.toString()}`)
  products.value = res.data
}

load()
</script>
