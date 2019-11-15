import React from "react";

//import all the images as component
import dashboard from "../img/training.png";
import home from "../img/home.png";
import calorie from "../img/calories.png";
import meal from "../img/burger.png";

const SideComponent = () => {
  return (
    <div className="col-sm-3 px-1  min-vh-100 min-vw-20">
      <div className="py-2 sticky-top flex-grow-1">
        <div className="nav flex-sm-column">
          <div className="container mt-4 ml-2">
            <div className="container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary ">
                  {" "}
                  Dashboard
                  <span>
                    <img src={dashboard} alt="dashboard" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {" "}
                  Home
                  <span>
                    <img src={home} alt="home" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {" "}
                  Calorie Tracker
                  <span>
                    <img src={calorie} alt="calorie" />
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {" "}
                  Meal of the Day
                  <span>
                    <img src={meal} alt="meal" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
