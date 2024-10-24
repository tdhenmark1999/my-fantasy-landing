import React from 'react';

interface LikeButtonProps {
  fantasy: any;
  liked: boolean;
  onToggleLike: (fantasy: any, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ fantasy, liked, onToggleLike }) => {
  return (
    <button
      className={`bg-gray-500 text-sm flex gap-1.5 items-center py-0.5 px-3 rounded-full ${
        liked ? 'text-red-500' : 'text-gray-200'
      }`}
      onClick={(e) => onToggleLike(fantasy, e)}
    >
      <img
        alt="icon heart"
        src={liked ? "/icons/ico-heart-active.svg" : "/icons/ico-heart.svg"}
      /> 
      {fantasy.likes}
    </button>
  );
};

export default LikeButton;
