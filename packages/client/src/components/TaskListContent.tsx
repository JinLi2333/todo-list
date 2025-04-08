import {
  ArrowTopRightOnSquareIcon,
  EllipsisHorizontalIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { TaskList } from "./TaskList";
import { TaskItemProps } from "./common/TaskItem";

type TaskListHeaderProps = {
  title: string;
};

type TaskListContentProps = {
  title: string;
  items: TaskItemProps[];
};

export const TaskListHeader = ({ title }: TaskListHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300 bg-red-300">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex items-center space-x-2 flex-row">
        <UserPlusIcon className="h-8 w-8" />
        <ArrowTopRightOnSquareIcon className="h-8 w-8" />
        <EllipsisHorizontalIcon className="h-8 w-8" />
      </div>
    </div>
  );
};

export const TaskListContent = ({ title, items }: TaskListContentProps) => {
  return (
    <div className="flex flex-col gap-2 bg-blue-200 flex-grow">
      <TaskListHeader title={title} />
      <TaskList items={items} />
    </div>
  );
};
