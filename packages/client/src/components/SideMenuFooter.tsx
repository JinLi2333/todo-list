import { PlusIcon, FolderPlusIcon } from "@heroicons/react/24/outline";

const SideMenuFooter = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <PlusIcon className="h-6 w-6" />
        <span className="text-sm font-medium">New List</span>
      </div>
      <FolderPlusIcon className="h-6 w-6" />
    </div>
  );
};

export { SideMenuFooter };
