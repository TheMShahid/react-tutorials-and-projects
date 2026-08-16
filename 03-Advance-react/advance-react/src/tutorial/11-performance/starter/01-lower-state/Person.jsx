import { useEffect } from "react";

const Person = ({ person }) => {
  console.log("render");
  useEffect(() => {
    console.log("unfortunately does not fix the issue");
  }, []);

  return (
    <div>
      <h4>{person.name}</h4>
    </div>
  );
};

export default Person;
