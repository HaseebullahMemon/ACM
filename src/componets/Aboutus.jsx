import React from 'react';
import '.././App.css';
export default function Aboutus() {
  return (
   <React.Fragment>
    
    
  <div className='about-sec'>
       <div id="about">
    <h1>About Us</h1>
    <h3>Know who we are</h3>
  </div>
  <div class="col-md-8">
    <div id="text-sec">
      <hgroup class="slogan align-center opacityRun">
        <h1>What is<span> ACM </span>?</h1>
        <h5 className='head'><b>ACM stands for Association for Computing Machinery.</b>The world’s largest
          educational and scientific computing society, delivers resources that advance computing as a science and a
          profession. ACM serves its members and the computing profession with leading-edge publications, conferences,
          and career resources.</h5>
      </hgroup>
    </div>
    <div id="img-sec">
      <p>
        <img class="about_acm" src="myimage.jpeg" alt=""/>
        
      </p>

    </div>

  </div>

<div className='parent-div'>
<div className="logo1">
<img className="about1" src="http://neduet.acm.org/images/ned.png" alt=""/>


     
      
 
</div>
<div  className='logo2'  >


<img className="about" src="myimage.jpeg" alt=""/>

</div>





  
   
  
 

    <div class="col-md-6">

      <hgroup class="slogan align-center opacityRun">
        <h1 className='acm-head'>What is<span> NEDUET ACM Student Chapter</span>?</h1>
     
        <h5 class="txt">NEDUET ACM Student Chapter has been established with a purpose to elevate the development of
          future computer enthusiasts and professionals by offering networking opportunities and access to the resources
          of one of the largest and renowned student organizations in the world, ACM - Association for Computing
          Machinery. This chapter aspires to be a diverse group of students with computer related interests, who direct
          their skills to advance the field of computing at NED. The aim is to conduct workshops, seminars in order to
          keep the students and the faculty members of NED, aware of cutting-edge technology, thus helping them in
          keeping up their pace with other geeks around the globe. </h5>
      </hgroup>
    </div>
    </div>
    </div>
    </React.Fragment>
    


 

    
  
      

    
  )
}


