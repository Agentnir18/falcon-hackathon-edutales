import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

// Tutorial steps data
const tutorialSteps = [
    {
      step: 1,
      heading: "Input your topic",
      description: "Enter the topic you are interested in learning more about.",
      icon: faCode
    },
    {
      step: 2,
      heading: "Choose Sitcom",
      description: "Select your favorite sitcom from our vast collection.",
      icon: faSearch
    },
    {
      step: 3,
      heading: "Read, Understand and Enjoy",
      description: "Read and understand the story or sitcom to gain insights.",
      icon: faBookOpenReader
    }
  ];
const Instructions = () => {
  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
    {tutorialSteps.map((step, index) => (
      <div key={index} className="flex flex-col items-center bg-primaryColor shadow-outer-glow shadow-secondaryColor p-10 rounded-lg">
        <div className="bg-secondaryColor text-primaryColor font-bold text-2xl rounded-full h-12 w-12 flex items-center justify-center mb-4">
          {step.step}
        </div>
        <h3 className="text-2xl font-semibold text-secondaryColor">{step.heading}</h3>
        <p className="text-center text-secondaryColor mt-2">{step.description}</p>
        <div className="text-secondaryColor mt-4">
          <FontAwesomeIcon icon={step.icon} className="h-6 w-6" />
        </div>
      </div>
    ))}
  </div>
  )
}

export default Instructions