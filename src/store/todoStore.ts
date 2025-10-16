import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import type {
	ListType,
	TodoItem,
	TodoList,
	TodoStoreState,
} from "@/types/todo";

export const useTodoStore = create<TodoStoreState>((set, get) => ({
	builtInLists: [],
	customLists: [],
	selectedListId: null,
	todoItems: [],

	get availableLists() {
		return [...get().builtInLists, ...get().customLists];
	},

	initLists: (listType: ListType, lists: TodoList[]) => {
		switch (listType) {
			case "builtIn":
				set({ builtInLists: lists });
				break;
			case "custom":
				set({ customLists: lists });
				break;
		}
	},

	addList: (title: string) => {
		const newList: TodoList = {
			id: uuidv4(),
			title,
			iconId: 0,
		};
		set({ customLists: [...get().customLists, newList] });
	},

	selectList: (listId: string) => {
		set({ selectedListId: listId });
	},

	removeList: (listId: string) => {
		set({
			customLists: get().customLists.filter((list) => list.id !== listId),
			selectedListId: null,
			todoItems: get().todoItems.filter(
				(item) => !item.listIds.includes(listId),
			),
		});
	},

	addTodo: (title: string) => {
		const selectedListId = get().selectedListId;
		if (!selectedListId) {
			return;
		}
		const newTodo: TodoItem = {
			id: uuidv4(),
			listIds: [selectedListId],
			title,
			completed: false,
		};
		set({ todoItems: [...get().todoItems, newTodo] });
	},

	toggleTodo: (todoId: string) => {
		set({
			todoItems: get().todoItems.map((item) =>
				item.id === todoId ? { ...item, completed: !item.completed } : item,
			),
		});
	},

	removeTodo: (todoId: string) => {
		set({
			todoItems: get().todoItems.filter((item) => item.id !== todoId),
		});
	},
}));
