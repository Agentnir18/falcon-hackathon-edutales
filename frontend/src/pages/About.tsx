import Profile from "../components/Profile";

const teamMembers = [
  {
    name: "Mohammed R. Swara",
    image: "assets/0123b740d704d26d0be7c5eb3e90838f.jfif",
    role: "UI/UX Designer",
    linkedin: "https://iq.linkedin.com/in/mohammed-swara-3a4673182",
  },
  {
    name: "Jerom Jo",
    image: "assets/jerom.jfif",
    role: "Backend Developer/ AI Engineer",
    linkedin: "https://www.linkedin.com/in/jerom-jo-manthara",
    github: "https://github.com/lordgrim18",
  },
  {
    name: "Sajjad Ahmed",
    image: "assets/sajjad.jpg",
    role: "Content creator",
    linkedin:
      "https://www.linkedin.com/in/sajjad-ahmad-609a84266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Nirvan Bajracharya",
    image: "assets/Nir1.png",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/nirvanbajracharya/",
    github: "https://github.com/Agentnir18",
  },
  {
    name: "Dhruvaraj Nikam",
    image: "assets/dhruv.jfif",
    role: "Content creator",
    linkedin: "https://www.linkedin.com/in/dhruvaraj-nikam-778702259/",
    github: "https://github.com/dhruvarajnikkam",
  },
  {
    name: "Shamas Liaqat",
    image: "assets/shamas.png",
    role: "Assistant AI Engineer",
    linkedin: "https://www.linkedin.com/in/shamasliaqat/",
    github: "https://github.com/Shamas245",
  },
];

const About = () => {
  return (
    <div className="flex flex-col px-40">
      <div className="max-w-[50%] text-justify pt-20 pb-20">
        <h1 className="text-5xl font-bold text-secondaryColor">Hello!</h1>
        <h1 className="text-5xl font-bold text-secondaryColor">
          This is Story Wise
        </h1>
        <br/>
        <br/>
        <p className="text-m text-secondaryColor">
          StoryWise is an innovative platform that transforms complex scientific
          concepts into engaging narratives. By combining the power of
          artificial intelligence with the art of storytelling, we're revolutionizing the way people learn and understand science.
        </p>
        <br/>
        <p className="text-m text-secondaryColor">
          Tired of textbooks and jargon? So are we. That's why we created StoryWise. Our
          platform allows users to input any scientific term, article, or
          prompt, and we generate a captivating story that explains the concept in clear, accessible language.
        </p>
        <br/>
        <p className="text-m text-secondaryColor">
          Whether you're a student struggling
          with a difficult subject, a curious mind exploring new frontiers, or
          simply someone who loves a good story, StoryWise is your key to
          unlocking the universe. Join us on this exciting journey to make
          science accessible and enjoyable for everyone.
        </p>
        <br/>
        <p className="text-m text-secondaryColor">
          We make learning more enjoyable, and reading more knowledgable.
        </p>
      </div>
      <div className="justify-center items-center pt-10 pb-20">
        <h1 className="text-5xl font-bold text-secondaryColor">
          Meet our Creative Team:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <Profile
              key={index}
              name={member.name}
              role={member.role}
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
