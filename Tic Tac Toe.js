// Select all elements with the class "box"
let boxes = document.querySelectorAll(".box");

// Select the reset button element
let resetBtn = document.querySelector(".res");

// Select the new game button element
let newGame = document.querySelector(".new-btn");

// Select the message container element
let msgContainer = document.querySelector(".msg-container");

// Select the message element
let msag = document.querySelector(".msag");

// Initialize the turn variable, true for player O and false for player X
let turno = true;

// Initialize the count variable to track the number of moves
let count = 0;

// Define the winning patterns
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Function to enable all boxes and clear their text
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// Function to reset the game
const resetGame = () => {
    turno = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
}

// Function to handle a draw game
const gameDraw = () => {
    msag.innerText = `Game was a Draw.ಮತ್ತೆ ಆಟವಾಡಿ `;
    msgContainer.classList.remove("hide");
    disableboxes();
}

// Add click event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("bx was clicked");
        if (turno) {  // If it's player O's turn
            box.innerText = "O";
            turno = false;
        } else {  // If it's player X's turn
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        
        count++;
    
        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

// Function to disable all boxes
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// Function to show the winner
const showWinner = (winner) => {
    msag.innerText = ` Congrats ${winner} is the winner 🥳🥳 Party`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

// Function to check for a winner
const checkWinner = () => {
    for (let i of winPattern) {
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText; 
        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

// Add click event listeners to the reset and new game buttons
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
