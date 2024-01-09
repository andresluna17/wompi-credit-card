import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", () => {
  const products = ref([
    {
      id: 1,
      nombre: "Laptop",
      precio: 999.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      nombre: "Smartphone",
      precio: 399.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/301",
    },
    {
      id: 3,
      nombre: "Libro",
      precio: 19.99,
      categoria: "Libros",
      imagen: "https://picsum.photos/200/302",
    },
    {
      id: 4,
      nombre: "Mochila",
      precio: 49.99,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/200/303",
    },
    {
      id: 5,
      nombre: "Cámara",
      precio: 299.99,
      categoria: "Fotografía",
      imagen: "https://picsum.photos/200/304",
    },
    {
      id: 6,
      nombre: "Auriculares",
      precio: 79.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/305",
    },
    {
      id: 7,
      nombre: "Zapatillas deportivas",
      precio: 89.99,
      categoria: "Ropa y Calzado",
      imagen: "https://picsum.photos/200/306",
    },
    {
      id: 8,
      nombre: "Reloj inteligente",
      precio: 129.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/307",
    },
    {
      id: 9,
      nombre: "Botella de agua",
      precio: 9.99,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/200/308",
    },
    {
      id: 10,
      nombre: "Juego de mesa",
      precio: 29.99,
      categoria: "Juguetes",
      imagen: "https://picsum.photos/200/309",
    },
  ]);

  const getProduct = (id) =>
    products.value.find((product) => (product.id = id));
  return { products, getProduct };
});
