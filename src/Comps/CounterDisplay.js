import React from "react";

class CounterDisplay extends React.Component {
    constructor(props){
        super();
        this.state = {
            counter: 0,
        }
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter+1})
        // this.state({counter: this.state.counter+1}) //increments the counter
    } 

    decreaseCounter = () => {
        this.setState({counter:this.state.counter-1})
    }

    neutraliseCounter = () => {
        this.setState({counter:0})
    }
    
    
 
    render() {
        return ( 
        <div style={{}}>
            <h1>Counter : {this.state.counter}</h1>
            <button onClick={this.increaseCounter}>Add counter</button>
            <button onClick={this.decreaseCounter}>minus counter</button>
            <button onClick={this.neutraliseCounter}>neutraliseCounter</button>
        </div>
        )
    }
}

export default CounterDisplay
