import React from 'react';
import { CardFantasy } from './../model/Fantasy';
import Image from 'next/image';

interface LikeButtonProps {
  fantasy: CardFantasy;
  liked: boolean;
  onToggleLike: (fantasy: CardFantasy, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ fantasy, liked, onToggleLike }) => {
  return (
    <button
      className={`bg-gray-500 text-sm flex gap-1.5 items-center py-0.5 px-3 rounded-full ${
        liked ? 'text-red-500' : 'text-gray-200'
      }`}
      onClick={(e) => onToggleLike(fantasy, e)}
    >
      <Image
        alt="icon heart"
        src={liked ? "/icons/ico-heart-active.svg" : "/icons/ico-heart.svg"}
        width={16}  
        height={16} 
      />
      {fantasy.likes}
    </button>
  );
};

export default LikeButton;
