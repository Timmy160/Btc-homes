import React from "react";
import "./Contact.css";
import ContactImg from "../../Assets/Images/ContactImg.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function ContactUs() {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2imo01",
        "template_h0ihuli",
        form.current,
        "XJjjl4tvJyQciEkKp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Fade bottom distance="20%" duration={2000} easing="ease-in-out">
      <div className="ContactUs" id="contact">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_header_text">
          We are committed to make your stay most comfortable. Kindly contact us
          for more info, questions and/or special requests.
        </div>
        <div className="contact_part">
          <div className="contact_container">
            <form ref={form} onSubmit={sendMessage}>
              <input
                type="text"
                name="first_name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
              ></textarea>
              <button type="submit" className="contact_btn">
                Send
              </button>
            </form>
          </div>
          <Slide right distance="20%" duration={2000}>
            <div className="contact_image">
              <img src={ContactImg} />
            </div>
          </Slide>
          <Fade bottom distance="20%" duration={1000}>
            <div className="phone_numbers">
              <LocalPhoneIcon />
              <a href="tel:+2348158556607">08158556607</a>
              <a href="tel:+2349044047877">09044047877</a>
              <a href="tel:+2348138311781">08138311781</a>
            </div>
            <div className="location">
              <LocationOnIcon className="location_icon" />
              <>
                Adjacent Federal University of Oye (ikole Campus) along
                Ikole-Omuo express road, Ikole Ekiti. 5Mins walk away from
                school gate.
              </>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default ContactUs;
