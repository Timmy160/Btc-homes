import React from "react";
import "./Rooms.css";
import Room_1 from "../../Assets/Images/Room_1.jpg";
import Room4 from "../../Assets/Images/Room4.jpg";
import Room6 from "../../Assets/Images/Room6.jpg";
import Room7 from "../../Assets/Images/Room7.jpg";
import Room8 from "../../Assets/Images/Room8.jpg";
import Room11 from "../../Assets/Images/Room11.jpg";
import Room14 from "../../Assets/Images/Room14.jpg";
import Slide from "react-reveal/Slide";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SoapIcon from "@mui/icons-material/Soap";

function Rooms() {
  return (
    <div className="rooms" id="rooms">
      <div className="rooms_title">Rooms</div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room4} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Deluxe Room</span>
              <span className="about_room">
                Maximum occupancy: 2 Adults + 1 Child, Or, 1 Adult + 2 Children
                under 12 years old <br /> <br /> This compact yet comfortable
                bedrooms. They are situated across all floors and come with all
                amenities. which include an oversized king size bed and bathroom
                with separated shower. It is also equipped with a multi-use work
                station.
              </span>
              <span className="description_icons">
                <RestaurantIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
                <AcUnitIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#10,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room7} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Deluxe Room</span>
              <span className="about_room">
                Maximum occupancy: 3 Adults, Or, 2 Adults + 1 Child under 12
                years old and 1 Infant. <br /> <br />
                This well appointed bedroom and bathroom with separated shower.
                They come with all amenities personally. and include an
                oversized king size bed. For your comfort all the living rooms
                are equipped with a multi-use working station. can be placed for
                #10,000 per night.
              </span>
              <span className="description_icons">
                <BathtubIcon className="description_icon" />
                <SoapIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <AcUnitIcon className="description_icon" />
                <WifiIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#10,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room8} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Classic Room</span>
              <span className="about_room">
                Maximum occupancy: 2 Adults, Or, 1 Adult + 1 Child and 1 Infant
                under 12 years old <br /> <br /> This compact yet comfortable
                bedrooms. They are situated across all floors and come with all
                amenities. which include an oversized king size bed and bathroom
                with separated shower. It is also equipped with a multi-use work
                station.
              </span>
              <span className="description_icons">
                <BathtubIcon className="description_icon" />
                <SoapIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#8,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room11} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Classic Room</span>
              <span className="about_room">
                Maximum occupancy: 2 Adults, Or, 2 Adults + 1 Child under 12
                years old and 1 Infant. <br /> <br /> This well appointed
                bedroom and bathroom with separated shower. They come with all
                amenities personally. and include an oversized king size bed.
                For your comfort all the living rooms are equipped with a
                multi-use working station. can be placed for #8,000 per night.
              </span>
              <span className="description_icons">
                <RestaurantIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
                <AcUnitIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#8,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room14} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Classic Room</span>
              <span className="about_room">
                Maximum occupancy: 2 Adults, Or, 1 Adult + 1 Child and 1 Infant
                under 12 years old <br /> <br /> This compact yet comfortable
                bedrooms. They are situated across all floors and come with all
                amenities. which include an oversized king size bed and bathroom
                with separated shower. It is also equipped with a multi-use work
                station.
              </span>
              <span className="description_icons">
                <BathtubIcon className="description_icon" />
                <SoapIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#8,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room_1} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Deluxe Room</span>
              <span className="about_room">
                Maximum occupancy: 3 Adults, Or, 2 Adults + 1 Child and 1 Infant
                under 12 years old <br /> <br />
                This compact yet comfortable bedrooms. They are situated across
                all floors and come with all amenities. which include an
                oversized king size bed and bathroom with separated shower. It
                is also equipped with a multi-use work station. can be placed
                for a charge #10,000 plus tax per night
              </span>
              <span className="description_icons">
                <RestaurantIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
                <AcUnitIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#10,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room8} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Classic Room</span>
              <span className="about_room">
                Maximum occupancy: 2 Adults, Or, 2 Adults + 1 Child under 12
                years old and 1 Infant. <br /> <br /> This compact yet
                comfortable bedrooms. They are situated across all floors and
                come with all amenities. which include an oversized king size
                bed and bathroom with separated shower. It is also equipped with
                a multi-use work station.
              </span>
              <span className="description_icons">
                <BathtubIcon className="description_icon" />
                <SoapIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#8,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="rooms_details">
        <Slide left distance={"20%"} duration={2000}>
          <img src={Room6} />
        </Slide>

        <Slide right distance="20%" duration={2000}>
          <div className="room_description">
            <div className="room_text">
              <span className="room_type">Deluxe Room</span>
              <span className="about_room">
                Maximum occupancy: 3 Adults, Or, 2 Adults + 1 Child under 12
                years old and 1 Infant. <br /> <br /> This compact yet
                comfortable bedrooms. They are situated across all floors and
                come with all amenities. which include an oversized king size
                bed and bathroom with separated shower. It is also equipped with
                a multi-use work station. can be placed for a charge #10,000
                plus tax per night
              </span>
              <span className="description_icons">
                <BathtubIcon className="description_icon" />
                <PersonalVideoIcon className="description_icon" />
                <WifiIcon className="description_icon" />
                <PhoneInTalkIcon className="description_icon" />
                <AcUnitIcon className="description_icon" />
              </span>
            </div>
            <div className="room_price_details">
              <span className="room_price">#10,000.00</span>
              <span className="room_day">Per Night</span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Rooms;
