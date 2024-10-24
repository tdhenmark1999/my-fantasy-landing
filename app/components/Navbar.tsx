interface NavbarProps {
    activeCategory: string; 
    onSelect: (category: string) => void;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ activeCategory, onSelect }) => {
    return (
      <nav className="px-4 sm:px-6 lg:px-8 py-4 flex justify-start space-x-8 text-white">
        <a
          href="#"
          className={`hover:text-red-500 text-base ${
            activeCategory === 'girls' ? 'text-red-500 font-semibold' : ''
          }`}
          onClick={() => onSelect('girls')}
        >
          Girls
        </a>
        <a
          href="#"
          className={`hover:text-red-500 text-base ${
            activeCategory === 'anime' ? 'text-red-500 font-semibold' : ''
          }`}
          onClick={() => onSelect('anime')}
        >
          Anime
        </a>
        <a
          href="#"
          className={`hover:text-red-500 text-base ${
            activeCategory === 'guys' ? 'text-red-500 font-semibold' : ''
          }`}
          onClick={() => onSelect('guys')}
        >
          Guys
        </a>
      </nav>
    );
  };
  
  export default Navbar;
  