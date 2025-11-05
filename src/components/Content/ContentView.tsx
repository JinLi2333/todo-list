import { makeStyles } from "@fluentui/react-components";
import { TaskListView } from "./TaskList/TaskListView";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
});

const mockTasks = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
  },
  {
    id: "4",
    title: "Task 4",
    completed: true,
  },
];

export default function ContentView() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TaskListView title="All Tasks" tasks={mockTasks} />
    </div>
  );
}
