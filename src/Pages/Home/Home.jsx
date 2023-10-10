import React from "react";
import "./Home.css";
import Input from "../../Components/Input";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

function Home() {
  return (
    <Fade bottom distance="20%" duration={2000} easing="ease-in-out">
      <div className="home" id="home">
        <div className="home_text">
          <Spin duration={2000}>
            <Jello duration={5300}>
              <h2>
                in a great hotel, <br /> you don't just <br /> stay. you belong
              </h2>
            </Jello>
          </Spin>
        </div>
        <Input />
      </div>
    </Fade>
  );
}

export default Home;
