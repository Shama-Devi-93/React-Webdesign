import React from "react";
import SearchBar from "./searchbar";
import "./navbar.css"
import {AiOutlineEnvironment,AiOutlineMoneyCollect,AiFillUpSquare} from "react-icons/ai";

function Navbar(){
    return (
        
        <div className="nav-bar">
        <div className="search"><SearchBar/></div>
        <div className="points"><li><a href="#" className="location"><AiOutlineEnvironment className="icon"/>Londontowne,MD</a></li>
        <li><a href="#" ><AiFillUpSquare className="icon"/> Job Type</a></li>
        <li><a href="#"><AiOutlineMoneyCollect className="icon"/> Salary Range</a></li>
        </div>     
        <div className="buttons"><button >Find Job</button></div>
        </div>
    )
}
export default Navbar;