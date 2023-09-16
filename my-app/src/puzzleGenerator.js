import {rowCheck, colCheck, panelCheck} from './solve.js'
function isValid(sArr){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if (rowCheck(sArr, i) && colCheck(sArr, j) && panelCheck(sArr, Math.floor(i / 3), Math.floor(j / 3))){
                
            } 
            else{
                return false;
            }
        }
    }
    return true;
}

function calc_dispersion(sudokuArray){
    let inc = 0;
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(sudokuArray[i * 9 + j] !== -1){
                if((i*9+j) >= 0 && (i*9+j) <= 8){
                    if(sudokuArray[(i*9+j) - 1] === -1 && sudokuArray[(i*9+j) + 1] === -1 && sudokuArray[(i*9+j) + 9] === -1){
                        inc++;
                    }
                }
                else if((i*9+j) >= 73 && (i*9+j) <= 80){
                    if(sudokuArray[(i*9+j) - 1] === -1 && sudokuArray[(i*9+j) + 1] === -1 && sudokuArray[(i*9+j) - 9] === -1){
                        inc++;
                    }
                }
                else if((i*9+j) % 9 === 0){
                    if(sudokuArray[(i*9+j) + 1] === -1 && sudokuArray[(i*9+j) + 9] === -1 && sudokuArray[(i*9+j) - 9] === -1){
                        inc++;
                    }
                }
                else if((i*9+j) % 8 === 0){
                    if(sudokuArray[(i*9+j) - 1] === -1 && sudokuArray[(i*9+j) + 9] === -1 && sudokuArray[(i*9+j) - 9] === -1){
                        inc++;
                    }
                }
                /*
                else{
                    if(sudokuArray[(i*9+j) - 1] === -1 && sudokuArray[(i*9+j) + 9] === -1 && sudokuArray[(i*9+j) - 9] === -1 && sudokuArray[(i*9+j) + 1] === -1){
                        inc++;
                    }
                }
                */

            }
        }
    }
    return inc;
}

function generateArray(){
    const sudokuArray = new Array(81).fill(-1);
    const numCells = 17;
    let numsPlaced = 0;
    while(numsPlaced < numCells){
        
        const randInd = Math.floor(Math.random() * 81)
        if(sudokuArray[randInd] === -1){
            const randNum = Math.floor(Math.random() * 9) + 1;
            sudokuArray[randInd] = randNum;
            numsPlaced++;
        }
    }
    
    return sudokuArray;
}


export function sendArr(){
    var dispersion = 0;
    var arr;
    var valid = false;
    while(valid === false || dispersion < 8){
        arr = generateArray();
        valid = isValid(arr);
        dispersion = calc_dispersion(arr);

    
    }
   // dispersion = calc_dispersion(arr);
    alert(dispersion);
    return arr;
}