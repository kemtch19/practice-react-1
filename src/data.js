import viteImage from "/vite.svg";
import reactImage from "/react.svg";
import stateImage from "/Estados.png";

export const CARDS_OBJECTS = [
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
