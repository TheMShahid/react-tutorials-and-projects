import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const hi = () => {
    console.log("hi shahid");
    // setValue(value + 1);
  };

  hi();

  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn">click me</button>
    </div>
  );
};

export default CodeExample;
