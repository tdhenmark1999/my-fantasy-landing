import React from 'react';
import LikeButton from './LikeButton';
import { CardFantasy } from './../model/Fantasy';

interface FantasyCardProps {
  fantasy: CardFantasy;
  liked: boolean;
  onOpenModal: (fantasy: CardFantasy) => void;
  onToggleLike: (fantasy: CardFantasy, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FantasyCard: React.FC<FantasyCardProps> = ({ fantasy, liked, onOpenModal, onToggleLike }) => {
  return (
    <div
      className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onOpenModal(fantasy)}
    >
      <img
        src={fantasy.image}
        alt={fantasy.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
        <div className="flex flex-col items-start gap-2.5 mb-2">
          <img
            src={fantasy.avatar}
            alt="Avatar"
            className="w-[36px] h-[36px] rounded-full"
          />
          <h3 className="text-base font-bold text-white">{fantasy.title}</h3>
        </div>
        <p className="text-sm text-gray-100 line-clamp-2">{fantasy.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span className="bg-gray-500 text-sm text-gray-200 flex gap-1.5 items-center py-0.5 px-3 rounded-full">
              <img alt="icon views" src="/icons/ico-views.svg" /> {fantasy.views}
            </span>
            <LikeButton fantasy={fantasy} liked={liked} onToggleLike={onToggleLike} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyCard;
