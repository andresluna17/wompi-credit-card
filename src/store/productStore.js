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
      descripcion:
        "Potente laptop con procesador de última generación y pantalla de alta resolución.",
    },
    {
      id: 2,
      nombre: "Smartphone",
      precio: 399.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/301",
      descripcion:
        "Smartphone con cámara de alta calidad, rendimiento rápido y pantalla táctil.",
    },
    {
      id: 3,
      nombre: "Libro",
      precio: 19.99,
      categoria: "Libros",
      imagen: "https://picsum.photos/200/302",
      descripcion:
        "Bestseller del año, una historia emocionante que no podrás dejar de leer.",
    },
    {
      id: 4,
      nombre: "Mochila",
      precio: 49.99,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/200/303",
      descripcion:
        "Mochila resistente y espaciosa para llevar tus pertenencias con comodidad.",
    },
    {
      id: 5,
      nombre: "Cámara",
      precio: 299.99,
      categoria: "Fotografía",
      imagen: "https://picsum.photos/200/304",
      descripcion:
        "Cámara digital de alta resolución con funciones avanzadas para capturar momentos inolvidables.",
    },
    {
      id: 6,
      nombre: "Auriculares",
      precio: 79.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/305",
      descripcion:
        "Auriculares inalámbricos con calidad de sonido premium y diseño ergonómico.",
    },
    {
      id: 7,
      nombre: "Zapatillas deportivas",
      precio: 89.99,
      categoria: "Ropa y Calzado",
      imagen: "https://picsum.photos/200/306",
      descripcion:
        "Zapatillas deportivas modernas y cómodas para tus entrenamientos.",
    },
    {
      id: 8,
      nombre: "Reloj inteligente",
      precio: 129.99,
      categoria: "Electrónicos",
      imagen: "https://picsum.photos/200/307",
      descripcion:
        "Reloj inteligente con seguimiento de actividad, notificaciones y pantalla táctil.",
    },
    {
      id: 9,
      nombre: "Botella de agua",
      precio: 9.99,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/200/308",
      descripcion:
        "Botella de agua reutilizable con diseño elegante y capacidad para mantener tus bebidas frías.",
    },
    {
      id: 10,
      nombre: "Juego de mesa",
      precio: 29.99,
      categoria: "Juguetes",
      imagen: "https://picsum.photos/200/309",
      descripcion: "Juego de mesa divertido y educativo para toda la familia.",
    },
  ]);

  const getProduct = (id) =>
    products.value.find((product) => (product.id = id));
  return { products, getProduct };
});
