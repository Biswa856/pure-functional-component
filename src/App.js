import React from "react";
import Test from "./Test.js"
import "./style.css";

function App() {

  const[value,setValue] = React.useState(10);
const update=()=>{
  setValue(20)
  console.log(value);
}

  
  return (
    <div>
      <h1>Hello StackBlitz! {value}</h1>
      <button onClick={update}>click</button>
      <p>Start editing to see some magic happen :)</p>
      <Test/>
    </div>
  );
}
export default App;
