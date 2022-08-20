import React, { Component } from 'react'


export default class Vehicles extends Component {

    //constructor
    constructor(props){
        super();
        this.state = {color: 'red', gearSpeed: '5', origin: 'german'}
    }

    //set a new value
    // changeColor = () => {
    //     this.setState({color: 'blue'})
    // }

  render() {
    return (
      <div>
        My Vehicle is {this.props.color} in color
        <button onClick={this.setState({color: 'blue'})}></button>
        </div>

    )
  }
}


