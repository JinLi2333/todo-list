const IconSize = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
} as const;

type IconSizeType = keyof typeof IconSize;

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: IconSizeType;
};

export const Section = ({ title, children, icon, iconSize }: SectionProps) => {
  return (
    <div className="bg-white rounded-lg p-6 hover:bg-gray-300">
      <div className="flex items-center space-x-2">
        {icon && (
          <div className={`${IconSize[iconSize || "medium"]} flex-shrink-0`}>
            {icon}
          </div>
        )}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};
