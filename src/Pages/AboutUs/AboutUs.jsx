import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import Btc_about_img from "../../Assets/Images/Btc_about_img.jpg";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const paragraphStyles = {
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRemoveMoreButton, setShowRemoveMoreButton] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight);
      setShowRemoveMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, []);

  return (
    <Fade bottom distance="20%" duration={2000} easing="ease-in-out">
      <div className="aboutUs" id="about">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="about_content">
          <div className="about_text">
            <h2 className="about_text_header">
              At Beatrice Tolani Comfort Homes
            </h2>
            <p
              className="about_paragraph"
              style={isOpen ? null : paragraphStyles}
              ref={ref}
            >
              Welcome to the BEATRICE TOLANI COMFORTS'S HOMES! We're a boutique
              hotel located in the heart of Ikole Ekiti. Our hotel is known for
              its warm and inviting atmosphere, its luxurious accommodations,
              and its commitment to providing our guests with an unforgettable
              experience. Whether you're here for business or pleasure, we have
              everything you need to make your stay comfortable and enjoyable.
              Our spacious rooms and suites are equipped with all the latest
              amenities, and our staff is always on hand to provide you with
              personalized attention. In addition to our comfortable rooms and
              suites, we also offer a variety of amenities to keep you
              entertained and relaxed. We have a restaurant and bar where you
              can enjoy delicious food and drinks. We're confident that you'll
              love your stay at BEATRICE TOLANI COMFORTS'S HOMES . We're
              committed to providing our guests with the best possible
              experience, and we look forward to welcoming you to our hotel
              soon.
            </p>

            {showRemoveMoreButton && (
              <button className="about_btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Explore less" : "Explore more"}
              </button>
            )}
          </div>
          <Slide right distance="10%" duration={2000}>
            <div className="about_image">
              <img src={Btc_about_img} className="logo_img" />
            </div>
          </Slide>
        </div>
      </div>
    </Fade>
  );
}

export default AboutUs;
