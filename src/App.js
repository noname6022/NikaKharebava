import React, { useEffect, useRef } from 'react';
import About from './Pages/AboutMe/About';
import Main from './Pages/Main/Main';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyProjects from './Pages/MyProjects/MyProjects';
import Contacts from './Pages/Contacts/Contacts';




function App() {
  const PageScroll = useRef(null);

  useEffect(()=>{
    if (!/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
      
 
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel"),
        scrollTween;
    
    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: {y: i * window.innerHeight, autoKill: false},
        duration: 0.002,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }
    
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom bottom",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });
    
    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0, 
      end: "max",
      snap: 1 / (panels.length - 1)
    })
    
    ScrollTrigger.normalizeScroll(true);   
  };
},[]);
  return (
    <div ref={PageScroll}>
      <Main/>
      <About/>
      <MyProjects/>
      <Contacts/>
    </div>
  );
}

export default App;
