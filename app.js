let cells = document.querySelectorAll(".row > div");
let turnCounter = 0;
let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
]
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
    
}


//Turn counter and click event
function cellClicked(e) {
    if (e.target.textContent == '') {
        if (turnCounter % 2 == 0) {
            e.target.textContent = 'X'
        } else {
            e.target.textContent = 'O'
        }

        turnCounter++
        checkWin();
    }
}

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let xCount = 0;
        let oCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent == 'O') {
                xCount++
            } else if (winningCombos[i][j].textContent == 'O') {  
                oCount++
            }
        }

        if (xCount == 3) {
            alert('X Wins!');
            break;
        } else if (oCount == 3) {
            alert('O Wins!');
            break;
        }
        
        if (turnCounter == 9) {
            alert('Draw');
            break;
        }        
    }
}