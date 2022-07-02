import React from 'react'
import './Css/style.css'
import instra from './images/instagram.png'
import facebook from './images/facebook.png'
import linken from './images/linkedin.png'
import mail from './images/mail.png'
import location from './images/location.png'
import phone from './images/phone.png'

import GoogleMap from './GoogleMap'

const ContactUS = () => {
  return ( <div>

{/* 
    <!-- ====================================== Slider End ============================================ -->

    <!-- =======================================Get in touch heading ============================================ --> */}


<div style={{display:'flex',flexDirection:'column'}} >
<section>
      <div className="contact-hd container">
        <div>
        <h1 >Get in <color className="contact-hd"> touch </color></h1>
        <p>
          We are here for you, Any FAQs then ask us. Our team give you an
          immediate response.
        </p>
        </div>
     
      </div>
    </section>
    {/* <!-- ====================================Get in touch heading End============================================ -->

    <!-- ========================================= MAP ============================================ --> */}

    <section  style={{height:'270px',width:'100%',textAlign:'center',position:"relative",top:'50%',left:"-40%", }} >
      <div className="container">
      <GoogleMap/>
      </div>
    </section> 
</div>

   

    {/* <!-- ======================================= MAP END ============================================ -->

    <!-- "border:0; width: 100%; height: 270px;" -->
    <!-- ========================================= Contact Form ============================================ --> */} 

    <section>
      <div className="contact-form container">
        <div className="row">
          <div className="info col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <span>
              <img className="callme" src={location} alt="" />
              <h4>Location:</h4>
              <p>
                NED University of Engineering and Technology University Road,
                Karachi 75270
              </p>
            </span>
            <span
              ><img className="callme" src={mail} alt="" />
              <h4>Email:</h4>
              <p>info@neduet.acm.org/</p>
              <p></p
            ></span>

            <span
              ><img className="callme" src={phone} alt="" />
              <h4>Call:</h4>
              <p>922199261261-8 ext. 2503</p>
            </span>
          </div>
          <div className="inputs col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <input type="name" className="name-inp" placeholder="Your Name" />
            <input type="email" className="email-inp" placeholder="Your Email" />
            <br />
            <input type="text" className="sub-inp" placeholder="Subject" /> <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="textarea-inp"
              placeholder="Message"
            ></textarea>
<div>
<button className="submitBtn btn btn-primary text-center ">Submit</button>
</div>
            
          </div>
        </div>
      </div>
    </section>
{/* 
    <!-- ===================================== Contact Form End ============================================ -->

    <!-- ========================================= Footer ============================================ --> */}

    {/* <section>
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
          <a href="index.html" className="footer-para">Home</a> <br />
          <a href="about.html" className="footer-para"> About ACM</a> <br />
          <a href="#latest" className="footer-para">Team Mmbers</a> <br />
          <a href="products.html" className="footer-para">Join Us</a> <br />
          <a href="contact.html" className="footer-para">Contact Details</a> <br />
        </div>
        <div className="footer-box">
          <p className="footer-mat">Organization</p>
          <a href="" className="footer-para">Privacy Policy</a>
          <a href="" className="footer-para"> </a> <br />
          <a href="" className="footer-para"> Terms  Conditions</a> <br />
          <a href="" className="footer-para"> FAQs</a> <br />
          <a href="" className="footer-para">Disclaimer</a> <br />
        </div>
      </div>
    </section> */}
{/* 
    <!-- ======================================= Footer End ============================================ -->

    <!-- ========================================= Copyright ============================================ --> */}

    {/* <section className="copyright container-fluid">
      <div className="row1">
        
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <center>
            <p className="p1">
              Copyright © 2022. NEDUET ACM CHAPTER. All rights reserved
            </p>
            <p className="p2">
              Developed by <i className="hush">Team Technical</i>
            </p>
          </center>
          </div>
        
      </div>
    </section> */}







    </div>
  )
}

export default ContactUS