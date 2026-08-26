import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  // console.log(error);

  return (
    <div>
      {/* <h2>{error.message}</h2> */}
      <h2>there was an error...</h2>
    </div>
  );
};
export default SinglePageError;
