<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Seller dashboard</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl border p-6">
        <h2 class="font-semibold mb-4">Create product</h2>
        <div class="grid gap-3">
          <input v-model="title" placeholder="Title" class="px-3 py-2 rounded-md border" />
          <textarea v-model="description" placeholder="Description" rows="3" class="px-3 py-2 rounded-md border"></textarea>
          <div class="flex gap-3">
            <input v-model.number="price" placeholder="Price" type="number" min="0" step="0.01" class="px-3 py-2 rounded-md border flex-1" />
            <input v-model="category" placeholder="Category" class="px-3 py-2 rounded-md border flex-1" />
          </div>
          <input v-model="image" placeholder="Image URL" class="px-3 py-2 rounded-md border" />
          <button @click="createProduct" class="px-4 py-2 rounded-md bg-emerald-600 text-white">Add product</button>
          <div v-if="created" class="text-emerald-700">Product created!</div>
        </div>
      </div>
      <div class="bg-white rounded-xl border p-6">
        <h2 class="font-semibold mb-4">Your products</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductCard v-for="p in myProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../utils/api'
import ProductCard from '../components/ProductCard.vue'

const title = ref('')
const description = ref('')
const price = ref(0)
const category = ref('')
const image = ref('')
const created = ref(false)
const myProducts = ref([])

async function createProduct() {
  const payload = {
    shop_id: myShopId.value,
    vendor_id: 'demo-user',
    title: title.value,
    description: description.value,
    price: Number(price.value || 0),
    category: category.value,
    images: image.value ? [image.value] : []
  }
  await api.post('/api/products', payload)
  created.value = true
  await loadMyProducts()
}

const myShopId = ref('')

async function ensureShop() {
  const shops = await api.get('/api/shops?vendor_id=demo-user')
  if (shops.data.length) {
    myShopId.value = shops.data[0].id
    return
  }
  const s = await api.post('/api/shops', { vendor_id: 'demo-user', name: 'Demo Shop' })
  myShopId.value = s.data.id
}

async function loadMyProducts() {
  if (!myShopId.value) return
  const res = await api.get(`/api/products?shop_id=${myShopId.value}`)
  myProducts.value = res.data
}

onMounted(async () => {
  await ensureShop()
  await loadMyProducts()
})
</script>
