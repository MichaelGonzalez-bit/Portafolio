import React,{ useRef  } from 'react';
import "./ContactStyle.css";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ochnpkn', 'template_s6g8yfl', form.current, 'Z-m3bBeSs8gs3q946')
        .then((result) => {
          console.log(result.text);
          e.target.reset()
          swal("Sending...", {
            buttons: false,
            timer: 1800,
            className: "swal-modal",
          });  
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact_section" id='contact'>
      <h2 className="section_title">Get in Touch</h2>
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk To me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>
              <h3 className="contact_card-title">LinkenIn</h3>
              <span className="contact_card-data"></span>
              <a href="https://www.linkedin.com/in/michael-medina-9a6673213/" target="_blank" rel="noreferrer" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>
            
            <div className="contact_card">
              <i className="bx bxl-github contact_card-icon"></i>
              <h3 className="contact_card-title">GitHub</h3>
              <span className="contact_card-data"></span>
              <a href="https://github.com/MichaelGonzalez-bit" target="_blank" rel="noreferrer" className="contact_button">See me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">
            Contact Me
          </h3>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className='contact_form-tag'>Name</label>
              <input type="text" name='name' className='contact_form-input' placeholder='Insert Your name'></input>
            </div>
            <div className="contact_form-div">
              <label className='contact_form-tag'>E-mail</label>
              <input type="email" name='email' className='contact_form-input' placeholder='Insert Your mail'></input>
            </div>
            <div className="contact_form-div contact_form-area">
              <label className='contact_form-tag'>Message</label>
              <textarea name='project' cols="30" rows="10" className='contact_form-input' placeholder='Write Here'></textarea>
            </div>
            <button type='submit' className="button button--flex">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact