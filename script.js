
let allBtn = document.querySelectorAll(".btn");
let resetBtn = document.querySelectorAll("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
// let startBtn = document.querySelector("#start-btn");

let turn0 = true; // playerX,   player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

allBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        if (turn0) {
            btn.innerText = "X";
            turn0 = false;
        } else {
            btn.innerText = "0";
            turn0 = true;
        }
        btn.disabled = true;
        checkWin();
    })

});

// Here we check if the winner
const checkWin = () => {
    for (let pattern of winPatterns) {
        let posVal = allBtn[pattern[0]].innerText;
        let posVal2 = allBtn[pattern[1]].innerText;
        let posVal3 = allBtn[pattern[2]].innerText;

        if (posVal != "" && posVal2 != "" && posVal3 != "") {
            if (posVal === posVal2 && posVal2 === posVal3) {
                // alert(`Player ${posVal} wins!`);
                console.log("winner", posVal);
                showWinner(posVal);
            }
        }
    }
}

// Here we reset the game 
const disableBoxes = () => {
    allBtn.forEach((btn) => {
        btn.disabled = true;
    });
}
const enableBoxes = () => {
    allBtn.forEach((btn) => {
        btn.disabled = false;
        message.innerText = "";
    });
}
// Here we show the winner message  and disable the boxes  when someone wins  or reset the game  when clicked on the new game button  or reset button!
const showWinner = (winner) => {
    message.innerText = `Congratulations! Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

// Here we reset the game when clicked on the reset button  or new game button!

resetBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        allBtn.forEach((btn) => {
            btn.innerText = "";
        });
        allBtn.forEach((btn) => {
            btn.disabled = false;
        });
        turn0 = true;
        enableBoxes();
        msgContainer.classList.add("hide");
        message.innerText = "";
    });
});

newBtn.addEventListener("click", () => {
    allBtn.forEach((btn) => {
        btn.innerText = "";
    });
    allBtn.forEach((btn) => {
        btn.disabled = false;
    });
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    message.innerText = "";
});
