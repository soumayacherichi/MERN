import React, { useState } from "react";

import UserContext from "../contexts/UserContext";

function Wrapper (props){
  const [name, setName] = useState("Bob Smith");

  return (
    <UserContext.Provider value={{name,setName}}>
      {props}
    </UserContext.Provider>
  );
};
export default Wrapper