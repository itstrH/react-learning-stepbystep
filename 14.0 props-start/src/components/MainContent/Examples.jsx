import { useState } from "react";
import Tabs from "./Tabs.jsx";
import TabButton from "../TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../../../data.js";


const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  // Cách 3:
  let tabContent = <p>Click vào nút để xem nội dung chủ đề.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    // alert(`${selectedButton} was clicked`);
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples" className="democlass" moi="moi ">
      <Tabs
        // ButtonsContainer="menu"
        button={
          <>
            <TabButton
              onClick={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {/* Cách 1: sử dụng toán tử 3 ngôi - ternary operator */}
        {/* {!selectedTopic ? (
              <p>Click vào nút để xem nội dung chủ đề.</p>
            ) : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].desc}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
                )} */}

        {/* Cách 2: sử dụng toán tử AND - && */}
        {/* {!selectedTopic && <p>Click vào nút để xem nội dung chủ đề.</p>}
                {selectedTopic && (
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].desc}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
                </div>
              )} */}
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
