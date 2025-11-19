<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Checkout</h1>
    <div class="bg-white rounded-xl border p-6">
      <p class="text-gray-600">This demo uses a simplified checkout. Click the button to place an order with your current cart.</p>
      <button @click="placeOrder" class="mt-4 px-5 py-3 rounded-md bg-emerald-600 text-white">Place order</button>
      <div v-if="result" class="mt-6 p-4 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
        Order placed! Total: ${{ result.total.toFixed(2) }} — Status: {{ result.status }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../utils/api'
const result = ref(null)
async function placeOrder() {
  const res = await api.post('/api/checkout', { user_id: 'demo-user' })
  result.value = res.data
}
</script>
