import { SunIcon } from "@heroicons/react/24/outline";
import { TaskGroup } from "./common/TaskGroup";

const sectionConfig = [
  {
    title: "My Day",
    icon: <SunIcon />,
  },
];

const UserDefinedTaskGroup = () => {
  return <TaskGroup sections={sectionConfig} />;
};

export { UserDefinedTaskGroup };
