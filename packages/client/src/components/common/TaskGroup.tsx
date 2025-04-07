import { SectionProps, TaskSection } from "../TaskSection";

type TaskGroupProps = {
  sections: SectionProps[];
};

export const TaskGroup = ({ sections }: TaskGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      {sections.map((item) => (
        <TaskSection title={item.title} icon={item.icon} key={item.title} />
      ))}
    </div>
  );
};
