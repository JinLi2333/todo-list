import {
  FlagIcon,
  HomeIcon,
  StarIcon,
  SunIcon,
  TableCellsIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Section } from "./components/Section";
const App = () => {
  return (
    <div className="flex flex-col gap-2">
      <Section title="My day" icon={<SunIcon />} />
      <Section title="Important" icon={<StarIcon />} />
      <Section title="Planned" icon={<TableCellsIcon />} />
      <Section title="Assigned To Me" icon={<UserIcon />} />
      <Section title="Flagged Email" icon={<FlagIcon />} />
      <Section title="Tasks" icon={<HomeIcon />} />
    </div>
  );
};

export default App;
