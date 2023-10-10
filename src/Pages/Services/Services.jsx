import { React, useState, useRef, useEffect } from "react";
import "./Services.css";
// import Btc_img_services from "../../Assets/Images/Btc_img_services.jpg";
import Snooker from "../../Assets/Images/Snooker.jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const paragraphStyles = {
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRemoveMoreButton, setShowRemoveMoreButton] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current.scrollHeight, ref.current.clientHeight);
    setShowRemoveMoreButton(
      ref.current.scrollHeight !== ref.current.clientHeight
    );
  }, []);

  return (
    <Fade bottom distance="20%" duration={2000} easing="ease-in-out">
      <div className="services" id="services">
        <div className="title">
          <h1>Why Choose Us</h1>
        </div>
        <p className="services_header_text">
          We offer a wide range of services to make your stay as comfortable and
          enjoyable as possible.
        </p>
        <div className="services_content">
          <div className="services_paragraph">
            <p style={isOpen ? null : paragraphStyles} ref={ref}>
              At BEATRICE TOLANI COMFORTS'S HOMES, we offer a wide range of
              services to make your stay as comfortable and enjoyable as
              possible. Whether you're here for business or pleasure, we have
              something to meet your needs. We offer a variety of room types to
              choose from, all of which are spacious and well-appointed. All
              rooms come standard with a king-size bed, a flat-screen TV, a
              mini-fridge, and a coffee maker. Some rooms also feature balconies
              or patios with stunning views of the city or surrounding
              countryside. Our on-site restaurant, serves a delicious variety of
              dishes for breakfast, lunch, and dinner. We also offer a full bar,
              where you can enjoy a cocktail or glass of wine before or after
              dinner. We are committed to providing our guests with the best
              possible experience. We will be happy to assist you. We offer a
              variety of amenities to make your stay more enjoyable, including:
            </p>
            <div className="available_services">
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p> 24 Hours Hybrid Solar Power System</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Food</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Games</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Party</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Room service</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Laundry service</p>
              </span>
              <span>
                <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
                <p>Concierge service</p>
              </span>
            </div>

            {showRemoveMoreButton && (
              <button
                className="more_service_btn"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Less services" : "More Service"}
              </button>
            )}
          </div>
          <Slide right distance="20%" duration={2000}>
            <div className="services_image">
              <img src={Snooker} alt="btc_services" />
            </div>
          </Slide>
        </div>
      </div>
    </Fade>
  );
}

export default Services;
