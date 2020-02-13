import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoxSeries from './components/series/BoxSeries';
import Navbar from './components/Navbar';

class App extends Component {

 

  render() {
    console.log("estou sendo renderizado")
    return (
    <div>
        <Navbar/>
        Cadastro de Series
        <BoxSeries/>
    </div>
    )
  }
}

export default App
