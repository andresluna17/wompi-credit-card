<template>
    <div>
        <slot></slot>
        <transition name="fade">
            <div v-if="isModalVisible">
                <div
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-black bg-opacity-70">
                    <div class="relative w-auto my-6 mx-auto max-w-6xl rounded-xl shadow-lg bg-white">

                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button
                                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                                Save
                            </button>
                            <button @click="$emit('onToggle')"
                                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup>
defineProps({
    isModalVisible: Boolean
})
</script>
<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>
  