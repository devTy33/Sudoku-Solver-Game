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
    var arr;
    var valid = false;
    while(valid === false){
        arr = generateArray();
        valid = isValid(arr);
    }
    return arr;
}