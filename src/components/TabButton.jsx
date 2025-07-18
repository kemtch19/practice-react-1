export const TabButton = ({ isSelected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-white font-medium transition-colors duration-300 ${
        isSelected
          ? "bg-emerald-600 shadow-lg scale-105"
          : "bg-emerald-400 hover:bg-emerald-500"
      }`}
    >
      {children}
    </button>
  );
};
