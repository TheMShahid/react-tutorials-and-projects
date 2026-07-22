import { useEffect, useState } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [second, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("first");
  }, [value]);

  useEffect(() => {
    console.log("second");
  }, [second]);

  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <h1>second value: {second}</h1>
      <button className="btn" onClick={() => setSecondValue(second + 1)}>
        second
      </button>
    </div>
  );
};

export default MultipleEffects;
