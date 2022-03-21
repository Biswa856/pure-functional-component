import React from "react";
import {pure} from "recompose";


function Test() {

  
console.log("child is rendering");
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button >click</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
export default pure(Test);