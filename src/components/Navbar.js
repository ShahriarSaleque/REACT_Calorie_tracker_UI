import React from "react";
import alarm from "../img/alarm.png";
import message from "../img/envelope.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Calorie<span className="text-primary">Tracker</span>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Name
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              <img
                src={alarm}
                alt="alarm"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              <img
                src={message}
                alt="message"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
