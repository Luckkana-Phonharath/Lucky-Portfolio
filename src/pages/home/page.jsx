import { HeroSection } from './hero-section';
import { AboutMe } from './about-me';
import { SelectedWork } from './selected-work';
import { MySkills } from './my-skills';
import { Connect } from '../../components/connect';

export function Home() {
  return (

    <div>
      <HeroSection/>
      <AboutMe />
      <SelectedWork />
      <MySkills />
      <Connect />
    </div>
  );
    
}