import React from 'react';
import './AboutStyles.css';
import aboutMeImg from '../../media/aboutMeImage.webp';
import AboutCharts from  '../../components/Charts';
export const About = () => {
  return (
    <section className='AboutWrapper panel' id="Pan">
      {/* marquee*/}
    <div className='TitleAboutContainer'>
    <div class="marquee">
  <div class="track">
    <div class="content">&nbsp;about me about me about me about me 
    about me about me about me about me about me about me about me 
    about me about me about me about me about me about me about me 
    about me about me about me about me about me about me about me
     about me about me about me about me about me about me about me 
     about me about me about me about me about me about me about me
      about me about me about me about me about me about me about me
       about me about me about me about me about me about me about me
        about me</div>
  </div>
</div>
    </div>
    {/* marquee end*/}
    <div className='aboutMecontainer'>
      <div className='AboutMeInfoContainer'>
      <div className='InfoAboutMe'>
        <span>H</span><p>ello, I'm Nika and thank you for </p>
        <p className='InfoAboutMe second' >
            visiting my website! I'm a front-
            <br/>end dveloper from Georgia with
            <br/>over a year of experience.
           </p>
           </div>
           <div className='ChartAboutMe'>
            <div className='SkillsText'>
        <span>M</span><p>y skills</p></div>
        <div>
          <div className='chartsWrapper' >
        <AboutCharts  id="container"/>
        </div>
           </div>
           </div>
           </div>

           <div className='imgAboutMe'>
            <div className='AboutMeWhiteSquare'></div>

          <img src={aboutMeImg}/>

           </div>

    </div>

          {/* marquee*/}
          <div className='TitleAboutContainer'>
    <div class="marquee">
  <div class="track">
    <div class="content">&nbsp;about me about me about me about me 
    about me about me about me about me about me about me about me 
    about me about me about me about me about me about me about me 
    about me about me about me about me about me about me about me
     about me about me about me about me about me about me about me 
     about me about me about me about me about me about me about me
      about me about me about me about me about me about me about me
       about me about me about me about me about me about me about me
        about me</div>
  </div>
</div>
    </div>
    {/* marquee end*/}

</section >
  )
}
export default About;