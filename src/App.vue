
<template>
  <di>
    <header>
      <nav class="bg-gray-800 p-4 text-white flex gap-10">
        <router-link to="/" class="block sm:inline-block">Inicio</router-link>
        <router-link to="/" class="block sm:inline-block">Otra Página</router-link>
      </nav>
    </header>

    <main>
      <div class="container mx-auto mt-8">
        <router-view class="view main-content"></router-view>
      </div>
    </main>
  </di>
</template>