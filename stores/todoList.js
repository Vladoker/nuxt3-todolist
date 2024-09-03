import { defineStore } from "pinia";

export const useTodoList = defineStore("todoList", {
    state: () => ({
        todoList: [
            {
                id: 1,
                number: "3",
                title: "Исправить баг",
                type: "ERROR",
            },
            {
                id: 2,
                number: "1",
                title: "Тестовая задача",
                type: "",
            },
            {
                id: 3,
                number: "2",
                title: "Вторая задача",
                type: "",
            },
        ],
    }),
    getters: {
        getTodoList: (state) => {
            return state.todoList;
        },
    },
    actions: {
        addTask({ title, type }) {
            const taskType = type ? "ERROR" : "";
            this.todoList.push({
                id: self.crypto.randomUUID(),
                number: this.todoList.length + 1,
                title: title,
                type: taskType,
            });
        },
        editTask({ id, title, type }) {
            this.todoList = this.todoList.map((e) => {
                if (e.id == id) {
                    const taskType = type ? "ERROR" : "";
                    return {
                        ...e,
                        title,
                        type: taskType,
                    };
                } else return e;
            });
        },
        deleteTask(id) {
            this.todoList = this.todoList.filter((i) => i.id != id);
        },
    },
});
