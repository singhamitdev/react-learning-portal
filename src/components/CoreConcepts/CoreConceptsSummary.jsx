import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../data";

const CoreConceptsSummary = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcepts key={concept.title} {...concept} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CoreConceptsSummary;
