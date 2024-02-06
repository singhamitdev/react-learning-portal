import { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../data";
import SectionLayout from "./SectionLayout";
import TabsWrapper from "./TabsWrapper";

const Examples = () => {
  const [clickedTab, setSelectedTab] = useState();
  const handleTabClick = (selectedTab) => {
    setSelectedTab(selectedTab);
  };
  return (
    <>
      <SectionLayout title="Examples">
        <TabsWrapper
          TagName="menu"
          buttonContent={
            <>
              <TabButton
                isClicked={clickedTab === "components"}
                onClick={() => handleTabClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isClicked={clickedTab === "jsx"}
                onClick={() => handleTabClick("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isClicked={clickedTab === "props"}
                onClick={() => handleTabClick("props")}
              >
                Props
              </TabButton>
              <TabButton
                isClicked={clickedTab === "state"}
                onClick={() => handleTabClick("state")}
              >
                State
              </TabButton>
            </>
          }
        />
        {!clickedTab ? (
          <p>Please select a Topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[clickedTab].title}</h3>
            <p>{EXAMPLES[clickedTab].description}</p>
            <pre>
              <code>{EXAMPLES[clickedTab].code}</code>
            </pre>
          </div>
        )}
      </SectionLayout>
    </>
  );
};

export default Examples;
