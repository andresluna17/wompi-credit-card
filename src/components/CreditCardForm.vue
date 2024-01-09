<template>
    <div class="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <div class="px-6 py-4 bg-gray-900 text-white">
            <h1 class="text-lg font-bold">Tarjeta de Credito</h1>
        </div>
        <div class="px-6 py-4">

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="card-number">
                    Numero de Tarjeta
                </label>
                <div class="flex flex-row">
                    <input
                        class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number" type="text" placeholder="**** **** **** ****" v-model="cardNumber" max="19" min="10">
                    <img :src="`/src/assets/${cardImage}`" :alt="`TC-${cardImage}`" v-if="cardImage != ''" width="150px" height="20px">
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="expiration-date">
                    Fecha de Expiracion
                </label>
                <input
                    class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expiration-date" type="text" placeholder="MM/YY">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="cvv">
                    CVV
                </label>
                <input
                    class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cvv" type="text" placeholder="***">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="cvv">
                    Nombre en la tarjeta
                </label>
                <input
                    class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Full Name">
            </div>

            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Pagar ahora
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
const cardNumber = ref('')
const cardDateExpiration = ref('')
const cardCVV = ref('')
const cardFullName = ref('')

const cardImage = computed(() => {
    console.log(cardNumber.value);
    const num = cardNumber.value.replace(/\s/g, '');

    if (/^\d+$/.test(num) && (num.length >= 13 && num.length <= 19)) {
        if (/^4/.test(num)) {
            return 'visa.png';
        } else if (/^5[1-5]/.test(num)) {
            return 'mastercard.png';
        } else {
            return '';
        }
    } else {
        return '';
    }
})
</script>