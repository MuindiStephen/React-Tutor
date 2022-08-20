import React from 'react'

function Lists() {
    
    const cars = ["BMW", "Audi", "Mercedes", "Volvo"];
  return (
    <div>
        <h1>Cars</h1>
        <ul>
        {cars.map((car) => <Car name={car}/>)}  
        </ul>
    </div>
  )
}

//car : parameter holds each String value element in the array
function Car(props){
    return <h1>My Car is {props.name}</h1>

}

export default Lists