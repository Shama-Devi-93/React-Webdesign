import React from "react"
import Card from "./Card"
import "./home.css"
function Home(){
    const contents=["The User Experience Designer position exists to create compelling and elegant digital user experiences through design."];
    const cardtitles=["UI,UX Designer","Sr.Product Designer", "User Experience Designer"];
    const logos=["https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg","https://tse3.mm.bing.net/th?id=OIP.OOr3P52o5jkoV4PeQYQEOQHaFN&pid=Api&P=0&w=194&h=137","https://www.techprevue.com/wp-content/uploads/2016/07/mobile-app-ux-ui-basics.jpg"]
    return (<div>
    <div className="flexbox">
    <Card content={contents[0]} title={cardtitles[0]} logo={logos[0]}/>
     <Card content={contents[0]} title={cardtitles[1]} logo={logos[1]}/>
     <Card content={contents[0]} title={cardtitles[0]} logo={logos[2]}/>
    </div>
    <div className="flexbox">
    <Card content={contents[0]} title={cardtitles[0]} logo={logos[0]}/>
     <Card content={contents[0]} title={cardtitles[1]} logo={logos[1]}/>
     <Card content={contents[0]} title={cardtitles[0]} logo={logos[2]}/>
    </div>
    <div className="flexbox">
    <Card content={contents[0]} title={cardtitles[0]} logo={logos[0]}/>
     <Card content={contents[0]} title={cardtitles[1]} logo={logos[1]}/>
     <Card content={contents[0]} title={cardtitles[0]} logo={logos[2]}/>
    </div>

    </div>
    )
}
export default Home;
