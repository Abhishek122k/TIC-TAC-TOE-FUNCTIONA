const boxarr = document.querySelectorAll(".box");

let flag = 1;
let mc = 0;

const x_pos = [];
const o_pos = [];

const winning_combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

boxarr.forEach((el) => {
    el.addEventListener("click", (event) => {
        if (!event.target.innerText) {
            startgame(event.target);
        }
    });
});


function startgame(e) {
    console.log(e);


    if (flag == 1) {
        const p = document.createElement("p");
        p.innerText = "X";
        x_pos.push(Number(e.id));
        p.style.color = "red";
        e.appendChild(p);
        if (check_win(x_pos, winning_combinations) == true)
            //  swal("X Wins");
            document.getElementById("result").style.visibility = "visible";
        document.getElementById("message").innerHTML = "Player X wins!";

        flag = 0;
    }

    else {
        const p = document.createElement("p");
        p.innerText = "O";
        o_pos.push(Number(e.id));
        p.style.color = "blue";
        e.appendChild(p);
        if (check_win(o_pos, winning_combinations) == true)
            //  swal("O Wins");
            document.getElementById("result").style.visibility = "visible";
        document.getElementById("message").innerHTML = "Player O wins!";

        flag = 1;

    }
    console.log(x_pos, o_pos)
    mc++
if (mc == 9) {
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("message").innerHTML = "Its A Tie";
}

}
function check_win(arr, winning_combos) {
    for (let i = 0; i < winning_combos.length; i++) {
        const boole = winning_combos[i].every((el) => {
            return arr.includes(el)
        })
        if (boole == true) {
            return true
        }
    }
    return false
}

button.onclick = () => {
    location.reload();
}