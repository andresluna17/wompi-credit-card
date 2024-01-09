<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <di>
    <header>
      <nav class="bg-gray-800 p-4 text-white">
        <button @click="toggleMobileMenu" class="block sm:hidden">
        </button>
        <div :class="{ 'hidden': !mobileMenuOpen.value, 'sm:flex': mobileMenuOpen.value }" class="sm:flex space-x-4 mt-4">
          <a href="#" class="block sm:inline-block">Inicio</a>
          <a href="#" class="block sm:inline-block">Otra Página</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="container mx-auto mt-8">
        <router-view class="view main-content"></router-view>
      </div>
    </main>
  </di>
</template>