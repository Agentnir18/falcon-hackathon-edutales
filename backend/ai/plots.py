import enum

story_plots = [
    "Please create a story where two children, Leo and Mia, visit their Uncle Max's lab and learn about the above given content through a series of explanations and experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two friends, Alex and Zoe, visit Professor Zara's enchanted garden. They encounter various plants and animals, and Professor Zara explains the given content through magical demonstrations and interactive experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two siblings, Sam and Lily, embark on a journey to the Land of Science. They meet a wise old owl who guides them through the land, explaining the given content through riddles and puzzles. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two students, Jack and Emma, discover a hidden laboratory in their school. They meet a quirky scientist who teaches them about the given content through fun and interactive experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two cousins, Ben and Sarah, stumble upon a time machine in their attic. They travel back in time to meet famous scientists who explain the given content through their groundbreaking discoveries. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two adventurers, Max and Lily, explore a mysterious island. They encounter strange creatures and natural phenomena that help them understand the given content. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two siblings, Jake and Mia, receive a magical book that transports them to different worlds. They meet characters who explain the given content through fantastical adventures and quests. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where two friends, Alex and Zoe, visit a futuristic science fair. They participate in experiments and demonstrations that help them grasp the given content. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where siblings, Sam and Lily, join Captain Orion on his spaceship. During their journey through space, Captain Orion teaches them about the given content using futuristic gadgets and space adventures. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where cousins, Ben and Emma, visit Dr. Luna's observatory on a mountain. They use telescopes and other scientific instruments to explore the given content, with Dr. Luna providing clear explanations and conducting exciting experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where friends, Max and Ivy, discover a hidden magical library with Ms. Elara, the librarian. They read enchanted books and experience the given content coming to life through interactive stories and Ms. Elara's engaging explanations. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where siblings, Jake and Mia, dive into the ocean with Captain Coral. They explore the underwater world and learn about the given content through fascinating sea creatures and Captain Coral's underwater experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where friends, Tim and Ella, travel through time with Dr. Chronos. They visit different historical periods and learn about the given content through historical events and Dr. Chronos's explanations. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where students, Ryan and Sophie, attend a special class at the Galactic School with Ms. Nova. They explore the given content through interactive lessons and Ms. Nova's creative teaching methods. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where siblings, Noah and Lily, discover a secret cave with Explorer Mia. Inside the cave, they find ancient artifacts and learn about the given content through Explorer Mia's discoveries and explanations. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of classmates—Ethan, Fiona, Gabe, and Hannah—visit Discovery Park. They team up to solve scientific puzzles and participate in interactive exhibits that teach them about the given content. The story should have dialogue between the characters, with each one sharing insights and learning from each other to explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of young inventors—Jack, Katie, Leo, and Maya—enter a workshop challenge to build a project based on the given content. They brainstorm ideas, build prototypes, and conduct experiments together. The story should have dialogue between the characters, with each inventor offering different perspectives and collaborating to explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of friends—Nick, Olivia, Paul, and Quinn—call themselves the Science Squad. They are given a mystery mission to solve a scientific riddle involving the given content. They work together, using clues and conducting experiments, to uncover the solution. The story should have dialogue between the characters, with each friend contributing to the explanation of the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of students—Riley, Sam, Tessa, and Umi—go on a field trip organized by their school's STEM club. They visit different stations that demonstrate the given content through hands-on activities and experiments. The story should have dialogue between the characters, with each student explaining parts of the scientific concepts they discover in a way that is easy to understand.",
    "Please create a story where a group of friends—Violet, Will, Xander, and Yara—go on a camping adventure. They explore the natural surroundings and conduct outdoor experiments related to the given content. The story should have dialogue between the characters, with each one making observations and learning together to explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of kids—Zane, Abby, Ben, and Cara—attend a science festival. They participate in different booths and activities that teach them about the given content. The story should have dialogue between the characters, with each one engaging in the learning process and sharing their understanding to explain the scientific concepts in a way that is easy to understand.",
    "Please create a story where a group of friends—Dylan, Emily, Finn, and Grace—visit a science museum. They explore various exhibits and participate in interactive demonstrations related to the given content. The story should have dialogue between the characters, with each friend discovering new information and explaining the scientific concepts to each other in a way that is easy to understand.",

]

class Sitcoms(enum.Enum):
    THE_BIG_BANG_THEORY = "The Big Bang Theory"
    FRIENDS = "Friends"
    THE_OFFICE = "The Office"
    PARKS_AND_RECREATION = "Parks and Recreation"
    BROOKLYN_NINE_NINE = "Brooklyn Nine-Nine"
    HOW_I_MET_YOUR_MOTHER = "How I Met Your Mother"
    MODERN_FAMILY = "Modern Family"
    THE_SIMPSONS = "The Simpsons"
    SEINFELD = "Seinfeld"
    THE_GOOD_PLACE = "The Good Place"
    BLACKISH = "Black-ish"
    THE_MARVELOUS_MRS_MAISEL = "The Marvelous Mrs. Maisel"
    SCHITTS_CREEK = "Schitt's Creek"
    THE_CROWN = "The Crown"
    STRANGER_THINGS = "Stranger Things"
    THE_MANDALORIAN = "The Mandalorian"
    THE_WITCHER = "The Witcher"
    THE_UMBRELLA_ACADEMY = "The Umbrella Academy"

    @classmethod
    def get_all_values(cls):
        return [member.value for member in cls]