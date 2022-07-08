import React from 'react'
import './Css/style.css'
import instra from './images/instagram.png'
import facebook from './images/facebook.png'
import linken from './images/linkedin.png'
import mail from './images/mail.png'
import location from './images/location.png'
import emailjs from 'emailjs-com'
import phone from './images/phone.png'
import GoogleMap from './GoogleMap'

const ContactUS = () => {

  const SendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_1aokfrh","template_cdig3pj",e.target,"-xx5_kCJruiP-PbPt").then((res)=>{
console.log(res.text)
    })  
  }



  return (<div>

    {/* 
    <!-- ====================================== Slider End ============================================ -->

    <!-- =======================================Get in touch heading ============================================ --> */}


    <div style={{ display: 'flex', flexDirection: 'column' }} >
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

      {/* <section  style={{height:'270px',width:'100%',textAlign:'center',position:"relative",top:'50%',left:"-40%", }} >
      <div className="container">
      <GoogleMap/>
      </div>
    </section>  */}
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
              <p>acmneduet@gmail.com</p>
              <p></p
              ></span>

            <span
            ><img className="callme" src={phone} alt="" />
              <h4>Call:</h4>
              <p>+923021215250</p>
            </span>
          </div>
          <div className="inputs col-sm-12 col-md-7 col-lg-7 col-xl-7">
          {/* action="mailto:haseebullahmemon33@gmail.com" method='POST' */}
            <form  onSubmit={SendEmail}  >

              <input type="text" name='name' className="name-inp" placeholder="Your Name" required />
              <input type="email" name='email' className="email-inp" placeholder="Your Email" required />
              <br />
              <input type="text" name='subject' className="sub-inp" placeholder="Subject" required /> <br />
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="textarea-inp"
                placeholder="message"
                required
              ></textarea>
              <div>
                <input type='submit' className="submitBtn btn btn-primary text-center " title='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ContactUS