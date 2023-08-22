export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-3 rounded-lg mr-2 mb-2 font-medium hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      {children}
    </button>
  );
};
