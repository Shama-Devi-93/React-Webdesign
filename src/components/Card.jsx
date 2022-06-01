import React from "react"
import "./Card.css"
function Card(props){
    return(
        <div className="card-container">
         <div className="card-logo">
         <img src={props.logo} alt=""></img>
         </div>
         <div className="card-title">
             {props.title}
         </div>
         <div className="card-content">
             {props.content}
         </div>
         <div className="items">
             <li>Full time</li>
             <li>Min 1 year</li>
             <li> Mid Level</li>
         </div>
         <div className="card-buttons"> 
         <button className="Apply">Apply Now</button>
         <button className="Messages"> Messages</button>
         </div>

        </div>
    )
}
export default Card;