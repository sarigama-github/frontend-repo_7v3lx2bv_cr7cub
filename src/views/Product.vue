<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div v-if="!product" class="text-center text-gray-500">Loading…</div>
    <div v-else class="grid lg:grid-cols-2 gap-8">
      <div class="bg-white rounded-xl border overflow-hidden">
        <img :src="product.images?.[0] || placeholder" class="w-full object-cover" />
      </div>
      <div>
        <div class="text-sm text-gray-500">{{ product.category || 'Misc' }}</div>
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <div class="mt-3 text-2xl font-black">${{ Number(product.price).toFixed(2) }}</div>
        <p class="mt-3 text-gray-600">{{ product.description }}</p>
        <div class="mt-6 flex gap-3">
          <button @click="addToCart()" class="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Add to cart</button>
          <RouterLink :to="{name: 'shop', params: { id: product.shop_id }}" class="px-5 py-3 rounded-md border hover:bg-gray-100">Visit shop</RouterLink>
        </div>
      </div>
    </div>

    <section class="mt-12">
      <h2 class="font-bold text-xl mb-4">Reviews</h2>
      <div class="space-y-4">
        <div v-for="r in reviews" :key="r.id" class="bg-white rounded-xl border p-4">
          <div class="font-medium">{{ r.rating }} ★</div>
          <div class="text-gray-600">{{ r.comment }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { api } from '../utils/api'
const route = useRoute()
const product = ref(null)
const reviews = ref([])
const placeholder = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'

onMounted(async () => {
  const res = await api.get(`/api/products/${route.params.id}`)
  product.value = res.data
  const rv = await api.get(`/api/reviews?product_id=${route.params.id}`)
  reviews.value = rv.data
})

async function addToCart() {
  await api.post(`/api/cart/demo-user/add`, { product_id: route.params.id, qty: 1 })
  alert('Added to cart')
}
</script>
