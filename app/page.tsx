import HeroSection from './components/HeroSection';
import AIFantasies from './components/AIFantasies';
import AIRoleplay from './components/AIRoleplay';
import AIVoice from './components/AIVoice';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AIFantasies />
      <AIRoleplay />
      <AIVoice />
    </div>
  );
}
