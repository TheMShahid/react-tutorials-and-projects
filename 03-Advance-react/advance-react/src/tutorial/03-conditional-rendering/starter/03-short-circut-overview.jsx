import { useState } from "react";

const ShortCircutOverview = () => {
  // falsy
  const [empty, setEmpty] = useState();

  // truthy
  const [name, setName] = useState("shahid");

  const codeExample = empty || "new value";

  return (
    <div>
      <h4>Falsy OR: {empty || "value"}</h4>
      <h4>Falsy AND: {empty && "value"}</h4>
      <h4>Truthy OR: {name || "value"}</h4>
      <h4>Truthy AND: {name && "value"}</h4>
      <h4>code example: {codeExample}</h4>
    </div>
  );
};

export default ShortCircutOverview;
