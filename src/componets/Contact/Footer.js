import React from 'react'
import './Css/style.css'
import instra from './images/instagram.png'
import facebook from './images/facebook.png'
import linken from './images/linkedin.png'
import {Link}from 'react-router-dom'
// import mail from './images/mail.png'
// import location from './images/location.png'
// import phone from './images/phone.png'

const footer = () => {
  return (
    <div> <section>
    <div className="footer">
      <div className="footer-box">
        <p className="footer-mat">Contact Us</p>
        <p className="footer-para"><b>Email: </b> info@neduet.acm.org/</p>
        <p className="footer-para"><b>Phone:</b> 922199261261-8 ext. 2503</p>
        <a href="https://web.facebook.com/ned.acm/?_rdc=1_rdr"
          ><img src={facebook} height="20px" width="20px"
        /></a>
        <a href="#"
          ><img src={instra} height="20px" width="20px"
        /></a>
        <a
          href="https://www.linkedin.com/company/neduet---acm-student-chapter/?originalSubdomain=pk"
          ><img src={linken} height="20px" width="20px"
        /></a>
      </div>
      <div className="footer-box">
        <p className="footer-mat">Information  Quick Access</p>
        <Link to='/' className="footer-para">Home</Link> <br />
        {/* <a href="about.html" className="footer-para"> About ACM</a> <br />
        <a href="#latest" className="footer-para">Team Mmbers</a> <br /> */}
        <Link to='/blog' className="footer-para">Blogs</Link> <br />
        <Link to='/' className="footer-para">Contact Details</Link> <br />
      </div>
      {/* <div className="footer-box">
        <p className="footer-mat">Organization</p>
        <a href="" className="footer-para">Privacy Policy</a>
        <a href="" className="footer-para"> </a> <br />
        <a href="" className="footer-para"> Terms  Conditions</a> <br />
        <a href="" className="footer-para"> FAQs</a> <br />
        <a href="" className="footer-para">Disclaimer</a> <br />
      </div> */}
    </div>
  </section>
{/* 
  <!-- ======================================= Footer End ============================================ -->

  <!-- ========================================= Copyright ============================================ --> */}

  <section className="copyright container-fluid">
    <div className="row1">
      
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <center>
          <p className="p1 text-muted">
            Copyright © 2022. NEDUET ACM CHAPTER. All rights reserved
          </p>
          <p className="p2 text-muted">
            Developed by <i className="hush  text-primary">Team Technical</i>
          </p>
        </center>
        </div>
      
    </div>
  </section>
</div>
  )
}

export default footer