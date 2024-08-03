import React from "react";
import Profile from "../components/Profile";

const teamMembers = [
  { name: "Mohammed R. Swara", image: "src/assets/0123b740d704d26d0be7c5eb3e90838f.jfif", linkedin: "#", github: "#" },
  { name: "Jerom", image: "src/assets/jerom.jfif", linkedin: "#", github: "#" },
  { name: "Sajjad Ahmed", image: "src/assets/sajjad.jpg", linkedin: "#", github: "#" },
  { name: "Nirvan Bajracharya", image: "src/assets/sajjad.jpg", linkedin: "#", github: "#" },
  { name: "Dhruv", image: "src/assets/dhruv.jfif", linkedin: "#", github: "#" },
  { name: "Shamas", image: "src/assets/shamas.png", linkedin: "#", github: "#" },
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

