import React, {Component} from "react";
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            // stateFavNumber: this.props.favNumber,
            john:this.props.john
        }
    }
    render (){
        const happyBirthDay = ()=>{
            console.log("Clicked button 🤩🤗")
            // this.state.stateFavNumber +=1
            // this.setState({stateFavNumber:this.state.stateFavNumber +1},()=>{console.log(this.state.stateFavNumber)})
            this.setState({john:{...this.state.john,age:this.state.john.age +=1}})
            ;
        }
        return(
        <div>
            <h1>{this.props.last_Name}, {this.props.first_Name}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={()=>{happyBirthDay()}}>Happy Birthday</button>
        </div>
        )
    }
}
    export default PersonCard;
