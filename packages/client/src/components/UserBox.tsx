const UserBox = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full bg-blue-500" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">John Doe</h2>
      </div>
    </div>
  );
};

export { UserBox };
