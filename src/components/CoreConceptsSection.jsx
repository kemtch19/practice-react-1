import CoreConcepts from "./CoreConcepts.jsx";
import { CARDS_OBJECTS } from "../data.js";

export const CoreConceptsSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-blue-400 m-12">
        <h2 className="text-4xl underline">Caracteristicas Principales</h2>
        <div className="flex flex-row justify-center gap-4">
          {CARDS_OBJECTS.map((conceptItem, index) => (
            <CoreConcepts key={index} {...conceptItem} />
          ))}
          ;
        </div>
      </section>
    </>
  );
};
