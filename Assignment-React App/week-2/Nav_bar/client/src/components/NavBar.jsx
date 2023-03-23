import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const style = {
  background: "purple",
  display: "flex",
  padding: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "white",
  fontWeight: "bold"
};

function NavBar(){
  const { name } = useContext(UserContext);

  return <div style={style}>Hi {name}!</div>;
};
export default NavBar