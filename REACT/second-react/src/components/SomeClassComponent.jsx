import React, {Component} from "react";

class SomeClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // stateFavNumber: this.props.favNumber,
            john:this.props.john
        }
    }
    render (){
        // console.log("this from SomeClassComponent", this);
        // const {john:{name}} = this.props;
        // console.log(name);
        const happyBirthDay = ()=>
        {
            console.log("Clicked button 🤩🤗")
            // this.state.stateFavNumber +=1
            // this.setState({stateFavNumber:this.state.stateFavNumber +1},()=>{console.log(this.state.stateFavNumber)})
            this.setState({john:{...this.state.john,age:this.state.john.age +=1}})
            ;
        }
        return(
            <fieldset>
                <legend>SomeClassComponent</legend>
                <h1>Hello From The Other Side</h1>
                <h2>Props = {JSON.stringify(this.props)}</h2>
                <h2>FavNumber From Props : {this.props.favNumber}</h2>
                <h2>FavNumber From State : {this.state.stateFavNumber}</h2>
                {/* <h2>Destructured variables  = {appMessage} and {JSON.stringify(johnInfos)}</h2> */}
                {/* <h4>My Parent message is : {this.props.msg}</h4> */}
                <h4>John from SomeClassComponent : {JSON.stringify(this.props.john)}</h4>
                <h4>John from State : {JSON.stringify(this.state.john)}</h4>
                <button onClick={()=>{happyBirthDay()}}>Happy Birthday</button>
            </fieldset>
        )
    }
}
export default SomeClassComponent;