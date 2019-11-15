import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/signup" className="btn btn-primary mx-3 btn-lg">
        Sign Up
      </Link>
      <Link to="/login" className="btn btn-danger mx-3 btn-lg">
        Login
      </Link>
    </header>
  );
};

export default LandingPage;
