export default function CoreConcepts({ src, title, description }) {
  return (
    <>
      <div className="m-4 flex flex-col items-center bg-red-400 rounded-xl">
        <img src={src} alt={`Imagen de ${title}`} />
        <h2>{title}</h2>
        <p className="flex wrap-break-word">{`${description} hola que tal`}</p>
      </div>
    </>
  );
}