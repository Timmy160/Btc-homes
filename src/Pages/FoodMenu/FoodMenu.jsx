import React from "react";
import "./FoodMenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmalaAndEwedu from "../../Assets/Images/AmalaAndEwedu.jpg";
import BreaDAndTea from "../../Assets/Images/BreaDAndTea.jpg";
import MoiMoiAndCustard from "../../Assets/Images/MoiMoiAndCustard.jpg";
import PancakeAndTea from "../../Assets/Images/PancakeAndTea.jpg";
import PerfectJollofRiceAndGoatMeat from "../../Assets/Images/PerfectJollofRiceAndGoatMeat.jpg";
import PlantainAndEgg from "../../Assets/Images/PlantainAndEgg.jpg";
import RiceAndBeans from "../../Assets/Images/RiceAndBeans.jpg";
import RiceAndChicken from "../../Assets/Images/RiceAndChicken.jpg";
import RiceAndFriedFish from "../../Assets/Images/RiceAndFriedFish.jpg";
import SemoAndEgusiSoup from "../../Assets/Images/SemoAndEgusiSoup.jpg";
import SpaghettiAndSauce from "../../Assets/Images/SpaghettiAndSauce.jpg";
import CatFish from "../../Assets/Images/CatFish.jpg";
import Fade from "react-reveal/Fade";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function FoodMenu() {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 900,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Fade bottom distance="20%" duration={2000} easing="ease-in-out">
      <div className="FoodMenu" id="foodMenu">
        <h1 className="FoodMenu_title">FoodMenu</h1>
        <div className="FoodMenu_Header_Text">
          We offer a variety of delicious and nutritious dishes to satisfy every
          taste
        </div>
        <Slider {...settings}>
          <div className="Food_Image">
            <img src={AmalaAndEwedu} width={150} height={230} />
            <div className="Food_Name">Amala and Ewedu </div>
          </div>
          <div className="Food_Image">
            <img src={BreaDAndTea} width={150} height={230} />
            <div className="Food_Name">Bread and Tea </div>
          </div>
          <div className="Food_Image">
            <img src={MoiMoiAndCustard} width={150} height={230} />
            <div className="Food_Name">Special Moi Moi and Custard </div>
          </div>
          <div className="Food_Image">
            <img src={RiceAndChicken} width={150} height={230} />
            <div className="Food_Name">Rice and Chicken </div>
          </div>
          <div className="Food_Image">
            <img src={PancakeAndTea} width={150} height={230} />
            <div className="Food_Name">Pan Cake and Tea </div>
          </div>
          <div className="Food_Image">
            <img src={PerfectJollofRiceAndGoatMeat} width={150} height={230} />
            <div className="Food_Name">Perfect Jollof Rice and Goat Meat </div>
          </div>
          <div className="Food_Image">
            <img src={PlantainAndEgg} width={150} height={230} />
            <div className="Food_Name">Plantain and Egg </div>
          </div>
          <div className="Food_Image">
            <img src={RiceAndBeans} width={150} height={230} />
            <div className="Food_Name">Rice and Beans </div>
          </div>
          <div className="Food_Image">
            <img src={RiceAndFriedFish} width={150} height={230} />
            <div className="Food_Name">Jollof Rice and Fried Fish </div>
          </div>
          <div className="Food_Image">
            <img src={SemoAndEgusiSoup} width={150} height={230} />
            <div className="Food_Name">Pounded Yam and Egusi Soup</div>
          </div>
          <div className="Food_Image">
            <img src={SpaghettiAndSauce} width={150} height={230} />
            <div className="Food_Name">Spaghetti and Sauce</div>
          </div>
          <div className="Food_Image">
            <img src={CatFish} width={150} height={230} />
            <div className="Food_Name">Grilled Fish and Fries</div>
          </div>
        </Slider>
      </div>
    </Fade>
  );
}

export default FoodMenu;
