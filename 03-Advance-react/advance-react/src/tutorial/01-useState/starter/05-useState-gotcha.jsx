import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => {
      const newCount = prevState + 1;
      console.log(newCount);

      return newCount;
    });
    // console.log(count);
  };

  const handleValue = () => {
    setTimeout(() => {
      console.log("clicked the button");

      // setCount(count + 1);
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={handleCount}>
        increase
      </button>

      <div style={{ marginTop: "3rem" }}>
        <button className="btn" onClick={handleValue}>
          count
        </button>
      </div>
    </div>
  );
};

export default UseStateGotcha;
