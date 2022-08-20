import React from "react";

//onclick button functionality
class Person extends React.Component{

    //parameterised constructor that initialises the state of the Javascript
    constructor(props){
        super();
        this.state = {
            name: "Stephen",
            age:20,
            gender:"Male"
        }
    }

    changeAge = () => {
        this.setState({age:25})  //sets the age to a new value
    }
  
      render(){
          return (
            <div>
                <h2>My name is {this.state.name}</h2>
                <h3>I am {this.state.age} years</h3>
                <button onClick={this.changeAge}>Click me to change age</button>
            </div>
          )
      }
  }


  export default Person