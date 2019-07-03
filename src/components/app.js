// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';
import PortfolioContainer from "./portfolio/portfolio-container";


// Creates an `App` class that is a child of the `Component` class.
class App extends Component {

  render() {
    
    return (

      <div className='app'>
        <h1>Trevor Heatons Portfolio</h1>
        
        <PortfolioContainer/>
        
      </div>

    );
  }
}

export default App;
