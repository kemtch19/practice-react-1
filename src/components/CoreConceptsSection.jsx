import { CoreConcepts } from "./CoreConcepts";
import { REACT_CONCEPTS } from "../js/data";

export const CoreConceptsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-amber-400 py-16 px-4 text-white">
      <h2 className="font-bold text-4xl md:text-5xl mb-10 text-center">
        Funciones Principales de React
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {REACT_CONCEPTS.map((item, index) => (
          <CoreConcepts key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
