import React from "react";
import "../App.css";

const LandingPage = () => {
  return (
    <header className="dark-overlay">
      <h1 className="display-3 text-white">
        Calorie <span className="text-primary">Tracker</span>
      </h1>
      <p className="text-white lead">
        Keep a count on the amount of calories you consume
      </p>
      <button className="btn btn-primary mx-3 btn-lg">Sign Up</button>
      <button className="btn btn-danger btn-lg">Login</button>
    </header>
  );
};

export default LandingPage;
