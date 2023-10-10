import React from "react";
import "./Input.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();

  return (
    <div className="input">
      <div className="btc_homes_location_arrival_departure">
        <div className="locationIcon_and_Location">
          <LocationOnIcon className="location_icon" />
          <h3>Location</h3>
        </div>
        <h4>Ikole Ekiti</h4>
      </div>

      <div className="btc_homes_location_arrival_departure">
        <form>
          <label>Arrival date</label>
          <input type="date" />
        </form>
      </div>

      <div className="btc_homes_location_arrival_departure">
        <form>
          <label>Departure date</label>
          <input type="date" />
        </form>
      </div>

      <div className="btc_homes_location_arrival_departure guest">
        <form>
          <label className="guest">Guests</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Input;
