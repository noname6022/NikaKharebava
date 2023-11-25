import React from 'react'
import './MyProjectsStyles.css';
import SlideShow from './Slider/Slider';

export const MyProjects = () => {
  return (
    
    <section className='MyProjectsWrapper panel' id="Pan">
      {/* marquee*/}
      <div className='TitleMyProjectsContainer'>
    <div class="marquee">
  <div class="track">
    <div class="content">&nbsp;my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects
     my projects my projects my projects my projects my projects my projects my projects 
     my projects my projects my projects my projects my projects my projects my projects
      my projects my projects my projects my projects my projects my projects my projects
       my projects my projects my projects my projects my projects my projects my projects
        my projects</div>
  </div>
</div>
    </div>
    {/* marquee end*/}
  
    <SlideShow/>

          {/* marquee*/}
          <div className='TitleMyProjectsContainer'>
    <div class="marquee">
  <div class="track">
    <div class="content">&nbsp;my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects 
    my projects my projects my projects my projects my projects my projects my projects
     my projects my projects my projects my projects my projects my projects my projects 
     my projects my projects my projects my projects my projects my projects my projects
      my projects my projects my projects my projects my projects my projects my projects
       my projects my projects my projects my projects my projects my projects my projects
        my projects</div>
  </div>
</div>
    </div>
    {/* marquee end*/}

</section >
  )
}
export default MyProjects;