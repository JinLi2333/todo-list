import { makeStyles } from "@fluentui/react-components";
import type { JSX } from "react";
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

const onItemClick = (id: string) => {
  console.log(id);
};

export default function MenuList({ items }: MenuItemProps) {
  const styles = useStyles();
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} onClick={onItemClick} />
      ))}
    </div>
  );
}
