<script setup>
import ProductCard from '../components/ProductCard.vue'
import { ref } from "vue";

const productos = ref([
  {
    nombre: "Laptop",
    precio: 999.99,
    categoria: "Electrónicos",
    imagen: "https://picsum.photos/200/300",
  },
  {
    nombre: "Smartphone",
    precio: 399.99,
    categoria: "Electrónicos",
    imagen: "https://picsum.photos/200/301",
  },
  {
    nombre: "Libro",
    precio: 19.99,
    categoria: "Libros",
    imagen: "https://picsum.photos/200/302",
  },
  {
    nombre: "Mochila",
    precio: 49.99,
    categoria: "Accesorios",
    imagen: "https://picsum.photos/200/303",
  },
  {
    nombre: "Cámara",
    precio: 299.99,
    categoria: "Fotografía",
    imagen: "https://picsum.photos/200/304",
  },
  {
    nombre: "Auriculares",
    precio: 79.99,
    categoria: "Electrónicos",
    imagen: "https://picsum.photos/200/305",
  },
  {
    nombre: "Zapatillas deportivas",
    precio: 89.99,
    categoria: "Ropa y Calzado",
    imagen: "https://picsum.photos/200/306",
  },
  {
    nombre: "Reloj inteligente",
    precio: 129.99,
    categoria: "Electrónicos",
    imagen: "https://picsum.photos/200/307",
  },
  {
    nombre: "Botella de agua",
    precio: 9.99,
    categoria: "Accesorios",
    imagen: "https://picsum.photos/200/308",
  },
  {
    nombre: "Juego de mesa",
    precio: 29.99,
    categoria: "Juguetes",
    imagen: "https://picsum.photos/200/309",
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="producto in productos" :key="producto.nombre">
      <ProductCard :producto="producto" />
    </div>
  </div>
</template>