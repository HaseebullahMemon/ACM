import React from 'react'

const Competation=[
  {id:1,
  image:'images/competation/image_1.png'},
  {id:2,
  image:'images/competation/image_2.png'},
  {id:3,
  image:'images/competation/image_3.png'},
  {id:4,
  image:'images/competation/image_4.png'},
  {id:5,
  image:'images/competation/image_5.png'},
  {id:6,
  image:'images/competation/image_6.png'},
  {id:7,
  image:'images/competation/image_7.png'},
  {id:8,
  image:'images/competation/image_8.png'},
  {id:9,
  image:'images/competation/image_9.png'},
  {id:10,
  image:'images/competation/image_10.png'},
]
const Sponsors=[
  { id:1,
    category:"Platinum",
    image:'images/Sponsos/s_1.jpg'
  },
  { id:5,
    category:"Gold",
    image:'images/Sponsos/s_6.jpg'
  },
  { id:2,
    category:"Silver",
    image:'images/Sponsos/s_2.jpg'
  },  
  { id:3,
    category:"",
    image:'images/Sponsos/s_3.jpg'
  },
  { id:4,
    category:"",
    image:'images/Sponsos/s_4.png'
  },
 
  { id:6,
    category:"",
    image:'images/Sponsos/s_7.jpg'
  },
 
  ]
const Itec = () => {
  return (
    <div>
        
         <div>
    <section id="home">
  <div className="container-fluid px-0 top-banner">
  <div className="container">
      <div className="row">
  <div className="col-lg-5 col-md-6">
<h1>ITEC 2022</h1>
<p>We have opened our registrations. Hurry up and get yourself registered before it gets late</p>
  </div>
<div className="mt-4">
  <a  href='https://forms.gle/sTNfdyiKaqm8WruS8' target='_blank' className="main-btn">Register Now</a>
 
</div>
      </div>
  </div>
  </div>
    </section>
  </div>  


  <div className='sponsor_section mt-5 '>
  <h1 className='text-center' >Competation</h1>
<div className="row">
{Competation.map((ele)=>{
return(
 <div className="col-lg-5 col-md-10 col-sm-5 offset-lg-1">
 <div class="card mt-5 p-3 mx-auto" style={{width: "30rem"}}>
  <img src={ele.image} class="card-img-top" alt="..."/>
<div className='text-center'>
<a  className='main-btn text-decoration-none' href='https://forms.gle/sTNfdyiKaqm8WruS8'  target='_blank'> Register Now </a>
</div>
 
  
</div>
  </div>


)
})}
 
</div>





</div>





<div className='sponsor_section mt-5'>
  <h1 className='text-center' >Sponsors</h1>
<div className="row">
{Sponsors.map((ele)=>{
return(
 <div className="col-lg-2 col-md-4 col-sm-6">
 <div class="card border-0 mx-auto " style={{width: "12rem"}}>
  <img src={ele.image} class="card-img-top" alt="..."/>
  <p className='text-danger' >{ele.category}</p>
  
</div>
  </div>


)
})}
 
</div>





</div>
  
  
  
  
  </div>
  )
}

export default Itec