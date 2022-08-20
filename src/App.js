
import React , {Component} from 'react';
import './App.css';
import Car from './Comps/Car';
import Lorry from './Comps/Lorry';
import GDSC from './Comps/GDSC';
import Person from './Comps/Person';
import Events from './Comps/Events';
import Form from './Comps/Form';
import Condtions from './Comps/Condtions';
import Cond2 from './Comps/Cond2';
import Lists from './Comps/Lists';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import CounterDisplay from './Comps/CounterDisplay';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Vehicles from './hooks/usestate/Vehicles';



function App() {
  return (
    <div className="App">
      <Routing/>
      <Car seats="7"/>
      <Vehicle/>
      <Lorry color="white"/>
      <Rectangle/>
      <GDSC/>
      <Person/>
      <Events/>
      <Form/>
      <ConditionsJS/>
      <Lists/>
      <CounterDisplay/>  
      <Vehicles/>
      <Hello/>
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


function ConditionsJS(props) {
  const myName = "Stephen";
  if(myName){
    return <Condtions/>
  }
  else{
    return <Cond2/>
  }
}



class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/contact' component={Contact}/>
          <Route  path='/blogs' component={Blogs}/>
          <Route  path='/layout' component={Layout}/>
          <Route  path='/nopage' component={Nopage}/>
        </div>
      </Router>
    )
  }
}


export default App




