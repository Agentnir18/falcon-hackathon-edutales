import { Link } from "react-router-dom";
import CardSlider from "../components/CardSlider";
import Instructions from "../components/Instructions";

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="pt-10 pb-20 px-10 flex flex-col gap-10 items-start h-[50vh] space-y-4">
        <div>
          <h1 className="text-5xl font-bold text-secondaryColor">Story Wise</h1>
          <h2 className="text-xl text-secondaryColor">Learn and Enjoy</h2>
        </div>
        <Link to="/generate" className="bg-secondaryColor text-primaryColor font-bold px-4 py-2 rounded-md">
          Try Now
        </Link>
        <img src="assets/Picsart.jpg" alt="hero" className="absolute right-0 top-0 w-[50%] h-[60vh] z-[-1]" />
      </div>

      {/* Project Section */}
      <div className="text-center flex flex-col items-center px-10 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2 className="text-4xl font-bold text-secondaryColor">
            Ever felt something is hard to learn?
          </h2>
          <h2 className="text-4xl font-bold text-secondaryColor">
            Can't grasp concepts?
          </h2>
          <h2 className="text-4xl font-bold text-secondaryColor">
            Tired of hard-to-understand theory?
          </h2>
        </div>
        <p className="text-lg text-secondaryColor mt-2 max-w-4xl">
          We introduce to you Story Wise. Here for your knowledge and education, we provide scientific stories to make science easier. We make science fun with our sitcoms. You can read, watch, and generate your own stories or sitcoms.
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
