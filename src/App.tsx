import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';


import About from "./components/About"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Skill from "./components/Skill"
import Experience from './components/Experience';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);


function App() {
  const main = useRef();
  const smoother = useRef();

  

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 1.5, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        
      });
    },{ scope: main }
    
  );
  return (
    <div id="smooth-wrapper" ref={main}>
       <Navbar />
      <div className="bg-[#0A192F]" id="smooth-content">
        <Banner />
        <About />
        <Skill />
        <Experience/>
      </div>
    </div>

  )
}

export default App