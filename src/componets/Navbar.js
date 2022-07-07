import React, {useState } from 'react'
import logo from './logo.png'
import {useLocation,Link}from 'react-router-dom'
const Navbar = () => {  
  const location=useLocation()
  const [scroll,SetScroll]=useState(false)
  window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
      SetScroll(true)
    }
    else{
      SetScroll(false)
    }
  })
  let navBar=document.querySelectorAll('.nav-link')
  let navCollapse=document.querySelector('.navbar-collapse.collapse')
  navBar.forEach((ele)=>{
    ele.addEventListener('click',()=>{
      navCollapse.classList.remove('show')
    })

  })
  return (
    <div  style={{width:"100%"}}>
      <nav className={`navbar navbar-expand-lg ${scroll||location.pathname!='/'?('navigation-wrap scroll-on'):("navigation-wrap")}`}>
    <div className="container">
      <a className="navbar-brand" href="#"><img src={logo} alt="" className='nav_img'  /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars-staggered navbar-toogle-btn text-primary "></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={location.pathname=='/'?'nav-link active':'nav-link'} aria-current="page" to='/'>Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link className={ location.pathname=='/team'?'nav-link active':'nav-link'} to='/team'>Team</Link>
          </li> */}
          <li className="nav-item">
            <Link className={ location.pathname=='/blog'?'nav-link active':'nav-link'} to='/blog'>Blog</Link>
          </li>
          
        
          {/* <li className="nav-item">
           <button className='main-btn'>0302-1215250</button>
          </li> */}
  
         
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar