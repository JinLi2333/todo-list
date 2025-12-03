import { makeStyles } from "@fluentui/react-components";
import { useFilteredTodos } from "@/store/todoStore";
import { TaskListView } from "./TaskList/TaskListView";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
});

export default function ContentView() {
  const styles = useStyles();
  const tasks = useFilteredTodos();

  return (
    <div className={styles.root}>
      <TaskListView title="All Tasks" tasks={tasks} />
    </div>
  );
}
