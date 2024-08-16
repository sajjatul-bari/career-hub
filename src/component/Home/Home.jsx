import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HeadingText from "../HeadingText/HeadingText";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HeadingText></HeadingText>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
