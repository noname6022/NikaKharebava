import React, { useEffect, useRef } from 'react';
import About from './Pages/AboutMe/About';
import Main from './Pages/Main/Main';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import MyProjects from './Pages/MyProjects/MyProjects';
import Contacts from './Pages/Contacts/Contacts';




function App() {
  const PageScroll = useRef(null);
  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
      [].forEach.bind(document.getElementsByClassName("panel"),function(itm){
        itm.style.position= "unset";
        itm.style.visibility = "visible";
      })();

             };
            });
            
  useEffect(() => {
 if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
window.onorientationchange = function() {  	window.location.reload();  window.scrollTo(0, 0); };
       };
      });


  useEffect(() => {
    
    window.onorientationchange = function() {  	window.location.reload();  window.scrollTo(0, 0); };

    if (!/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
        window.addEventListener('resize', function ()
        { "use strict"; window.location.reload(); });
        window.onbeforeunload = function () {
         window.scrollTo(0, 0);
     }
       };
      });

  useEffect(()=>{


    if (!/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
      gsap.registerPlugin(Observer);

console.clear();

let sections = document.querySelectorAll(".panel"),
   
    outerWrappers = gsap.utils.toArray(".panel"),
    innerWrappers = gsap.utils.toArray(".panel"),

    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length - 1),
    animating;

let clamp = gsap.utils.clamp(0, sections.length - 1);

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = clamp(index); // make sure it's valid
  
  // If they are the same, it's either the first or last slide
  if (index === currentIndex) {
    return;
  }
    
  animating = true;
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: {duration: 1.25, ease: "power1.inOut"},
        onComplete: () => animating = false,
      });
  if (currentIndex >= 0) { // The first time this function runs, current is -1
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to([currentIndex], { yPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], {yPercent: i => i ? -100 * dFactor : 100 * dFactor}, { yPercent: 0 }, 0)
    .fromTo([index], { yPercent: 100 * dFactor }, { yPercent: 0 }, 0)
    .fromTo([index].chars, {autoAlpha: 0, yPercent: 150 * dFactor}, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 0.2);
  
  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => {
    !animating && gotoSection(currentIndex - 1, -1)
  },
  onUp: () => {
    !animating && gotoSection(currentIndex + 1, 1)
  },
  tolerance: 10,
  preventDefault: true,
});

gotoSection(0, 1);
 

      
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
