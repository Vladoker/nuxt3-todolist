<template>
    <button
        class="flex items-center justify-center rounded bg-blue px-3 py-[10px] text-sm text-white transition hover:bg-dark-blue"
    >
        <Icon
            v-if="icon"
            :name="`my-icon:${icon}`"
            class="mr-1"
            size="16px"
            :customize="customize"
        />
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    icon: String,
});
const customize = (content, name, prefix, provider) => {
    return content.replace(/fill="[^"]*"/g, `fill="#ffffff"`);
};
</script>
