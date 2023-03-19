import React from 'react';
import { useParams } from 'react-router-dom';
const Number = () => {
    const{numb}=useParams()
    const {bc}=useParams();
    const{color}=useParams();
    if(isNaN(numb)){
        return(
            <div style={{backgroundColor: bc , color:color}}>
            <h4>
                the word is :{numb}
            </h4>
        </div>
        )
    }
  return (
    <div>
        <h4>the number is :{numb}</h4>
    </div>
  )
}
export default Number