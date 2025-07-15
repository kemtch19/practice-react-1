import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import {CARDS_OBJECTS} from "./data.js"

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center bg-blue-400 m-12">
        <h2 className="text-4xl underline">Caracteristicas Principales</h2>
        <div className="flex flex-row justify-center gap-4">
          <CoreConcepts {...CARDS_OBJECTS[0]} />
          <CoreConcepts {...CARDS_OBJECTS[1]} />
          <CoreConcepts {...CARDS_OBJECTS[2]} />
          <CoreConcepts
            src={CARDS_OBJECTS[3].src}
            title={CARDS_OBJECTS[3].title}
            description={CARDS_OBJECTS[3].description}
          />
        </div>
      </section>
      <main></main>
    </>
  );
}

export default App;
