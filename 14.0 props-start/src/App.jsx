import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
import Section from "./components/MainContent/Section.jsx";
import Tabs from "./components/MainContent/Tabs.jsx";

function App() {
  const kq = myData.map((item) => ({ ...item }));
  console.log(kq);

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
    <>
      <Header />
      <main>
        <Section title="Khái niệm chính trong React" id="core-concepts">
          <ul>
            {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </Section>

        <Section
          title="Examples"
          id="examples"
          className="democlass"
          moi="moi "
        >
          <Tabs
            ButtonsContainer="menu"
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
      </main>
    </>
  );
}

export default App;
