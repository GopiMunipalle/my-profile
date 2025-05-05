import DeveloperImage from "../../assets/devloper.jpeg";
import HomeText from "../../utils/HomeText";
import CircleSections from "../CirclesComponent";

function Home() {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center px-4 md:px-12">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <CircleSections />
      </div>
      <div className="w-full md:w-1/2 text-center">
        <img
          src={DeveloperImage}
          alt="Developer"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4"
        />
        <h1 className="text-xl md:text-3xl font-bold text-white mb-2">
          {HomeText.HEADING}
        </h1>
        <p className="text-sm md:text-lg text-gray-400">
          {HomeText.DESCRIPTION}
        </p>
        <p className="text-sm md:text-lg text-gray-400">
          {HomeText.DESCRIPTION_2}
        </p>
      </div>
    </div>
  );
}

export default Home;
