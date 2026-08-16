import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthday buddy</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}>
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
