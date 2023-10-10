import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import FoodMenu from "../Pages/FoodMenu/FoodMenu";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Rooms from "../Pages/Rooms/Rooms";

function AllComponent() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <FoodMenu />
      <Rooms />
      <ContactUs />
    </div>
  );
}

export default AllComponent;
