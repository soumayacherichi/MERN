import React, {Component} from "react";
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:this.props.age
        }
    }
    render (){
        const happyBirthDay = ()=>
        {
            console.log("Clicked button 🤩🤗", this.state.age)
            this.setState({age:this.state.age + 1})
            ;
        }
        return(
        <div>
            <h1>{this.props.last_Name}, {this.props.first_Name}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={()=>happyBirthDay()}>Happy Birthday</button>
        </div>
        )
    }
}
export default PersonCard;
