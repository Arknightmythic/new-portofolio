import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import About from "./components/About"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Skill from "./components/Skill"
import Experience from './components/Experience';
import Portofolio from './components/Portofolio';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {

      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    },
    { scope: main }
  );

  return (
    <div id="smooth-wrapper" ref={main}>
      <Navbar />
      <div className="bg-[#0A192F]" id="smooth-content">
        <Banner />
        <About />
        <Skill />
        <div className='bg-[#F5F7FA]'> <Experience />
          <Portofolio /></div>

      </div>
    </div>
  );
}

export default App;