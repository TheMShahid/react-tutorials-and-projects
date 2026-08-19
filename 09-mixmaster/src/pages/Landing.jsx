import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "something";
};

const Landing = () => {
  const result = useLoaderData();
  console.log(result);

  return <h1>Landing</h1>;
};
export default Landing;
