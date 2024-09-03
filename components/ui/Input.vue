<template>
    <div class="flex flex-col">
        <span class="mb-2 text-sm text-gray" v-if="title">{{ title }}</span>
        <input
            :placeholder="placeholder"
            :required="required"
            type="text"
            class="h-[50px] rounded border border-gray-6 pl-5 text-sm font-normal text-gray outline-none placeholder:text-gray-2 focus:border-blue"
            v-model="model"
        />
        <span class="mt-1 text-[12px] text-gray-2" v-if="desc">{{ desc }}</span>
    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    desc: String,
    placeholder: String,
    required: Boolean,
});
const model = defineModel();
</script>
