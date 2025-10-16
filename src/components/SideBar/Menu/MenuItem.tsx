import { Button, makeStyles } from "@fluentui/react-components";
import { type JSX, useCallback } from "react";

type MenuItemProps = {
  id: string;
  title: string;
  icon: JSX.Element;
  onClick?: (id: string) => void;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "0",
    fontWeight: "400",
  },
});

export default function MenuItem({ id, title, icon, onClick }: MenuItemProps) {
  const styles = useStyles();

  const onButtonClick = useCallback(() => {
    onClick?.(id);
  }, [onClick, id]);

  return (
    <Button
      icon={icon}
      appearance="subtle"
      className={styles.root}
      onClick={onButtonClick}
    >
      {title}
    </Button>
  );
}
