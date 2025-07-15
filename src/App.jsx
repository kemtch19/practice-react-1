import { CARDS_OBJECTS } from "./data";

const myReactTitles = [
  "Bases de React",
  "Principios de React",
  "Fundamentos de React",
];

function getNumberRandoms(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
  const winnerTitle =
    myReactTitles[getNumberRandoms(0, myReactTitles.length - 1)];

  return (
    <header className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center flex justify-center items-center text-red-700 ">
        {winnerTitle}
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <>
      <div className="m-4 flex flex-col items-center bg-red-400 rounded-xl">
        <img src={props.src} alt="Imagen de vite" />
        <h2>{props.title}</h2>
        <p className="flex wrap-break-word">{props.description}</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center bg-blue-400 m-12">
        <h2 className="text-4xl underline">Caracteristicas Principales</h2>
        <div className="flex flex-row justify-center gap-4">
          <CoreConcepts
            src={CARDS_OBJECTS[0].src}
            title={CARDS_OBJECTS[0].title}
            description={CARDS_OBJECTS[0].description}
          />
          <CoreConcepts
            src={CARDS_OBJECTS[1].src}
            title={CARDS_OBJECTS[1].title}
            description={CARDS_OBJECTS[1].description}
          />
          <CoreConcepts
            src={CARDS_OBJECTS[2].src}
            title={CARDS_OBJECTS[2].title}
            description={CARDS_OBJECTS[2].description}
          />
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
