export const Header = () => {
  return (
    <div className="mx-auto max-w-screen-sm flex justify-between items-center">
      <h1 className="text-3xl font-medium">Task Tracker</h1>
      <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Add
      </button>
    </div>
  );
};

export default Header;
