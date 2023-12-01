// Lesson 07.05 - Tic-Tac-Toe Challenge - START

// Get the necessary DOM elements

// 0. Get the New Game button
const newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', play);

// 1. Get the green feedback txt box
const feeback = document.querySelector('#feedback');

// 2. Get ALL 9 class .square divs at once as an array using querySelectorAll
const squareDivs = document.querySelectorAll('.square');

// Define necessary gameplay variables

// 4. Variable for keeping track of whose turn it is (X or O)
//    And a var for counting total moves so that you know when to check for winner
let xTurn = true;
let moves = 0;

// 5. Object / array for storing the board of 9 squares; during game play, the object will be updated to store X's and O's in the object
let gameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Define play() func which runs when user clicks New Game btn
function play() {

    // loop the 9 squares
    for(let i = 0; i < squareDivs.length; i++) {

        // save current square to const square:
        const square = squareDivs[i];

        // 6. clear all the X's and O's from the squares for a fresh game
        square.innerHTML = "";

        // 6B. assign each square a listener to call the addXO() func when clicked
        square.addEventListener('click', addXO);

        // 6C. make div text non selectable
        square.style.userSelect = 'none';

        // 6D. save the index of the loop to the square
        square.id = i;
        
    } // close loop

    // 7. Reset the Global variables
    xTurn = true;
    moves = 0;
    gameArr = [ 0, 1, 2, 
                3, 4, 5, 
                6, 7, 8 ];

    // 8. Update the feedback green text to say: "Good Luck!"
    feedback.textContent = "Good Luck!";

} // close play() function

// Define addXO() func that runs whenever player clicks any of empty squares
// it adds an "X" or "O" to the square (depending on whose turn it is)

function addXO() {
    console.log('addXO');
    // Get the number part id (last Char)
    let sqNum = this.id;

    // 9. Deploy the X or O to the clicked square (remember: "this" IS the obj
    // this.textContent = xTurn ? "X": "O";
     // 12. Update the board object
    if(xTurn) {
        this.textContent = "X";
        feedback.textContent = "O's turn..";
        gameArr[sqNum] = "X";
    } else { // it's O's turn..
        this.textContent = "O";
        feedback.textContent = "O's turn..";
        gameArr[sqNum] = "O";
    }
    console.log(gameArr);

    // 10. Toggle whose turn it is (so that would be a boolean to flip)
    //  that called the function
    xTurn = !xTurn;

    // 11. Disable the occupied square so that it cannot be clicked again
    
    this.removeEventListener('click', addXO);

    moves++; // keep track of total number of moves

    // 13. Beginning w move #5 (X's 3rd move), checkForWinner() after each move
    if(moves >= 5) {
        checkForWinner();
    } 

} // end addXO() func

// After X's third move and every turn thereafter you need to automatically run the checkForWinner() func which checks to see if X or O have 3 in a row in any of the 8 winning combos

/* -- there are 8 possible winning combos: --

gameArr = [ 0, 1, 2, 
            3, 4, 5, 
            6, 7, 8 ];

   top row : 0,1,2
   left col : 0,3,6
   diag from top left : 0,4,8
   middle col : 1,4,7
   right col : 2,5,8
   diag from top right : 2,4,6
   middle row : 3,4,5
   bottom row : 6,7,8

*/

function checkForWinner() {

    // 12. Check gameArr to see if it has one of the 8 winning combos 

    // gameArr = [ 0, 1, 2, 
    //             3, 4, 5, 
    //             6, 7, 8 ];

    // Check for Winner accross top row at index: 0, 1, 2
    if(gameArr[0] == gameArr[1] && gameArr[1] == gameArr[2]) {
        feedback.textContent = `${gameArr[0]} Wins!`;
        return;
    }

    // Check for Winner left column
    if(gameArr[0] == gameArr[3] && gameArr[3] == gameArr[6]) {
        feedback.textContent = `${gameArr[0]} Wins!`;
        return;
    }

    // Check for Winner diag from upper left
    if(gameArr[0] == gameArr[4] && gameArr[4] == gameArr[8]) {
        feedback.textContent = `${gameArr[0]} Wins!`;
        return;
    }

    // Check for Winner from the middle colum
    if(gameArr[1] == gameArr[4] && gameArr[4] == gameArr[7]) {
        feedback.textContent = `${gameArr[1]} Wins!`;
        return;
    }

    // Check for Winner from the right column
    if(gameArr[2] == gameArr[5] && gameArr[5] == gameArr[8]) {
        feedback.textContent = `${gameArr[2]} Wins!`;
        return;
    }

    // Check for Winner diagonal from upper right
    if(gameArr[2] == gameArr[4] && gameArr[4] == gameArr[6]) {
        feedback.textContent = `${gameArr[2]} Wins!`;
        return;
    }

    // Check for Winner from middle row
    if(gameArr[3] == gameArr[4] && gameArr[4] == gameArr[5]) {
        feedback.textContent = `${gameArr[3]} Wins!`;
        return;
    }

    // Check for Winner from bottom row
    if(gameArr[6] == gameArr[7] && gameArr[7] == gameArr[8]) {
        feedback.textContent = `${gameArr[63]} Wins!`;
        return;
    }

    // else No Winner
    if(moves == 9) {
        feedback.textContent = `Cat's Game!`;
        return;
    }

} // checkForWinner() func

