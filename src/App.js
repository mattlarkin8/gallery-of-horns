import React from 'react';
import './reset.css';
import './App.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      beastDesc: ''
    };
  };

  handleOnHide=()=>{
    this.setState({
      showModal: false
    });
  };
  handleOnShow=(beast,desc)=>{
    this.setState({
      showModal: true,
      selectedBeast: beast,
      beastDesc: desc
    });
  };

  render(){
    return (
      <>
        <Header/>
        <Main
        data={data}
        handleOnShow={this.handleOnShow} 
        />
        <Footer/>
        <SelectedBeast
        handleOnHide={this.handleOnHide}
        showModal={this.state.showModal}
        selectedBeast={this.state.selectedBeast}
        beastDesc={this.state.beastDesc}
        />
      </>  
    );
  }
}

export default App;