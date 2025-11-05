import { Label, makeStyles, tokens } from "@fluentui/react-components";
import {
  CheckmarkCircle24Regular,
  Circle24Regular,
  Star24Regular,
} from "@fluentui/react-icons";
import { Star24Filled } from "@fluentui/react-icons/fonts";
import type { ReactNode } from "react";

type TodoItemViewProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  isFavorite: boolean;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    boxSizing: "border-box",
    padding: tokens.spacingHorizontalM,
  },
  isCompleted: {
    maxWidth: "40px",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  isFavorite: {
    maxWidth: "40px",
  },
});

type CheckMarkProps = {
  checked: boolean;
  checkIcon: ReactNode;
  uncheckIcon: ReactNode;
};

export const CheckMark = ({
  checked,
  checkIcon,
  uncheckIcon,
}: CheckMarkProps) => {
  return checked ? checkIcon : uncheckIcon;
};

export const TodoItemView = ({
  id,
  title,
  isCompleted,
  isFavorite,
}: TodoItemViewProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CheckMark
        checked={isCompleted}
        checkIcon={<CheckmarkCircle24Regular className={styles.isCompleted} />}
        uncheckIcon={<Circle24Regular className={styles.isCompleted} />}
      />
      <Label htmlFor={id} className={styles.title}>
        {title}
      </Label>

      <CheckMark
        checked={isFavorite}
        checkIcon={<Star24Filled className={styles.isFavorite} />}
        uncheckIcon={<Star24Regular className={styles.isFavorite} />}
      />
    </div>
  );
};
