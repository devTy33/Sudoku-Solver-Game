import React, { useState } from "react";
import { solve } from "./solve.js";
import { sendArr } from "./puzzleGenerator.js"
//import "./complete.js"
import "./App.css";

const arr = [
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
];
export default function App() {
  const [grid, setGrid] = useState(arr);

  function handleInp(e, ind) {
    let val = parseInt(e.target.value)
    const newData = grid.map((el, i) => {
      if (i === ind) {
        if(isNaN(val)) return -1;
        else if((e.target.value >= 1 && e.target.value <= 9) && e.target.value){
          return e.target.value;
        }      
      }
      return el;
    });
    
    setGrid(newData);
  }

  return (
  
    <div className="app">
      <div className="grid">
        <h2 className="title">Sodoku Solver</h2>
        <table>
          <tbody>
            {arr.map((el, ind) => (
              <React.Fragment key={ind}>
                {ind % 9 === 0 && <tr key={ind}/>}
                <td>
                  <input
                    key={ind}
                    type="text"
                    onChange={(e) => handleInp(e, ind)}
                    value={grid[ind] !== -1 ? grid[ind] : ""}
                    className={grid[ind] !== -1 ? "filled-cell" : "cells"}
                  />
                </td>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            const slv = async () => {
              const an = solve(grid);
              return an;
            };
            
            slv().then(an => {
              if (an === false) {
                alert("Invalid puzzle");
              } else {
                setGrid(an);
              }
            });
            
          }}

        >
          Solve
        </button>

        <button onClick={() => {
          let genGrid = sendArr();
          setGrid(sendArr(genGrid));
          }}>
          Generate Puzzle
        </button>

        <button onClick={() => setGrid(arr)}>
          Reset
        </button>
      </div>
    </div>

  );
}