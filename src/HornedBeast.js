import React from "react";
import './HornedBeast.css'

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      favorites: 0
    };
  };

  handleFavorite=()=>{
    this.setState({
      favorites: this.state.favorites+1
    })
  }

  render(){
    return(
    <>
      <h2>{this.props.title}</h2>
      <p onClick={this.handleFavorite}>Favorite 💖{this.state.favorites}</p>
      <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
      <p>{this.props.description}</p>
    </>
    );
  }
}

export default HornedBeast;