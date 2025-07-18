import viteImage from "/vite.svg";
import reactImage from "/react.svg";
import stateImage from "/Estados.png";

export const REACT_CONCEPTS = [
  {
    src: viteImage,
    title: "React + Vite",
    description:
      "Vite acelera el desarrollo de aplicaciones React con recarga rápida y build ultrarrápido. ¡Ideal para crear interfaces modernas!",
  },
  {
    src: reactImage,
    title: "React y JSX",
    description:
      "JSX te permite escribir HTML dentro de JavaScript. Es más legible y declarativo, facilitando la construcción de interfaces dinámicas.",
  },
  {
    src: reactImage,
    title: "Props",
    description:
      "Las props permiten pasar datos de un componente padre a uno hijo, haciéndolos reutilizables y dinámicos. ¡Clave para componetización!",
  },
  {
    src: stateImage,
    title: "useState",
    description:
      "El hook useState permite crear y manejar estados en componentes funcionales. Útil para datos interactivos y cambios en UI.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Componentes",
    description:
      "Los componentes son los bloques de construcción de las aplicaciones React. Un componente es un módulo autocontenido (HTML + CSS opcional + JS) que renderiza alguna salida.",
    code: `
  function Welcome() {
    return <h1>¡Hola, Mundo!</h1>;
  }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX es una extensión sintáctica de JavaScript. Es similar a un lenguaje de plantillas, pero tiene toda la potencia de JavaScript (por ejemplo, puede emitir contenido dinámico).",
    code: `
  <div>
    <h1>Bienvenido {userName}</h1>
    <p>¡Es hora de aprender React!</p>
  </div>`,
  },
  props: {
    title: "Props",
    description:
      "Los componentes aceptan entradas arbitrarias llamadas props. Son como argumentos de función.",
    code: `
  function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
  }`,
  },
  state: {
    title: "Estado",
    description:
      "El estado permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a las acciones del usuario, las respuestas de la red y cualquier otra cosa.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Muestra los detalles</button>
        {isVisible && <p>¡Estos detalles son alucinantes!</p>}
      </div>
    );
  }`,
  },
};
