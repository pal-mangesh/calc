
import { ETXTBSY } from 'constants';
import { exit } from 'process';
import React from 'react';
import './App.css';
import Button from "./components/button";
import Input from "./components/input";


interface Buttoninputdigit {
  digvalue: number;
  onchange: number;
}



function App() {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  const Actions = ["=", "+", "-", "x"]
  const inputItem = []
  const [displayVal, setDisplayVal] = React.useState("")
  const [actionval, setActionVal] = React.useState("")

  const handleOnClick = (index: number) => {
    return () => {
      let temp = displayVal;
      temp = temp + "" + digits[index];
      setDisplayVal(temp)
    }
  }

  const actionOnClick = (index: number) => {
    return () => {
      let arr = [];
      if (displayVal && displayVal.length) {
        let temp1 = displayVal;
        let result = temp1;
        //let arr = [];
        arr.push(displayVal)
        
        result = temp1 + "" + Actions[index]
        setDisplayVal(result)
        if((arr && arr.length)&&(arr[arr.length-1]==="+" ||arr[arr.length-1]==="-"||arr[arr.length-1]==="x"||arr[arr.length-1]==="/")) {
          
        }
        
      }
      else {
        let temp = Actions[index];
        setDisplayVal(temp)
      }

    }

  }



  return (
    <div>
      <div style={{ display: "flex" }}>

        <Input value={displayVal} />

      </div>
      {console.log()}
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse" }}>
        {digits.map((e: number, index: number) => {
          return <Button onClick={handleOnClick(index)} customStyle={{ width: "33%" }}>{e}</Button>
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse" }}>
        {Actions.map((e: string, index: number) => {
          return <Button onClick={actionOnClick(index)} customStyle={{ width: "33%" }}>{e}</Button>
        })}
      </div>

    </div>
  );
}


export default App


