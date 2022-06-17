import React from 'react';
import './reset.css';
import './App.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      beastDesc: '',
      sort: data
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

  handleChange=event=>{
    let selected=event.target.value;
    let newData=data;
    switch(selected){
      case '1':
        newData=data.filter(beasts=>beasts.horns===1);
        this.setState({
          sort: newData
        })
        break;
      case '2':
        newData=data.filter(beasts=>beasts.horns===2);
        this.setState({
          sort: newData
        })
        break;
      case '3':
        newData=data.filter(beasts=>beasts.horns===3);
        this.setState({
          sort: newData
        })
        break;
        case '100':
        newData=data.filter(beasts=>beasts.horns===100);
        this.setState({
          sort: newData
        })
        break;
      default:
      this.setState({
        sort: data
      })
      break;
    }
  }

  render(){
    return (
      <>
        <Header/>
        <Form as="form">
          <Form.Group>
            <p id="form-p">Sort by Horns</p>
            <Form.Select as="form-select" name="selected" onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
        data={this.state.sort}
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