import React from "react";

class GDSC extends React.Component{
    constructor(props){
        super();
        this.state = {
            techStack:"ReactJS",
            students:50,
            clubDetails:"GoogleDSC"
        };

        //state keeps our component properties
    }

    render(){
        return <h1>Today's meetup was {this.state.techStack} ,
        {this.state.students} students, 
        {this.state.clubDetails} </h1>
    }
}



export default GDSC