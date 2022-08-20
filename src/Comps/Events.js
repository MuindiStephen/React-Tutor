import React from 'react'

function Events() {
const shoot = () => { 
     //object Object is a string representation of an object

    console.log("Hello learner of React JS")
}


  return (
    <button onClick={shoot}>Click Events</button> //recent event that triggered the function
  )
}

export default Events


// import React from "react"
// class Events extends React.Component{
//    shoot = () =>{
//     alert("Hello world")
//    }

//     render(){
//         return<button onClick={this.shoot}>Click Events</button>
//     }
// }