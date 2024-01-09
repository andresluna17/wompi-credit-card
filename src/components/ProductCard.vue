<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img :src="product.imagen" alt="Imagen de {{ product.nombre }}" class="w-full" />
    <div class="px-6 py-4">
      <div class="text-black font-bold text-xl mb-2">{{ product.nombre }}</div>
      <p class="text-gray-700 text-base">
        Precio: ${{ product.precio.toFixed(2) }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{{
        product.categoria }}</span>

    </div>
    <div class="px-6 py-4">
      <router-link :to="{ name: 'detalle', params: { id: product.id } }">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Ver Detalle
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: String,
});
</script>