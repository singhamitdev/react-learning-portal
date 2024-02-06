import "./App.css";
import Header from "./components/Header/Header";
import "./App.css";
import CoreConceptsSummary from "./components/CoreConcepts/CoreConceptsSummary";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsSummary />
        <Examples />
      </main>
    </>
  );
}

export default App;
