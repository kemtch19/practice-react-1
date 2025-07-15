const myReactTitles = [
  "Bases de React",
  "Componentes",
  "Propiedades",
  "Estados",
  "Contexto",
  "Hooks",
  "Render Props",
  "Error Boundaries",
  "Portales",
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

function CoreConcepts() {
  return (
    <>
      <div className="m-4 flex flex-col items-center bg-red-400 rounded-xl">
        <img src="./react.svg" alt="Imagen de React" />
        <h2>Título 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center bg-blue-400 m-12">
        <h2 className="text-4xl">Funciones Principales</h2>
        <div className="flex flex-row">
          <CoreConcepts />
          <CoreConcepts />
          <CoreConcepts />
        </div>
      </section>
      <main></main>
    </>
  );
}

export default App;
