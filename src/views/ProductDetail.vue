<template>
    <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
            <img :src="product.imagen" alt="Imagen de {{ product.nombre }}" class="w-full h-auto rounded-lg shadow-lg">
        </div>
        <div class="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <h2 class="text-2xl font-bold mb-2">{{ product.nombre }}</h2>
            <p class="text-gray-700 text-lg mb-4">Categoría: {{ product.categoria }}</p>
            <p class="text-gray-700 text-lg mb-4">Precio: ${{ product.precio.toFixed(2) }}</p>
            <p class="text-gray-700 text-base mb-4">{{ product.descripcion }}</p>
            <button @click="realizarPago"
                class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">Pagar con Tarjeta de
                Crédito</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../store/productStore';
const route = useRoute();
const store = useProductStore();

const product = store.getProduct(route.params.id)
</script>