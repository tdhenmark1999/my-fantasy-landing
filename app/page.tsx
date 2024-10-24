"use client";

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AIFantasies from './components/AIFantasies';
import AIRoleplay from './components/AIRoleplay';
import AIVoice from './components/AIVoice';
import GeneratedAIImages from './components/GeneratedAIImages';
import SwitcherModal from './components/SwitcherModal';
import Navbar from './components/Navbar';
import { ClipLoader } from 'react-spinners';

import {
  charactersAnime,
  fantasiesAnime,
  charactersRolePlayAnime,
  voiceCharactersAnime,
  generatedAiImageAnime,
} from './data/anime'; 

import {
  charactersGirls,
  fantasiesGirls,
  charactersRolePlayGirls,
  voiceCharactersGirls,
  generatedAiImageGirls,
} from './data/girls'; 

import {
  charactersGuys,
  fantasiesGuys,
  charactersRolePlayGuys,
  voiceCharactersGuys,
  generatedAiImageGuys,
} from './data/guys'; 

export default function Home() {
  const [currentHeroSection, setCurrentHeroSection] = useState(charactersGirls);
  const [currentFantasies, setCurrentFantasies] = useState(fantasiesGirls); 
  const [currentRolePlay, setCurrentRolePlay] = useState(charactersRolePlayGirls); 
  const [currentVoiceCharacters, setCurrentVoiceCharacters] = useState(voiceCharactersGirls);
  const [currentAIImages, setCurrentAIImages] = useState(generatedAiImageGirls);
  const [activeCategory, setActiveCategory] = useState<string>('girls'); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsModalVisible(true);
    }
  }, []);

  const handleCategorySelect = (category: string) => {
    setLoading(true);

    const lowerCaseCategory = category.toLowerCase();
    setActiveCategory(lowerCaseCategory);

    setTimeout(() => {
      switch (lowerCaseCategory) {
        case 'girls':
          setCurrentHeroSection(charactersGirls);
          setCurrentFantasies(fantasiesGirls);
          setCurrentRolePlay(charactersRolePlayGirls); 
          setCurrentVoiceCharacters(voiceCharactersGirls); 
          setCurrentAIImages(generatedAiImageGirls); 
          break;
        case 'anime':
          setCurrentHeroSection(charactersAnime);
          setCurrentFantasies(fantasiesAnime);
          setCurrentRolePlay(charactersRolePlayAnime); 
          setCurrentVoiceCharacters(voiceCharactersAnime);
          setCurrentAIImages(generatedAiImageAnime); 
          break;
        case 'guys':
          setCurrentHeroSection(charactersGuys);
          setCurrentFantasies(fantasiesGuys); 
          setCurrentRolePlay(charactersRolePlayGuys); 
          setCurrentVoiceCharacters(voiceCharactersGuys); 
          setCurrentAIImages(generatedAiImageGuys); 
          break;
        default:
          setCurrentHeroSection(charactersGirls);
          setCurrentFantasies(fantasiesGirls);
          setCurrentRolePlay(charactersRolePlayGirls); 
          setCurrentVoiceCharacters(voiceCharactersGirls); 
          setCurrentAIImages(generatedAiImageGirls); 
          break;
      }

      setLoading(false); 
      setIsModalVisible(false);
      localStorage.setItem('hasVisited', 'true');
    }, 1000); 
  };

  return (
    <div className='mb-10'>


      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-70 bg-black z-50">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      )}

      {!loading && (
        <>
          {isModalVisible && <SwitcherModal onSelect={handleCategorySelect} />}
          <Navbar activeCategory={activeCategory} onSelect={handleCategorySelect} />
          <HeroSection data={currentHeroSection} />
          <AIFantasies data={currentFantasies} /> 
          <AIRoleplay data={currentRolePlay} /> 
          <AIVoice data={currentVoiceCharacters} /> 
          <GeneratedAIImages data={currentAIImages} /> 
        </>
      )}
    </div>
  );
}
