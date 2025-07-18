import { TabButton } from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export const ExampleSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClickMenu = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Acá aparecera información relevante acerca de REACT</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="p-4 bg-blue-600 gap-5 rounded-lg">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre className="flex justify-start items-start">
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <h2>Ejemplos de React</h2>
        <menu className="flex flex-row m-5 gap-2.5">
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleClickMenu("components")}
          >
            Componentes
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => {
              handleClickMenu("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => {
              handleClickMenu("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => {
              handleClickMenu("state");
            }}
          >
            Estados
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </>
  );
};
