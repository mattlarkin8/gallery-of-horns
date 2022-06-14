import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends React.Component{
  render(){
    let beasts = data.map(a=>{
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