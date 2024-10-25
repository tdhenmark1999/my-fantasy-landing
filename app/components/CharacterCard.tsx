import Image from "next/image";

interface CharacterCardProps {
  character: {
    name: string;
    image: string;
    description: string;
  };
  width?: string;
  height?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div
      className={`bg-gray-800 rounded-2xl overflow-hidden transition-transform transform hover:scale-105 relative`}
      style={{ width }}
    >
      <div className="image-overlay"></div>
      <div style={{ height: height, position: 'relative', width: width }}>
        <Image
          src={character.image}
          alt={character.name}
          layout="fill" 
          objectFit="cover"
          className="object-cover"
        />
      </div>


      <div className="absolute bottom-0 left-0 w-full p-4 bg-transparent from-gray-800 to-transparent">
        <h3 className="text-xl font-semibold text-white">{character.name}</h3>
        <p className="text-gray-300 text-sm mt-1 line-clamp-2">
          {character.description}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
