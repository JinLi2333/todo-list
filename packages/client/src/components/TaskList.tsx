import { TaskItemProps, TaskItem } from "./common/TaskItem";

type TaskListProps = {
  items: TaskItemProps[];
};

export const TaskList = ({ items }: TaskListProps) => {
  return (
    <div className="flex flex-col gap-2 bg-blue-200 flex-grow">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <TaskItem
            key={item.title}
            title={item.title}
            completed={item.completed}
            favorite={item.favorite}
          />
        ))}
      </div>
    </div>
  );
};
