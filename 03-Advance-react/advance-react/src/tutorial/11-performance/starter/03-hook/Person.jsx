import { useEffect } from "react";

const Person = ({ person, removePerson }) => {
  console.log("render");
  useEffect(() => {
    console.log("unfortunately does not fix the issue");
  }, []);

  return (
    <div>
      <h4>{person.name}</h4>
      <button onClick={() => removePerson(person.id)}>remove</button>
    </div>
  );
};

export default Person;
