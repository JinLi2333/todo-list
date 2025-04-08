export type TaskItemProps = {
  title: string;
  completed: boolean;
  favorite: boolean;
};

export const TaskItem = ({ title, completed, favorite }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300 bg-red-300">
      <div className="flex items-center space-x-2">
        <input type="checkbox" checked={completed} className="h-4 w-4" />
        <span className={`text-sm ${completed ? "line-through" : ""}`}>
          {title}
        </span>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        {favorite ? "★" : "☆"}
      </button>
    </div>
  );
};
