import {
  SunIcon,
  StarIcon,
  TableCellsIcon,
  UserIcon,
  FlagIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { TaskGroup } from "./common/TaskGroup";

const sectionConfig = [
  {
    title: "My Day",
    icon: <SunIcon />,
  },
  {
    title: "Important",
    icon: <StarIcon />,
  },
  {
    title: "Planned",
    icon: <TableCellsIcon />,
  },
  {
    title: "Assigned To Me",
    icon: <UserIcon />,
  },
  {
    title: "Flagged Email",
    icon: <FlagIcon />,
  },
  {
    title: "Tasks",
    icon: <HomeIcon />,
  },
];

const FavioriteTaskGroup = () => {
  return <TaskGroup sections={sectionConfig} />;
};

export { FavioriteTaskGroup };
