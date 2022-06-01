import React,{useState} from "react";
import "./sidebar.css"

function Sidebar(props){
    return(
        <div className="form-container">
            <form className="form">
                <h1>{props.title}</h1>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[0]}</label>
                </div>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[1]}</label>
                </div>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[2]}</label>
                </div>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[3]}</label>
                </div>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[4]}</label>
                </div>
                <div className="check">
                    <input type="checkbox" className="check-input"/>
                    <label className="check-label">{props.items[5]}</label>
                </div>
            </form>
        </div>
    )
}
export default Sidebar;