import { SideMenu } from "./SideMenu";
import { TaskListContent } from "./TaskListContent";

const Main = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideMenu />
      <TaskListContent
        title="Today"
        items={[
          {
            title: "Task 1",
            completed: false,
            favorite: true,
          },
          {
            title: "Task 2",
            completed: true,
            favorite: false,
          },
        ]}
      />
    </div>
  );
};

export { Main };
