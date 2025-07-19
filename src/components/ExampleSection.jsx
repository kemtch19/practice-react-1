import { TabButton } from "./TabButton";
import { EXAMPLES } from "../js/data";
import { useState } from "react";
import { Section } from "./Section";

export const ExampleSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClickMenu = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = (
    <p className="mt-4 text-lg text-gray-700">
      Selecciona un tema para ver el ejemplo
    </p>
  );

  if (selectedTopic) {
    tabContent = (
      <div className="mt-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
          {EXAMPLES[selectedTopic].title}
        </h3>
        <p className="text-gray-800 mb-4">
          {EXAMPLES[selectedTopic].description}
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="🌱 Ejemplos de Código React" className="flex flex-col items-center justify-center p-10 bg-emerald-100">
        <menu className="flex flex-wrap gap-4 justify-center mb-6">
          <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClickMenu("components")}> Componentes </TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClickMenu("jsx")} > JSX </TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClickMenu("props")} > Props </TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClickMenu("state")} > useState </TabButton>
        </menu>
        {tabContent}
      </Section>
    </>
  );
};
