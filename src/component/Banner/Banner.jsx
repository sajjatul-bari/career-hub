const Banner = () => {
  return (
    <div className="hero bg-[#faf8ff] min-h-screen px-10">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div className="w-2/5">
          <img
            src="/public/assets/images/user.png"
            className="max-w-xl rounded-lg  "
          />
        </div>

        <div className="w-3/5">
          <h1 className="text-6xl font-extrabold leading-normal">
            One Step <br /> Closer To Your <br />
            <span className="text-[#9775ff]">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn text-white bg-[#9775ff]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
