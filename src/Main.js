import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'

class Main extends React.Component{
  render(){
    let beasts = this.props.data.map(a=>{
      return<HornedBeast
      title={a.title}
      imageUrl={a.image_url}
      description={a.description}
      />
    });
    return(
    <main>
      {beasts}
    </main>
    );
  }
}

export default Main;