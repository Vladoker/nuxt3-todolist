<template>
    <div class="flex cursor-pointer flex-col items-center justify-center">
        <Icon
            name="my-icon:logo"
            class="h-[43px] w-[140px]"
            @click="$router.push('/')"
        />
        <h1 class="mt-1 text-[20px] font-semibold text-gray-3">Задачник</h1>
    </div>
</template>
