/*-------------------------------- Constants --------------------------------*/
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
    // and so on
  

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner =false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
console.log(squareEls);
console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/
const init = ()=> {
board =["","","","","","","","",""];
turn = "X";
 winner = false;
 tie= false;
 console.log('init function called'); 
};
init();


const updateBoard = () => {
    board.forEach((value, index) => {
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
        messageEl.textContent= "It's ${turn}'s turn";
    } else if (winner === false && tie === true){
        messageEl.textContent= "It's a tie";
    }else {
        messageEl.textContent= "Congratulations you have won";
    };
};

const render =() => {
    updateBoard ();
    updateMessage ();
};

render();

const handleClick = (event) => {
    
}
/*----------------------------- Event Listeners -----------------------------*/



