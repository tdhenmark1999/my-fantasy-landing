import HeroSection from './components/HeroSection';
import AIFantasies from './components/AIFantasies';
import AIRoleplay from './components/AIRoleplay';
import AIVoice from './components/AIVoice';
import GeneratedAIImages from './components/GeneratedAIImages';

export default function Home() {
  return (
    <div className='mb-10'>
      <HeroSection />
      <AIFantasies />
      <AIRoleplay />
      <AIVoice />
      <GeneratedAIImages />
    </div>
  );
}
