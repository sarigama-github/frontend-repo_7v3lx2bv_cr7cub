<template>
  <div>
    <section class="bg-gradient-to-b from-emerald-50 to-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">Discover unique, handcrafted goods from independent makers</h1>
          <p class="mt-4 text-gray-600 text-lg">A curated marketplace where creativity meets community. Find gifts, decor, jewelry, art, and more.</p>
          <div class="mt-6 flex gap-3">
            <RouterLink to="/search" class="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Shop now</RouterLink>
            <RouterLink to="/sell" class="px-5 py-3 rounded-md border hover:bg-gray-100">Open a shop</RouterLink>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="aspect-[3/4] rounded-2xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div class="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1556228453-efd1e3f43f55?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div class="aspect-[3/4] rounded-2xl bg-[url('https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-bold text-2xl mb-4">Popular categories</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <CategoryCard v-for="c in categories" :key="c.title" :title="c.title" :image="c.image" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-2xl">Trending now</h2>
        <RouterLink to="/search" class="text-emerald-700">View all</RouterLink>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { api } from '../utils/api'
import ProductCard from '../components/ProductCard.vue'
import CategoryCard from '../components/CategoryCard.vue'

const products = ref([])
const categories = [
  { title: 'Jewelry', image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop' },
  { title: 'Home decor', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop' },
  { title: 'Art & prints', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop' },
  { title: 'Clothing', image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=800&auto=format&fit=crop' },
  { title: 'Toys', image: 'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?q=80&w=800&auto=format&fit=crop' },
  { title: 'Bath & beauty', image: 'https://images.unsplash.com/photo-1608243363697-8ad1d8c20b5c?q=80&w=800&auto=format&fit=crop' }
]

onMounted(async () => {
  const res = await api.get('/api/products?limit=8')
  products.value = res.data
})
</script>
