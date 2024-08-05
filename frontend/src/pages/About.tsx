import Profile from "../components/Profile";

const teamMembers = [
  { name: "Mohammed R. Swara", image: "src/assets/0123b740d704d26d0be7c5eb3e90838f.jfif", linkedin: "https://iq.linkedin.com/in/mohammed-swara-3a4673182" },
  { name: "Jerom Jo", image: "src/assets/jerom.jfif", linkedin: "https://www.linkedin.com/in/jerom-jo-manthara", github: "https://github.com/lordgrim18" },
  { name: "Sajjad Ahmed", image: "src/assets/sajjad.jpg", linkedin: "https://www.linkedin.com/in/sajjad-ahmad-609a84266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "Nirvan Bajracharya", image: "src/assets/Nir1.png", linkedin: "https://www.linkedin.com/in/nirvanbajracharya/", github: "https://github.com/Agentnir18" },
  { name: "Dhruvaraj Nikam", image: "src/assets/dhruv.jfif", linkedin: "https://www.linkedin.com/in/dhruvaraj-nikam-778702259/", github: "https://github.com/dhruvarajnikkam" },
  { name: "Shamas Liaqat", image: "src/assets/shamas.png", linkedin: "https://www.linkedin.com/in/shamasliaqat/", github: "https://github.com/Shamas245" },
];

const About = () => {
  return (
    <div className="flex flex-col px-40">
      <div className="pt-20 pb-20">
        <h1 className="text-5xl font-bold text-secondaryColor">Hello!</h1>
        <h1 className="text-5xl font-bold text-secondaryColor">This is Story Wise</h1>
        <p className="text-m text-secondaryColor">Description part</p>
      </div>
      <div className="justify-center items-center pt-10 pb-20">
        <h1 className="text-5xl font-bold text-secondaryColor">Meet our Creative Team:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <Profile 
              key={index} 
              name={member.name} 
              image={member.image}  
              linkedin={member.linkedin} 
              github={member.github} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

