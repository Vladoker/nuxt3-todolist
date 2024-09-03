<template>
    <label class="mt-5 flex cursor-pointer select-none items-center">
        <input type="checkbox" v-model="model" />
        <span class="checkbox"></span>
        <span class="ml-6 text-sm font-normal text-gray"><slot></slot></span>
    </label>
</template>

<script setup>
const model = defineModel();
</script>
<style lang="scss" scoped>
label {
    input {
        position: absolute;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &:checked + .checkbox {
            background-color: #21a2f5;
            border: none;
            background-image: url(assets/my-icons/check.svg);
        }
    }
    .checkbox {
        position: absolute;
        width: 18px;
        height: 18px;
        overflow: hidden;
        border: 1px solid #adb4d2;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
}
</style>
