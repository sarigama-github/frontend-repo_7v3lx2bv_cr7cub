<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Account</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl border p-6">
        <h2 class="font-semibold mb-3">Profile</h2>
        <div class="space-y-3">
          <input placeholder="Name" class="w-full px-3 py-2 rounded-md border" />
          <input placeholder="Email" class="w-full px-3 py-2 rounded-md border" />
          <textarea placeholder="Bio" rows="3" class="w-full px-3 py-2 rounded-md border"></textarea>
          <button class="px-4 py-2 rounded-md bg-gray-900 text-white">Save</button>
        </div>
      </div>
      <div class="bg-white rounded-xl border p-6">
        <h2 class="font-semibold mb-3">Orders</h2>
        <ul class="text-sm text-gray-600 list-disc pl-5">
          <li>Recent orders will appear here.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
