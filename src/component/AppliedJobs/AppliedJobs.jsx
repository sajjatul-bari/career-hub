import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const handleFilterJobs = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remoteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };

  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJob(jobApplied);
      setDisplayJob(jobApplied);
    }
  }, [jobs]);

  return (
    <div className="mx-10 my-20">
      <div className=" flex justify-end pb-5">
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleFilterJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterJobs("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handleFilterJobs("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {displayJob.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
