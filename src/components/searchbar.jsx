import React,{useState} from "react"
import "./searchfile.css"
import {AiOutlineSearch} from "react-icons/ai"

function SearchBar(){
    const jobsposts=["Product Designer", "UI/UX Designer", "Sr.Product Designer", "UX Designer", "Product Designer"];
    const [search,setSearch]=useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        
      };
      if(search.length>0){
          jobsposts.filter((job)=>{
              return job.match(search);
          })
      }

      return (<div className="search">
      <AiOutlineSearch className="icon"/>
            <input className="search-bar"
         type="text"
         placeholder="Search here"
         onChange={handleChange}
         value={search} />
         {jobsposts.map((job,index)=>{
             <div>
                 <li>{job}</li>
             </div>
         })}
      </div>
      )
    }
    export default SearchBar;