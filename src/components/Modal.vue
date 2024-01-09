<template>
    <div>
        <slot></slot>
        <transition name="fade">
            <div v-if="isModalVisible">
                <div
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-black bg-opacity-70">
                    <div class="relative w-auto my-6 mx-auto max-w-6xl rounded-xl shadow-lg bg-white">
                        <component :is="modalContent" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup>
defineProps({
    isModalVisible: Boolean,
    modalContent: String
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
  