
<template>
  <div class="container mx-auto">
    <header>
      <nav class="bg-gray-800 p-4 text-white flex gap-10">
        <router-link to="/" class="block sm:inline-block">Inicio</router-link>
      </nav>
    </header>
    <main>
      <div class="mt-8">
        <router-view class="px-5"></router-view>
      </div>
    </main>
  </div>
</template>