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

  //Handle user input into the grid
  function handleInp(e, ind) {
    let val = parseInt(e.target.value);
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
      <h2 className="title">Sudoku Solver</h2>
      <div className="grid">
        <table className="table">
          <tbody>
            {arr.map((el, ind) => (
              <React.Fragment key={ind}>
                {ind % 9 === 0 && <tr key={ind} className={ ((ind/9) % 3) === 0 && ind > 8  ? "row" : ""}/>}
                <td className={ (ind - 2) % 9 === 0 || (ind - 5) % 9 === 0 ? "col" : ""}>
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
        <button className="solve"
          onClick={() => {
            /*
            const slv = async () => {
              const an = solve(grid);
              return an;
            };
            
            setTimeout(async () => {
              const an = await slv();
              if (an === false) {
                alert("Invalid puzzle");
              } else {
                setGrid(an);
              }
            }, 0);
            */
           const an = solve(grid);
           if(an === false){
            alert("Invalid Puzzle");
           }            
           else{
            setGrid(an);
           }
          }}

        >
          Solve
        </button>

        <button onClick={() => {
          let genGrid = sendArr();
          setGrid(genGrid);
          }}
          className="Gen-P">
          Generate Puzzle
        </button>

        <button onClick={() => setGrid(arr)} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}