import React from "react";

//Components
import Navbar from "./components/Navbar";
import SideComponent from "./components/SideComponent";
import MainComponent from "./components/MainComponent";

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
