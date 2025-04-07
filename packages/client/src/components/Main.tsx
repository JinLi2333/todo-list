import { SideMenu } from "./SideMenu";

const Main = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideMenu />
      <div className="flex-1 bg-blue-300">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-2 text-gray-600">
            This is where you can manage your packages and lists.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Main };
