<template>
    <div class="flex h-[100vh] flex-col lg:container">
        <ApplicationLogo class="mt-14" />
        <TodoList :list="todoList" class="mt-32 px-5" />
        <div class="mt-auto flex flex-col items-center justify-center pb-16">
            <span class="mb-4 text-sm font-normal text-gray"
                >Задач: {{ todoList.length }} / Багов: {{ countBugs }}</span
            >
            <UiBtnPrimary
                icon="plus"
                @click="$router.push({ name: 'create-task' })"
            >
                Добавить задачу
            </UiBtnPrimary>
        </div>
    </div>
</template>
<script setup>
useSeoMeta({
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});

const store = useTodoList();

const todoList = computed(() => {
    return store.getTodoList.sort((a, b) => {
        if (a.type == "ERROR" && b.type != "ERROR") {
            return -1;
        } else if (a.type != "ERROR" && b.type == "ERROR") {
            return 1;
        } else return 0;
    });
});
const countBugs = computed(() => {
    return todoList.value.reduce((a, b) => {
        if (b.type == "ERROR") {
            return a + 1;
        }
        return a;
    }, 0);
});
</script>
