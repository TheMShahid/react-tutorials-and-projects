import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {/* {toggle && <SomeComponent />} */}
      {toggle && <RandomComponent />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    console.log("hmmm, that is interesting");
    const intId = setInterval(() => {
      console.log("hello from internval");
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log("run after initial render and before useeffect");
    };
  }, []);
  return <h1>some component</h1>;
};

const RandomComponent = () => {
  () => {
    window.removeEventListener("scroll", func);
  };
  useEffect(() => {
    const func = () => {
      // some code
    };
    window.addEventListener("scroll", func);

    () => window.removeEventListener("scroll", func);
  }, []);
  return <h2>random component</h2>;
};

export default CleanupFunction;
