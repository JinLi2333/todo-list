import { getListIcon } from "@/config/IconMap";
import { useTodoStore } from "@/store/todoStore";
import MenuList from "./MenuList";

export default function CustomMenuItems() {
  const todoStore = useTodoStore();
  const customLists = todoStore.customLists.map((list) => ({
    ...list,
    icon: getListIcon(list.iconId),
  }));

  return <MenuList items={customLists} />;
}
