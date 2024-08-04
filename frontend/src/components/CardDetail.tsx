import React from "react";
import { useParams } from "react-router-dom";
import cardData from "../assets/cardData.json";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = ["Drama", "Tech", "Health", "Mystery"];

const CardDetail = () => {
  const { id } = useParams<{ id: string }>(); // Type the params object
  const cardId = parseInt(id || "", 10); // Convert id to a number, default to 0 if undefined
  const card = cardData.find((card) => card.id === cardId);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        <img
          src={card.image}
          alt={card.title}
          className="rounded-lg shadow-lg w-full md:w-1/2 h-auto object-cover"
        />
        <div className="flex-1 md:pl-6 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-secondaryColor">
            {card.title}
          </h1>
          <div className="flex whitespace-nowrap my-3 no-scrollbar ">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-secondaryColor rounded-full px-4  mx-2 text-primaryColor"
              >
                {category}
              </button>
            ))}
          </div>
          <button className="flex items-center mt-4 bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none">
            Add to favourites
            <FontAwesomeIcon icon={faHeart} className="ml-2" />
          </button>
        </div>
      </div>
      <p className="mt-6 w-full max-w-4xl whitespace-pre-line text-secondaryColor">
        Once upon a time, in a bustling city called Sudsyville, lived a very
        special soap named Sudsy. He wasn't just any soap; he was a superhero
        soap with a mission to keep the city sparkling clean! Sudsy was made of
        a magical formula, a blend of sodium hydroxide and fatty acids, which
        gave him incredible powers. Sodium hydroxide, the strong and brave part
        of him, gave him the courage to tackle the toughest dirt. Fatty acids,
        the gentle and caring part, ensured he was kind to the skin. Together,
        they made Sudsy the ultimate cleaning champion. Sudsy lived in a
        colorful soap dispenser, his fortress of cleanliness. When the city was
        threatened by grime and gunk, a distress call would echo through the
        pipes. That’s when Sudsy would spring into action, transforming into a
        foamy superhero, his body shimmering with a bubbly cape. His
        arch-nemesis was Grime, a slimy, green creature who loved to cover
        everything in a sticky, gross mess. Grime was made of a mixture of oil
        and dirt, a perfect recipe for disaster. Sudsy and Grime were constantly
        battling it out, Sudsy's soapy powers always triumphing over Grime's
        sticky schemes. Let's see Sudsy in action. One day, a big, greasy mess
        covered the city park. Children couldn't play, and animals were slipping
        and sliding everywhere. It was Grime's doing! Sudsy arrived, his soapy
        body gleaming in the sunlight. He explained to the kids, "I'm Sudsy, the
        soap superhero! I'm here to save the day with my soapy powers!" Sudsy
        charged towards the mess, his soapy body creating a foamy shield around
        him. As he touched the grime, a magical reaction occurred. The sodium
        hydroxide in Sudsy broke down the oil in Grime, while the fatty acids
        surrounded the dirt particles, lifting them off the ground. Soon, the
        park was clean and sparkling, the children cheering and the animals
        happily playing. Sudsy didn't just clean up parks; he cleaned
        everything! He cleaned dirty dishes, making them shine like new. He
        cleaned sticky hands, leaving them soft and smooth. He even cleaned the
        air, removing pollutants and making the city smell fresh. But Sudsy's
        powers weren't just about cleaning. He also taught people about hygiene.
        He explained how germs spread and why it's important to wash hands
        regularly. He showed kids how to brush their teeth properly and take
        care of their bodies. Sudsy was more than just a soap; he was a friend,
        a teacher, and a protector. He was the superhero of cleanliness, keeping
        Sudsyville sparkling and its citizens happy and healthy. And so, the
        adventure of Sudsy the soap continued, always ready to tackle the next
        mess and teach another lesson in hygiene. Would you like to hear another
        adventure of Sudsy?
      </p>
    </div>
  );
};

export default CardDetail;
