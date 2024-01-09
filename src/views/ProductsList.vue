<script setup>
import ProductCard from "../components/ProductCard.vue"
import { useProductStore } from "../store/productStore";
const store = useProductStore()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in store.products" :key="product.nombre">
      <ProductCard :product="product" />
    </div>
  </div>
</template>