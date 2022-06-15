import React from "react";
import './reset.css'
import './App.css';
import data from './data.json'
import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Main
        data={data}
        />
        <Footer/>
      </>  
    );
  }
}

export default App;