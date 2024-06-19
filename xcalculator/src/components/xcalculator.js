import React, { useState } from "react";
import "./xcalculator.css";
const Xcalculator = () => {
  const [expression, setExpression] = useState("");
  const [operator, setOperator] = useState("");
  const [firstnum, setFirstnum] = useState("");
  const [secondnum, setSecondnum] = useState("");
  const [final, setFinal] = useState();
  function handleoperator(op) {
    if (firstnum === "") {
      alert("please enter the first name");
      return;
    }
    setOperator(op);
    console.log("operator is set");
  }
  function appendNum(num) {
    if (operator) {
      if (secondnum === "") {
        setSecondnum(num);
        console.log("secondnum is started");
        console.log(secondnum);
      } else {
        setSecondnum(secondnum * 10 + num);
        console.log(secondnum, "the value of secondnum");
      }
    } else {
      if (firstnum === "") {
        setFirstnum(num);
        console.log("firstnum is started");
        console.log(firstnum, "the value of firstnum");
      } else {
        setFirstnum(firstnum * 10 + num);
        console.log(firstnum, "the value of firstnum");
      }
    }
    let val = firstnum + operator + secondnum;
    setExpression(val);
  }
  const calculate = () => {
    if (secondnum === "" || operator === "") {
      return;
    }
    switch (operator) {
      case "+":
        let res = firstnum + secondnum;
        setFinal(res);
        break;
      case "-":
        let res2 = firstnum - secondnum;
        setFinal(res2);
        break;
      case "*":
        let res3 = firstnum * secondnum;
        setFinal(res3);
        break;
      case "/":
        let res4 = firstnum / secondnum;
        setFinal(res4);
        break;
      default:
        console.log("defalult is executed!");
    }
    setExpression("");
  };
  function handlereset() {
    setFirstnum("");
    setSecondnum("");
    setOperator("");
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <div style={{ padding: "1rem" }}>
        <input type="text" value={expression} />
      </div>
      {final}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(7)}>7</button>
        </div>
        <div>
          <button onClick={() => appendNum(8)}>8</button>
        </div>
        <div>
          <button onClick={() => appendNum(9)}>9</button>
        </div>
        <div>
          <button onClick={() => handleoperator("+")}>+</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(4)}>4</button>
        </div>
        <div>
          <button onClick={() => appendNum(5)}>5</button>
        </div>
        <div>
          <button onClick={() => appendNum(6)}>6</button>
        </div>
        <div>
          <button onClick={() => handleoperator("-")}>-</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(1)}>1</button>
        </div>
        <div>
          <button onClick={() => appendNum(2)}>2</button>
        </div>
        <div>
          <button onClick={() => appendNum(3)}>3</button>
        </div>
        <div>
          <button onClick={() => handleoperator("*")}>*</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => handlereset()}>C</button>
        </div>
        <div>
          <button onClick={() => appendNum(0)}>0</button>
        </div>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
        <div>
          <button onClick={() => handleoperator("/")}>/</button>
        </div>
      </div>
    </div>
  );
};
export default Xcalculator;
