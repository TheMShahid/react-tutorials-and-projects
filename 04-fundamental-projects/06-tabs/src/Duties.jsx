import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const Duties = ({ duties }) => {
  const id = uuid();

  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
