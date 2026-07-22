import { useState } from "react";

const useStateBasics = () => {
  console.log(useState);
  console.log(useState());
  const value = useState("shahid");
  const value0 = useState("shahid")[0];
  const value2 = useState()[1];

  console.log(value);
  console.log(value0);
  console.log(value2);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>you clicked {count} times</h2>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default useStateBasics;
