let boxes= document.querySelectorAll(".box");
let restbtn = document.querySelector(".reset");
let turno='true';

const wins=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

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
    });
});