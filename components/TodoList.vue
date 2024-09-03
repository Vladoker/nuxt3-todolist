<template>
    <ul>
        <li
            v-for="item of list"
            :key="item.id"
            class="flex cursor-default justify-between border-b-[1px] border-gray-4 py-4 last:border-b-0"
        >
            <span
                class="pl-2 text-sm font-bold"
                :class="item.type == 'ERROR' ? 'text-pink' : 'text-gray-5'"
            >
                # {{ item.number }}
                <span
                    class="text-sm font-normal"
                    :class="item.type == 'ERROR' ? 'text-red' : 'text-gray'"
                    >{{ item.title }}</span
                >
            </span>
            <div class="flex cursor-pointer gap-x-2 pr-2">
                <Icon
                    name="my-icon:edit"
                    size="20px"
                    @click="
                        $router.push({
                            name: 'edit-task-id',
                            params: { id: item.id },
                        })
                    "
                />
                <Icon
                    name="my-icon:trash"
                    size="20px"
                    @click="deleteTask(item)"
                />
            </div>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    list: Array,
});
const store = useTodoList();

function deleteTask(item) {
    store.deleteTask(item.id);
}
</script>
