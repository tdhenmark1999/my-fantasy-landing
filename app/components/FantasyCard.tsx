import React from 'react';
import LikeButton from './LikeButton';
import { CardFantasy } from './../model/Fantasy';
import Image from 'next/image';

interface FantasyCardProps {
  fantasy: CardFantasy;
  liked: boolean;
  onOpenModal: (fantasy: CardFantasy) => void;
  onToggleLike: (fantasy: CardFantasy, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FantasyCard: React.FC<FantasyCardProps> = ({ fantasy, liked, onOpenModal, onToggleLike }) => {
  return (
    <div
      className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer h-64"
      onClick={() => onOpenModal(fantasy)}
    >
      <Image
        src={fantasy.image}
        alt={fantasy.title}
        layout="responsive"
        height={255}
        width={100}
        className="w-full h-64 object-cover rounded-t-lg"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
        <div className="flex flex-col items-start gap-2.5 mb-2">
          <Image
            src={fantasy.avatar}
            alt="Avatar"
            height={36}
            width={36}
            className="rounded-full"
          />
          <h3 className="text-base font-bold text-white">{fantasy.title}</h3>
        </div>
        <p className="text-sm text-gray-100 line-clamp-2">{fantasy.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span className="bg-gray-500 text-sm text-gray-200 flex gap-1.5 items-center py-0.5 px-3 rounded-full">
              <Image alt="icon views" src="/icons/ico-views.svg" width={8.17} height={10.5} /> {fantasy.views}
            </span>
            <LikeButton fantasy={fantasy} liked={liked} onToggleLike={onToggleLike} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyCard;
