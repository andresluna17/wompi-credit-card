<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img :src="producto.imagen" alt="Imagen de {{ producto.nombre }}" class="w-full" />
    <div class="px-6 py-4">
      <div class="text-black font-bold text-xl mb-2">{{ producto.nombre }}</div>
      <p class="text-gray-700 text-base">
        Precio: ${{ producto.precio.toFixed(2) }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{{
        producto.categoria }}</span>
      <router-link :to="{ name: 'detalle', params: { id: producto.id } }">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Detalle
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  producto: String,
});
</script>