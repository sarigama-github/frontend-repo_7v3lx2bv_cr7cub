<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Your cart</h1>
    <div v-if="!items.length" class="text-gray-500">Your cart is empty.</div>
    <div v-else class="space-y-4">
      <div v-for="it in items" :key="it.product_id" class="bg-white rounded-xl border p-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 bg-gray-100 rounded-md"></div>
          <div>
            <div class="font-medium">{{ it.product?.title || 'Item' }}</div>
            <div class="text-sm text-gray-600">${{ Number(it.product?.price || 0).toFixed(2) }}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <input type="number" min="1" v-model.number="it.qty" @change="update(it)" class="w-20 px-3 py-2 rounded-md border" />
          <button @click="removeItem(it.product_id)" class="px-3 py-2 rounded-md hover:bg-gray-100">Remove</button>
        </div>
      </div>
      <div class="flex items-center justify-end gap-6 pt-6 border-t">
        <div class="text-xl font-bold">Total: ${{ total.toFixed(2) }}</div>
        <RouterLink to="/checkout" class="px-5 py-3 rounded-md bg-emerald-600 text-white">Checkout</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { api } from '../utils/api'

const items = ref([])

onMounted(async () => {
  const res = await api.get('/api/cart/demo-user')
  const cart = res.data
  const detailed = await Promise.all((cart.items || []).map(async (it) => {
    const p = await api.get(`/api/products/${it.product_id}`)
    return { ...it, product: p.data }
  }))
  items.value = detailed
})

function computeTotal() {
  return items.value.reduce((sum, it) => sum + (it.product?.price || 0) * it.qty, 0)
}

const total = computed(() => computeTotal())

async function removeItem(id) {
  await api.post('/api/cart/demo-user/remove', { product_id: id, qty: 1 })
  items.value = items.value.filter(i => i.product_id !== id)
}

async function update(it) {
  // simple re-add to set qty difference
  // In a real app, add update endpoint. Here we recompute by setting qty directly then syncing on checkout
}
</script>
