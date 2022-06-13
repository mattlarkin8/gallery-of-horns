import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render(){
    return(
    <main>
      <HornedBeast title="Big Icon" imageUrl="./logo512.png" description="Large React Icon"/>
      <HornedBeast title="Small Icon" imageUrl="./logo192.png" description="Small React Icon"/>
    </main>
    );
  }
}

export default Main;