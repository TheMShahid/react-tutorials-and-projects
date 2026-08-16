import { v4 as uuid } from "uuid";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const id = uuid();
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
            key={id}
            onClick={() => setCurrentItem(index)}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
