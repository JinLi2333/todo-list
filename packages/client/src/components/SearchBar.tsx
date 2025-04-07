const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow py-2 px-4 bg-gray-100 rounded-lg"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Search
      </button>
    </div>
  );
};

export { SearchBar };
