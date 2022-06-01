import React from "react"
import Sidebar from "./sidebar"
function SideComponent(){
    const items=[["Full Time Jobs","Part Time Jobs", "Remote Jobs", "Internship Jobs", "Contract", "Training Jobs"],
   ["Student Level","Entry Level", "Mid Level", "Senior Level", "Directors", "VP or Above"],
    ["$700-$1000","$1000-$1200", "$1200-$1400", "$1500-$1800", "$2000-$3000", "$3000-$4000"]
    ];
    const titles=["Types of Employment","Security Level","Salary Range"]
    return(
        <div>
            <Sidebar title={titles[0]} items={items[0]}/>
            <Sidebar title={titles[1]} items={items[1]}/>
            <Sidebar title={titles[2]} items={items[2]}/>
        </div>
    )
}
export default SideComponent;