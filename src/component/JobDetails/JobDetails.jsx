import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseFloat(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applyed sucessfully");
  };

  return (
    <div className="mx-10 py-20">
      <div className="grid grid-cols-6 gap-10">
        <div className=" col-span-4">
          <h3 className="text-lg leading-relaxed pb-5">
            <span className="font-bold">Job Description : </span>
            {job_description}
          </h3>
          <h3 className="text-lg leading-relaxed pb-5">
            <span className="font-bold">Job Responsibility : </span>
            {job_responsibility}
          </h3>
          <h3 className="text-lg leading-relaxed font-bold">
            Educational Requirements :
          </h3>
          <h3 className="text-lg leading-relaxed pb-5">
            {educational_requirements}
          </h3>
          <h3 className="text-lg leading-relaxed font-bold">Experiences: :</h3>
          <h3 className="text-lg leading-relaxed">{experiences}</h3>
        </div>
        <div className=" col-span-2">
          <div className="border rounded-lg bg-[#f2f4ff] p-5">
            <h3 className="text-xl font-bold pb-3">Job Details</h3>
            <hr />
            <div className="flex items-center justify-start gap-2 py-2">
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
              <h3>
                <span className="font-bold">Salary:</span> {salary}
              </h3>
            </div>
            <div className="flex items-center justify-start gap-2 pb-2">
              <SlCalender></SlCalender>
              <h3>
                <span className="font-bold">Job Title:</span> {job_title}
              </h3>
            </div>
            <h3 className="text-xl font-bold py-3 pt-10">
              Contact Information
            </h3>
            <hr />
            <div className="flex items-center justify-start gap-2 py-2">
              <IoCallOutline></IoCallOutline>
              <h3>
                <span className="font-bold">Phone:</span>{" "}
                {contact_information.phone}
              </h3>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <MdOutlineEmail></MdOutlineEmail>
              <h3>
                <span className="font-bold">Email:</span>{" "}
                {contact_information.email}
              </h3>
            </div>
            <div className="flex items-baseline justify-start gap-2 py-2">
              <FaLocationDot></FaLocationDot>
              <h3>
                <span className="font-bold">Address:</span>{" "}
                {contact_information.address}
              </h3>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="btn w-full mt-3 text-white bg-[#9775ff]"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
