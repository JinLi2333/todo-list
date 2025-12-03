import { makeStyles } from "@fluentui/react-components";
import { type JSX, useCallback } from "react";
import { useTodoStore } from "@/store/todoStore";
import MenuItem from "./MenuItem";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "0.5rem",
  },
});

type MenuItemProps = {
  items: {
    id: string;
    title: string;
    icon: JSX.Element;
  }[];
};

export default function MenuList({ items }: MenuItemProps) {
  const styles = useStyles();
  const selectList = useTodoStore((state) => state.selectList);

  const onListSelect = useCallback(
    (id: string) => {
      selectList(id);
    },
    [selectList],
  );

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} onClick={onListSelect} />
      ))}
    </div>
  );
}
