
import React from "react"
import Navbar  from './components/navbar';
import SideComponent from "./components/sidecomponent";
import Home from "./components/home";
import "./App.css"
function App() {
  return (
  <div>
    <Navbar/>
    
    <div className=" split side-bar"><div className="bodypage"><SideComponent/></div></div>
    <div className=" split homepage"><div className="bodypage"><Home/></div></div>
    
  </div>
  );
}

export default App;
