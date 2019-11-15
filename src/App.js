import React from "react";
import SideComponent from "./components/SideComponent";
import MainComponent from "./components/MainComponent";

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <SideComponent />
        <div className="col bg-light">
          <MainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
