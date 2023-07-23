import React, { useState } from "react";
import "../src/App.css";
import "./App";

function Head() {
  const [rolls, setRoll] = useState(true);
  const [runs, setRuns] = useState([]);
  let rundev = [];
  const [Btn, setBtns] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  const [number, setNumber] = useState();

  function random() {
    let shadow = [];
    for (let index = 0; index < 10; index++) {
      let check = 0;
      runs.forEach((element) => {
        if (element == index) {
          check++;
        }
      });
      if (check == 0) {
        Btn[index] = Math.ceil(Math.random() * 5);
      }
      shadow.push(Btn[index]);
    }
    setBtns([]);
    setBtns(shadow);
  }

  function choothe(p, i) {
    if (!number) {
      setNumber(p.target.innerText);
    }
    if (p.target.innerText == number) {
      rundev = runs;
      rundev.push(i);
      setRuns(rundev);
    } else {
      setRuns(runs);
    }
    if (runs.length == 10) {
      setRoll(false);
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="text">Tenzies</h1>
        <p className="text1">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="Btn">
     {Btn.map((p, i) =>  <div key={i} value={i} onClick={(e) => { choothe(e, i) }} className=" item " > {p} </div> )}
        </div>
         <button    className= { ` btn ${ !rolls && " "  }`}  onClick={rolls ? random : null} > {rolls ? "ROLL" : "You Winner"}  </button>
      </div>
    </div>
  );
}

export default Head;
