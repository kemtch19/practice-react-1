import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CARDS_OBJECTS } from "./data.js";
import { TabButton } from "./components/TabButton.jsx";

function App() {
  const handleClickMenu = () => {
    console.log("Estamos dando click a un botón");
  };

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
      <section className="flex flex-col items-center justify-center">
        <h2>Ejemplos de React</h2>
        <menu className="flex flex-row m-5 gap-2.5">
          <TabButton onClick={handleClickMenu}>Componentes</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>Estados</TabButton>
        </menu>
      </section>
      <main></main>
    </>
  );
}

export default App;
