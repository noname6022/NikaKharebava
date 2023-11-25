import React, {useEffect, useState} from 'react';
import './Mainstyles.css';
import GlitchText from 'react-glitch-effect/core/GlitchText';


export const Main = () => {

  
    const [isDisabled, setDisabled] = useState(false);
    
  return (
    
        <section className='MainWrapper panel' id="Pan">

            <div className='InfoMainContainer'>

            <h2> Hi! I'm</h2>
            <GlitchText duration="3820"
            component='h1'  color1="#4CA8E5" color2="#E82167"
            disabled={isDisabled}>
           <h1>
                NIKA<br/>
                KHAREBAVA
            </h1>
         </GlitchText>

            <h3>Front-end developer</h3>
            </div>
            <div  className='AnimationMainContainer' >
            <div class="wave-text">
              NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              <br/>NIKA KHAREBAVA NIKA KHAREBAVA NIKA KHAREBAVA 
              
            </div>
            </div>  
            {/*scroll or die element*/}
            <div className='ScrollTextBlock'>
              <span>Scroll or die</span>
              <div class="scroll-down"></div>
              <span>Scroll or die</span>

            </div>

        </section >

  )
}
export default Main;

