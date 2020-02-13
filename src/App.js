import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoxSeries from './components/series/BoxSeries';

class App extends Component {

 

  render() {
    console.log("estou sendo renderizado")
    return (
    <div className="App">
        
        <BoxSeries/>
    </div>
    )
  }
}

export default App
