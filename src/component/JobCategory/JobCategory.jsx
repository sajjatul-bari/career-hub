const JobCategory = () => {
  return (
    <div className="flex justify-center items-center gap-8 pb-10">
      <div className="p-10 bg-[#faf8ff] rounded-lg space-y-2">
        <img
          className="bg-blue-100 p-2 rounded-lg"
          src="/public/assets/icons/accounts.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Account & Finance</h3>
        <p>300 Jobs Available</p>
      </div>
      <div className="p-10 bg-[#faf8ff] rounded-lg space-y-2">
        <img
          className="bg-blue-100 p-2 rounded-lg"
          src="/public/assets/icons/creative.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Creative Design</h3>
        <p>120 Jobs Available</p>
      </div>
      <div className="p-10 bg-[#faf8ff] rounded-lg space-y-2">
        <img
          className="bg-blue-100 p-2 rounded-lg"
          src="/public/assets/icons/marketing.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Marketing & Sales</h3>
        <p>150 Jobs Available</p>
      </div>
      <div className="p-10 bg-[#faf8ff] rounded-lg space-y-2">
        <img
          className="bg-blue-100 p-2 rounded-lg"
          src="/public/assets/icons/chip.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Engineering Job</h3>
        <p>224 Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;
