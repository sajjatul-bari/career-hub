import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    job_type,
    remote_or_onsite,
  } = job;
  return (
    <div className="border rounded-lg p-10 space-y-3 flex justify-between items-center mb-5">
      <div className="flex justify-center items-center gap-10">
      <div>
        <img className="h-10 w-36" src={logo} alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{job_title}</h2>
        <h3 className="text-lg font-semibold">{company_name}</h3>
        <div className="flex gap-2">
          <button className="btn">{remote_or_onsite}</button>
          <button className="btn">{job_type}</button>
        </div>
        <div className="flex gap-8">
          <div className="flex justify-center items-center gap-2">
            <FaLocationDot></FaLocationDot>
            <p>{location}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            <p>{salary}</p>
          </div>
        </div>
      </div>
      </div>

      <Link to={`/job/${id}`}>
        <button className="btn text-white bg-[#9775ff]">View Details</button>
      </Link>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;
