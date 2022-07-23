
import React from 'react';
import './App.css';
import Car from './Comps/Car';
import Lorry from './Comps/Lorry';
import GDSC from './Comps/GDSC';
import Person from './Comps/Person';


function App() {
  return (
    <div className="App">
      <Hello/>
      <Car/>
      <Vehicle/>
      <Lorry color="white"/>
      <Rectangle/>
      <GDSC/>
      <Person/>
    </div>
  );
}

function Hello(){
  return <h2>Hello World</h2>
}


function Vehicle(){
 return(
  <div>
    <h1>Vehicle</h1>
  </div>
 )  
}

class Rectangle extends React.Component{
  render(){

  return <h1>This is my Rectangle</h1>
  }
}



export default App;
