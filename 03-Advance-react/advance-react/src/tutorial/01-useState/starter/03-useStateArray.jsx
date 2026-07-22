import React from "react";
import { peoples } from "../../../data";

const useStateArray = () => {
  const [item, setItem] = React.useState(peoples);

  const removeSinglePerson = (id) => {
    // console.log(id);
    // const newPeoples = item.filter((person) => person.id !== id);
    // setItem(newPeoples);
    setItem(item.filter((person) => person.id !== id));
  };

  const clearList = () => {
    setItem([]);
  };

  return (
    <div>
      {item.map((people) => {
        {
          /* console.log(people); */
        }
        return (
          <div key={people.id}>
            <h1>{people.name}</h1>
            <button onClick={() => removeSinglePerson(people.id)}>
              remove person
            </button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: "2rem" }} onClick={clearList}>
        clear list
      </button>
    </div>
  );
};

export default useStateArray;
