export const Header = () => {
  const winnerTitle = ["Blog de Kemtch", "React Blog", "Componentes de React"];

  const getRandomTitleIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <header className="bg-gradient-to-r from-blue-300 to-indigo-700 h-24 flex items-center justify-center shadow-lg">
      <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-wide px-6 py-3 rounded-xl bg-red-500 bg-opacity-90 shadow-md hover:scale-105 transition-transform duration-300">
        {winnerTitle[getRandomTitleIndex(0, 2)]}
      </h1>
    </header>
  );
};
