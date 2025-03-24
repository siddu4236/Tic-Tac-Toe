let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turno='true';

const wins=[
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
    turno='true';
    enableBoxes();
}
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turno) {
            box.innerText = "O";
            turno = false;
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled=true;
        checkWins()
        
    });
});
const checkWins = () => {
    for(let i of wins){
        let pos1val= boxes[i[0]].innerText;
        let pos2val= boxes[i[1]].innerText;
        let pos3val= boxes[i[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val ){
                console.log("Winner");
                disableBoxes();
            }
        }
    }
} 

resetbtn.addEventListener("click" , resetGame)