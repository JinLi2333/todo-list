import { Label, makeStyles, tokens } from "@fluentui/react-components";
import type { TodoItem } from "@/types/todo";
import { TodoItemView } from "./TodoItemView";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#7084d4",
    padding: tokens.spacingHorizontalXXXL,
    boxSizing: "border-box",
    borderRadius: tokens.borderRadiusLarge,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXXL,
  },
  title: {
    color: "white",
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase600,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
});

type TaskListViewProps = {
  title: string;
  tasks: Omit<TodoItem, "listIds">[];
};

export const TaskListView = ({ title, tasks }: TaskListViewProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Label className={styles.title}>{title}</Label>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TodoItemView
            id={task.id}
            key={task.id}
            title={task.title}
            isCompleted={task.completed}
            isFavorite={task.id === "1" || task.id === "3"}
          />
        ))}
      </div>
    </div>
  );
};
