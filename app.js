
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

  

let board;
let turn;
let winner =false
let tie = false

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
console.log(squareEls);
console.log(messageEl);


const init = () => {
board =["","","","","","","","",""];
turn = "X";
 winner = false;
 tie= false;
};

init();

const updateBoard = () => {
    board.forEach((value, index,) => {
const square = squareEls[index]
square.textContent = value;
if(value === "X") {
    square.style.color = "red";
} else if (value === "O") {
    square.style.color= "blue";
} else{
    square.style.color = "black";
}
    });
};

const updateMessage = () => {
    if ( winner === false && tie === false) {
        messageEl.textContent= `It's ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent= "It's a tie!";
    }else {
        messageEl.textContent= "Congratulations you have won";
    };
};

const placePiece = (index) => {
    board[index]= turn
}

const checkForWinner = () =>{
    for (let i=0; i< winningCombos.length; i++) {
        if(board[winningCombos[i][0]].length>0) {
            if (board [winningCombos[i] [0] ]=== board[winningCombos[i][1]]){
                if (board[winningCombos[i][0]]=== board[winningCombos[i][2]]) {
                    winner = true; 
                    console.log(winner)
                }
        
        }
        }
    }};

    const checkForTie = () => {
        console.log('ghdjfkg')
        if (winner) return
        if (!board.includes("")) tie = true;

    }
    
    const switchPlayerTurn= () => {
        if (winner) return;
        if (turn === 'X') {
           turn = 'O'
            } else {
                turn = 'X'
            }
            }
    
    



const handleClick = (event) => { 
    if(winner === true){
        return
    }
    if (event.target.classList.contains ('sqr')){
        const squareIndex = event.target.id
        if (board[squareIndex] ==='X' || board[squareIndex] === 'O') {
        return
        }
        
        placePiece(squareIndex)

    }
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
    return
}

const render =() => {
    updateBoard ();
    updateMessage ();
//    handleClick()
};
render()

document.querySelector('.board').addEventListener('click', handleClick)

const resetBtnEl = document.querySelector('#reset');
resetBtnEl.addEventListener('click',init);
    
window.onload = () => {
    init();
  }





