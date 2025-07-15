function getNumberRandoms(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const myReactTitles = [
  "Bases de React",
  "Principios de React",
  "Fundamentos de React",
];

export default function Header() {
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
