let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let congrat = document.querySelector("#congrat");
let drawn = document.querySelector("#drawn");
let msg = document.querySelector(".msg");
let turno = true;

const wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    resetbtn.innerText = 'Reset Game';
    turno = true;
    enableBoxes();
    congrat.style.display = "none";
    msg.style.display = "none";
    drawn.style.display = "none";
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            box.style.textShadow = "0 0 1rem hsla(234, 64.10%, 48.00%, 0.50)"
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
            box.style.textShadow = "0 0 1rem hsla(69, 64.10%, 48.00%, 0.50)"
        }
        box.disabled = true;
        checkWins();

    });
});

const showWins = (winner) => {
    msg.innerText = `Winner "${winner}"`;
    msg.style.display = "block";
    congrat.style.display = "block";
    resetbtn.innerText = 'New Game';
};

const showDraw = (winner) => {
    msg.innerText = `Drawn`;
    msg.style.display = "block";
    drawn.style.display = "block";
    congrat.style.display = "none";
    resetbtn.innerText = 'New Game';
};

const checkWins = () => {
    for (let i of wins) {
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner");
                disableBoxes();
                showWins(pos1val);
            }
        }
        let isDraw = [...boxes].every((box) => box.innerText !== "");
        if (isDraw) {
            showDraw();
        }
        
    }
}

resetbtn.addEventListener("click", resetGame)









