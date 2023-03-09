import React, {useState} from 'react';
const FirstFunctionalComponent = (props) => {
    // hedhi variable plus set functions sur cette variable comme x et set x function
    //------State Variable --------Function to change state-------default value 
    const [favNumberStateVariable, setFavNumberStateVariable] = useState(props.favNumber)
    // I need to create a State variable for John
    const [john , setJohn] =useState(props.john)
    // console.log(props);
    const clickButton =()=>{
        console.log("button clicked🐼🐼🐼🐼");
        setFavNumberStateVariable(favNumberStateVariable+5)
        //ou on peut utiliser la ligne d'après 
        setJohn({...john,age:john.age+1})
    }
    return (
        <fieldset>
            <legend>✨✨First Functional Component✨✨</legend>
            <h4>Props From App.js:{JSON.stringify(props)}</h4>
            <h4>Favorite number from State is :{favNumberStateVariable} </h4>
            <h4>John from State is :{JSON.stringify(john)} </h4>
            <button onClick={()=>{clickButton()}}>Happy Birthday</button>
            {
                john.age>=50 ? <h4>HEY jOHN you are old👴👴👴👴</h4>: <h4>You're still young 🧑‍🦱🧑‍🦱🧑‍🦱🧑‍🦱</h4>
            }
        </fieldset>
    )
}

export default FirstFunctionalComponent