import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(2);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const jobs = await resp.json();
    setJobs(jobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // console.log(jobs);

  if (isLoading) {
    return (
      <div className="jobs-center">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <section className="jobs-center">
      {/* btn container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
