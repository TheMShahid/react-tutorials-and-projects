import { useEffect, useState } from "react";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  return <h1>multiple returns</h1>;
};

export default MultipleReturns;
