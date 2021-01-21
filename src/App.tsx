
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
  const actions = ["=", "+", "-", "x"]
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

      if (displayVal && displayVal.length) {
        const lastChar = displayVal[displayVal.length - 1];
        if (lastChar !== "+" && lastChar !== "-" && lastChar !== "x" && lastChar !== "/" && lastChar !== "=") {
          setDisplayVal(displayVal + actions[index])
        }

        if (actions[index] === "=") {
          let total = 0;
          let elements = [];
          let partial = "";
          
          const dvArr = displayVal.split("");
          for (let i = 0; i < dvArr.length; i++) {
            let c = displayVal[i]
            if (c.match(/[0-9]/)) {
              partial += c;
              if (i === dvArr.length - 1) {
                elements.push(partial);
              }
            } else {
              elements.push(partial);
              elements.push(c);
              partial = ""
            }
          }
          if (elements && elements.length) {
            total = elements[0].length?parseInt(elements[0]):0
            for (let i = 1; i < elements.length; i += 2) {
              if (elements[i]) {
                const ele = elements[i]
                if (ele === "+") {
                  total += parseInt(elements[i + 1])
                }
                if (ele === "-") {
                  total -= parseInt(elements[i + 1])
                }
                if (ele === "x") {
                  total *= parseInt(elements[i + 1])
                }
                if (ele === "/") {
                  total /= parseInt(elements[i + 1])
                }
              } else { break; }
            }
            setDisplayVal(total + "")
          }
        }
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
        {actions.map((e: string, index: number) => {
          return <Button onClick={actionOnClick(index)} customStyle={{ width: "33%" }}>{e}</Button>
        })}
      </div>

    </div>
  );
}


export default App


