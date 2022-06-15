import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
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
      <Card style={{ width: '20rem' }}>
        <Card.Header as="h2">{this.props.title}</Card.Header>
        <Card.Img src={this.props.imageUrl} />
        <Card.Body as="card-body">
          <Card.Text as="card-text">{this.props.description}</Card.Text>
          <Button onClick={this.handleFavorite} variant="primary" as="card-button">Favorite 💖{this.state.favorites}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;