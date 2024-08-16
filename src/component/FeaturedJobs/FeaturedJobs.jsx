import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [dataLength, setDataLength] = useState(4);

  return (
    <div className="mx-10 my-10">
      <div className="py-10 my-5 space-y-5">
        <h1 className="text-4xl font-bold text-center">
          Featured Jobs
        </h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength===jobs.length && "hidden" || "flex justify-center my-5"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn my-10  text-white bg-[#9775ff]"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
