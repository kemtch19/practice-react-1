export const CoreConcepts = ({ src, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
      <img src={src} alt={title} className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
