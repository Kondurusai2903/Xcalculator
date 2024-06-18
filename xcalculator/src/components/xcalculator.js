import React, { useState } from "react";
import "./xcalculator.css";
const Xcalculator = () => {
  let [currval, setCurrval] = useState("");
  let [prevval, setPrevval] = useState("");
  let [operator, setOperator] = useState("");
  let [expression, setExpression] = useState("");
  let [st, setSt] = useState("+-/*");

  let handlecurrent = (number) => {
    console.log(number);
    setCurrval(currval + number);
    setExpression(currval + operator + prevval);
  };
  let [flag, setFlag] = useState(false);
  let arrone = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["C", "0", "=", "/"],
  ];
  return (
    <div>
      <h1>React Calculator</h1>
      <div style={{ padding: "1rem" }}>
        <input type="text" value={expression} />
      </div>
      {flag ? expression : ""}
      {arrone.map((val, ind) => (
        <div key={ind}>
          {val.map((item, indj) => (
            <button key={indj} className="btn">
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Xcalculator;
