console.log("Welcome to Tic Tac Toe");
let turn = "X";
let isgameover = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let e of wins) {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            return boxtext[e[0]].innerText;
        }
    }
    return null;
};
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn;
            let winner = checkWin();
            if (winner) {
                document.querySelector(".info").innerText = winner + " Won!";
                isgameover = true;
            } else {
                turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + turn;
            }
        }
    });
});
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
});
