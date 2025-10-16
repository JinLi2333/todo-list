import { getListIcon } from "@/config/IconMap";
import { useTodoStore } from "@/store/todoStore";
import MenuList from "./MenuList";

export default function BuiltInMenuItems() {
	const todoStore = useTodoStore();

	const builtInLists = todoStore.builtInLists.map((list) => ({
		...list,
		icon: getListIcon(list.iconId),
	}));

	return <MenuList items={builtInLists} />;
}
