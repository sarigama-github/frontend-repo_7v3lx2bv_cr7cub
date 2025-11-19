<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <RouterLink to="/" class="font-black text-2xl tracking-tight">VibeMarket</RouterLink>
        <div class="flex-1" />
        <div class="hidden lg:flex items-center gap-2 w-full max-w-xl">
          <input v-model="query" @keyup.enter="search" type="text" placeholder="Search for handmade items, vintage gifts…" class="flex-1 px-4 py-2 rounded-full border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button @click="search" class="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Search</button>
        </div>
        <RouterLink to="/sell" class="hidden sm:inline-flex px-3 py-2 rounded-md hover:bg-gray-100">Sell on VibeMarket</RouterLink>
        <RouterLink to="/favorites" class="p-2 rounded-md hover:bg-gray-100" title="Favorites">
          <span class="material-icons">favorite</span>
        </RouterLink>
        <RouterLink to="/cart" class="p-2 rounded-md hover:bg-gray-100" title="Cart">
          <span class="material-icons">shopping_cart</span>
        </RouterLink>
        <RouterLink to="/account" class="ml-2 px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Account</RouterLink>
      </div>
      <div v-if="mobileOpen" class="lg:hidden border-t">
        <div class="p-4 flex items-center gap-2">
          <input v-model="query" @keyup.enter="search" type="text" placeholder="Search…" class="flex-1 px-4 py-2 rounded-full border bg-gray-50" />
          <button @click="search" class="px-4 py-2 rounded-full bg-emerald-600 text-white">Go</button>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="mt-16 border-t bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div class="font-semibold mb-2">Shop</div>
          <ul class="space-y-1 text-gray-600">
            <li><RouterLink to="/categories">Categories</RouterLink></li>
            <li><RouterLink to="/gifts">Gift ideas</RouterLink></li>
            <li><RouterLink to="/sellers">Top sellers</RouterLink></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">Sell</div>
          <ul class="space-y-1 text-gray-600">
            <li><RouterLink to="/sell">Open a shop</RouterLink></li>
            <li><RouterLink to="/dashboard">Seller dashboard</RouterLink></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">About</div>
          <ul class="space-y-1 text-gray-600">
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/help">Help Center</RouterLink></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">Stay in the loop</div>
          <p class="text-gray-600">Join our newsletter for new finds from independent makers.</p>
          <div class="mt-3 flex gap-2">
            <input placeholder="Email address" class="flex-1 px-3 py-2 rounded-md border bg-gray-50" />
            <button class="px-4 py-2 rounded-md bg-gray-900 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="text-xs text-gray-500 py-6 text-center">© {{ new Date().getFullYear() }} VibeMarket</div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const mobileOpen = ref(false)
const query = ref('')
const router = useRouter()
const search = () => {
  if (!query.value) return
  router.push({ name: 'search', query: { q: query.value } })
  mobileOpen.value = false
}
</script>
