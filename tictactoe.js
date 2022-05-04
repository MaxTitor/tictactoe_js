const gameBoard = (() => {
    let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let turn = 1;
    let disable = false;
    let started = false;
    let won = false;
    let display = [ document.querySelector("#\\30 "), document.querySelector("#\\31 "),
                    document.querySelector("#\\32 "), document.querySelector("#\\33 "),
                    document.querySelector("#\\34 "), document.querySelector("#\\35 "),
                    document.querySelector("#\\36 "), document.querySelector("#\\37 "),
                    document.querySelector("#\\38 ")
    ];
    const insert = (space) => {
        if (gameBoard.turn === 1 && board[space] !== "X" && board[space] !== "O") {
            board[space] = "X";
            gameBoard.turn = 2;
        } else if (gameBoard.turn === 2 && board[space] !== "X" && board[space] !== "O") {
            board[space] = "O";
            gameBoard.turn = 1;
        }
        updateDisplay();
        winner.check();
        if (gameBoard.won === false) {
            CPU.play();
        }
    }
    const updateDisplay = () => {
        display.forEach(space => space.innerHTML = "");
        board.forEach((space, index) => {
            if (space === "X") {
                let playerP = document.createElement("P");
                let player = document.createTextNode("X");
                playerP.className = "player";
                playerP.appendChild(player);
                display[index].appendChild(playerP);
            } else if (space === "O") {
                let playerP = document.createElement("P");
                let player = document.createTextNode("O");
                playerP.className = "player";
                playerP.appendChild(player);
                display[index].appendChild(playerP);
            }
        });
    }
    const reset = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    
    return {
        board,
        insert,
        disable,
        reset,
        started,
        turn,
        won
    }
})();

const winner = (() => {
    const board = gameBoard.board;
    const check = () => {
        if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 31, 32);
        } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 31, 32);
        } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(33, 34, 35);
        } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(33, 34, 35);
        } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(36, 37, 38);
        } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(36, 37, 38);
        } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 33, 36);
        } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 33, 36);
        } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(31, 34, 37);
        } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(31, 34, 37);
        } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(32, 35, 38);
        } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(32, 35, 38);
        } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 34, 38);
        } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(30, 34, 38);
        } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(32, 34, 36);
        } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
            gameBoard.won = true;
            gameBoard.disable = true;
            winnerAnimation(32, 34, 36);
        } else if ( board[0] !== 0 && board[1] !== 1 && board[2] !== 2 && 
                    board[3] !== 3 && board[4] !== 4 && board[5] !== 5 && 
                    board[6] !== 6 && board[7] !== 7 && board[8] !== 8 ) {
                        gameBoard.reset();
        }
    }
    const winnerAnimation = (space1, space2, space3) => {
        setTimeout(() => {
            document.querySelector("#\\" + space1 + " > p").classList.add("blink");
            document.querySelector("#\\" + space2 + " > p").classList.add("blink");
            document.querySelector("#\\" + space3 + " > p").classList.add("blink");
            setTimeout(() => {
                document.querySelector("#\\" + space1 + " > p").classList.remove("blink");
                document.querySelector("#\\" + space2 + " > p").classList.remove("blink");
                document.querySelector("#\\" + space3 + " > p").classList.remove("blink");
                setTimeout(() => {
                    document.querySelector("#\\" + space1 + " > p").classList.add("blink");
                    document.querySelector("#\\" + space2 + " > p").classList.add("blink");
                    document.querySelector("#\\" + space3 + " > p").classList.add("blink");
                    setTimeout(() => {
                        document.querySelector("#\\" + space1 + " > p").classList.remove("blink");
                        document.querySelector("#\\" + space2 + " > p").classList.remove("blink");
                        document.querySelector("#\\" + space3 + " > p").classList.remove("blink");
                        gameBoard.reset();
                    }, 700);
                }, 400);
            }, 700);
        }, 200);
    }
    
    return {
        check
    }
})();

let CPUToggler = document.querySelector("body > div:nth-child(3) > p");
CPUToggler.addEventListener("click", () => {
    if (CPUToggler.innerHTML === "CPU: OFF" && gameBoard.started == false) {
        CPUToggler.innerHTML = "CPU: ON";
        CPU.On = true;
    } else if (CPUToggler.innerHTML === "CPU: ON" && gameBoard.started == false) {
        CPUToggler.innerHTML = "CPU: OFF";
        CPU.On = false;
    } else if (CPUToggler.innerHTML === "CPU: OFF" && gameBoard.started == true) {
        alert("You can't activate the CPU after the game has already started.");
    } else if (CPUToggler.innerHTML === "CPU: ON" && gameBoard.started == true) {
        alert("You can't deactivate the CPU after the game has already started.");
    }
});

const CPU = (() => {
    let On = false;
    const board = gameBoard.board;
    const play = () => {
        if (CPU.On === true && gameBoard.turn === 2) {
            gameBoard.disable = true;
            setTimeout(() => {
                // Case one
                if (board[0] === 0 && board[1] === 1 && board[2] === 2) {
                    gameBoard.insert(0);
                } else if (board[0] === "O" && board[1] === 1 && board[2] === 2) {
                    gameBoard.insert(1);
                } else if (board[0] === "O" && board[1] === "O" && board[2] === 2) {
                    gameBoard.insert(2);
                // Case two
                } else if (board[3] === 3 && board[4] === 4 && board[5] === 5) {
                    gameBoard.insert(3);
                } else if (board[3] === "O" && board[4] === 4 && board[5] === 5) {
                    gameBoard.insert(4);
                } else if (board[3] === "O" && board[4] === "O" && board[5] === 5) {
                    gameBoard.insert(5);
                // Case three
                } else if (board[6] === 6 && board[7] === 7 && board[8] === 8) {
                    gameBoard.insert(6);
                } else if (board[6] === "O" && board[7] === 7 && board[8] === 8) {
                    gameBoard.insert(7);
                } else if (board[6] === "O" && board[7] === "O" && board[8] === 8) {
                    gameBoard.insert(8);
                // Case four
                } else if (board[0] === 0 && board[3] === 3 && board[6] === 6) {
                    gameBoard.insert(0);
                } else if (board[0] === "O" && board[3] === 3 && board[6] === 6) {
                    gameBoard.insert(3);
                } else if (board[0] === "O" && board[3] === "O" && board[6] === 6) {
                    gameBoard.insert(6);
                // Case five
                } else if (board[1] === 1 && board[4] === 4 && board[7] === 7) {
                    gameBoard.insert(1);
                } else if (board[1] === "O" && board[4] === 4 && board[7] === 7) {
                    gameBoard.insert(4);
                } else if (board[1] === "O" && board[4] === "O" && board[7] === 7) {
                    gameBoard.insert(7);
                // Case six
                } else if (board[2] === 2 && board[5] === 5 && board[8] === 8) {
                    gameBoard.insert(2);
                } else if (board[2] === "O" && board[5] === 5 && board[8] === 8) {
                    gameBoard.insert(5);
                } else if (board[2] === "O" && board[5] === "O" && board[8] === 8) {
                    gameBoard.insert(8);
                // Case seven
                } else if (board[0] === 0 && board[4] === 4 && board[8] === 8) {
                    gameBoard.insert(0);
                } else if (board[0] === "O" && board[4] === 4 && board[8] === 8) {
                    gameBoard.insert(4);
                } else if (board[0] === "O" && board[4] === "O" && board[8] === 8) {
                    gameBoard.insert(8);
                // Case eight
                } else if (board[2] === 2 && board[4] === 4 && board[8] === 8) {
                    gameBoard.insert(2);
                } else if (board[2] === "O" && board[4] === 4 && board[8] === 8) {
                    gameBoard.insert(4);
                } else if (board[2] === "O" && board[4] === "O" && board[8] === 8) {
                    gameBoard.insert(8);
                } else {
                    board.forEach((space) => {
                        if (space !== "X" && space !== "O" && gameBoard.turn === 2) {
                            gameBoard.insert(space);
                        }
                    })
                }
                gameBoard.disable = false;
            }, 500);
        }
    }

    return {
        On,
        play
    }
})();

function insert(event) {
    space = Number(event.id);
    if (gameBoard.disable === false) {
        gameBoard.started = true;
        gameBoard.insert(space);
    }
};