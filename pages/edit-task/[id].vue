<template>
    <div class="container flex h-[100vh] flex-col">
        <ApplicationLogo class="mt-14" />
        <form class="mt-20 flex h-[100%] flex-col" @submit.prevent="editTask">
            <UiInput
                placeholder="Введите название"
                required
                ref="inputRef"
                v-model="title"
            />
            <UiCheckbox class="mt-5" v-model="isBug">Является багом</UiCheckbox>
            <div class="mt-auto flex items-center justify-between pb-16">
                <UiBtnGray @click="$router.push('/')">Вернуться</UiBtnGray>
                <div class="flex">
                    <UiBtnGray icon="trash" @click="deleteTask" />
                    <UiBtnPrimary class="ml-2">Сохранить</UiBtnPrimary>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
const store = useTodoList();
const route = useRoute();
const title = ref("");
const isBug = ref(false);
onMounted(() => {
    const item = store.getTodoList.find((e) => e.id == route.params.id);

    if (item) {
        title.value = item.title;
        isBug.value = item.type == "ERROR";
    } else {
        navigateTo("/");
    }
});

function deleteTask() {
    store.deleteTask(route.params.id);
    navigateTo("/");
}
function editTask() {
    store.editTask({
        id: route.params.id,
        title: title.value,
        type: isBug.value,
    });
    navigateTo("/");
}
</script>
