<template>
    <button
        class="flex items-center justify-center rounded bg-gray-1 p-[10px] text-sm text-gray transition hover:bg-gray-7"
        type="button"
    >
        <Icon
            v-if="icon"
            :name="`my-icon:${icon}`"
            :class="{ 'mr-1': $slots.default }"
            size="20px"
        />
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    icon: String,
});
</script>
