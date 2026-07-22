import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const hell = () => {
    console.log("hello there");
  };

  hell();

  useEffect(() => {
    console.log("useffect");
  }, []);

  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseEffectBasics;
