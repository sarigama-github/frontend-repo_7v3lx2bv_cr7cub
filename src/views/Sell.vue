<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Open your shop</h1>
    <div class="bg-white rounded-xl border p-6">
      <div class="grid gap-3">
        <input v-model="name" placeholder="Shop name" class="px-3 py-2 rounded-md border" />
        <textarea v-model="description" placeholder="Description" rows="3" class="px-3 py-2 rounded-md border"></textarea>
        <button @click="createShop" class="px-4 py-2 rounded-md bg-emerald-600 text-white">Create shop</button>
      </div>
      <div v-if="created" class="mt-4 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-900">
        Shop created! <RouterLink :to="{name:'shop', params:{id: created}}" class="underline">View shop</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { api } from '../utils/api'

const name = ref('')
const description = ref('')
const created = ref('')

async function createShop() {
  if (!name.value) return
  const res = await api.post('/api/shops', { vendor_id: 'demo-user', name: name.value, description: description.value })
  created.value = res.data.id
}
</script>
