<template>
    <div class="container flex h-[100vh] flex-col">
        <ApplicationLogo class="mt-14" />
        <form class="mt-16 flex h-[100%] flex-col" @submit.prevent="creteTask">
            <UiInput
                required
                placeholder="Введите название"
                title="Название задачи"
                desc="Будет отображаться на главной странице"
                v-model="title"
            />

            <UiCheckbox class="mt-5" v-model="isBug">Является багом</UiCheckbox>
            <div class="mt-auto flex items-center justify-between pb-16">
                <UiBtnGray @click="$router.push('/')">Вернуться</UiBtnGray>
                <UiBtnPrimary>Создать</UiBtnPrimary>
            </div>
        </form>
    </div>
</template>

<script setup>
const store = useTodoList();
const router = useRouter();
const title = ref("");
const isBug = ref(false);

function creteTask() {
    store.addTask({
        title: title.value,
        type: isBug.value,
    });
    router.push("/");
}
</script>
