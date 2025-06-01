import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // Cách 3:
  // let tabContent = <p>Click vào nút để xem nội dung chủ đề.</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].desc}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }
  function handleSelect(selectedButton) {
    // alert(`${selectedButton} was clicked`);
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            {/* second way */}
            {/* <TabButton batky="Components" /> */}
          </menu>
          {/* {selectedTopic} */}

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
          {!selectedTopic && <p>Click vào nút để xem nội dung chủ đề.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/* {tabContent} */}
        </section>
      </main>
    </>
  );
}

export default App;
