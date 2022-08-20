

//a components receives props as arguments like function arguments in JS and HTML

function Car(props){
    const model = "Wish"; //variable
    const numberPlate = "KDG O28Q"
    const carInfo={tires:"4",origin:"japan"} //variable with JSON format
    return (
    <div>
        <h1>Hi, I am a Car</h1>
        <h2>My model is {model}</h2>
        <h2>numberPlate is {numberPlate}</h2>
        <h3>Seats {props.seats} and manufactured in {carInfo.origin}</h3>
    </div>
    )
}

export default Car