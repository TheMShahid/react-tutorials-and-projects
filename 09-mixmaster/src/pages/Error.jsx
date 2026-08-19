import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
// image for 404 page

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h3>Ohh!</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/" className="back-to-home">
            back to home
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>somethig went wrong...</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
