import { Link } from "react-router-dom";
import CardSlider from "../components/CardSlider";
import Instructions from "../components/Instructions";

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="pt-10 pb-20 px-10 flex flex-col gap-10 items-start space-y-4">
        <div>
          <h1 className="text-5xl font-bold text-secondaryColor">Story Wise</h1>
          <h2 className="text-xl text-secondaryColor">Learn and Enjoy</h2>
        </div>
        <Link to="/stories" className="bg-secondaryColor text-primaryColor font-bold px-4 py-2 rounded-md">
          Try Now
        </Link>
      </div>

      {/* Project Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-secondaryColor">
          What our Project does
        </h2>
        <p className="text-lg text-secondaryColor mt-2">
          Something I am too lazy to type right now
        </p>
      </div>

      {/* Instructions Section */}
      <Instructions />

      {/* Demo Slider Section */}
      <div>
        <CardSlider title="Demo Stories" />
      </div>
    </div>
  );
};

export default Home;
