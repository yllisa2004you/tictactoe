const tr1 = document.getElementById("tr1");
const tr2 = document.getElementById("tr2");
const tr3 = document.getElementById("tr3");
const trs = [tr1, tr2, tr3];
const tds = [];
let turn = "X";
let isWin = false;
let scoreObj = {
  A: 0,
  B: 0,
};

const setScore = () => {
  let A = document.getElementsByClassName("playerOscore");
  let B = document.getElementsByClassName("playerXscore");

  A[0].textContent = `O : ${scoreObj.A}`;
  B[0].textContent = `X : ${scoreObj.B}`;
};
setScore();

const marking = function (event) {
  const trNumber = trs.indexOf(event.target.parentNode);
  console.log("trNumber", trNumber);
  const tdNumber = tds[trNumber].indexOf(event.target);
  console.log("trNumber", tdNumber);

  if (tds[trNumber][tdNumber].textContent !== "") {
    console.log("Not empty");
  } else {
    console.log("Empty");
    tds[trNumber][tdNumber].textContent = turn;

    let threeTd = false;
    //가로줄
    if (
      tds[trNumber][0].textContent === turn &&
      tds[trNumber][1].textContent == turn &&
      tds[trNumber][2].textContent == turn
    ) {
      threeTd = true;
    }
    //세로줄줄
    if (
      tds[0][tdNumber].textContent === turn &&
      tds[1][tdNumber].textContent == turn &&
      tds[2][tdNumber].textContent == turn
    ) {
      threeTd = true;
    }
    if (trNumber - tdNumber === 0) {
      if (
        tds[0][0].textContent === turn &&
        tds[1][1].textContent == turn &&
        tds[2][2].textContent == turn
      ) {
        threeTd = true;
      } //대각선1
    }

    if (Math.abs(trNumber - tdNumber) === 2) {
      if (
        tds[0][2].textContent === turn &&
        tds[1][1].textContent == turn &&
        tds[2][0].textContent == turn
      ) {
        threeTd = true;
      } //대각선2
    }
    //다 찼다면
    if (threeTd) {
      alert("Player" + turn + "win!");
      tds.forEach(function (trs) {
        trs.forEach(function (td) {
          td.textContent = "";
        });
      });
      scoreObj[turn === "O" ? "A" : "B"] += 1;
      setScore();
    } else {
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
};

for (let i = 0; i < 3; i++) {
  tds.push([]);
}

for (let j = 0; j < 3; j++) {
  tds[0].push(tr1.querySelectorAll("td").item(j));
  tds[1].push(tr2.querySelectorAll("td").item(j));
  tds[2].push(tr3.querySelectorAll("td").item(j));
}

for (let k = 0; k < 9; k++) {
  const td = document.getElementsByTagName("td").item(k);
  td.addEventListener("click", marking);
}

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {
  turn = "X";
  tds.forEach(function (trs) {
    trs.forEach(function (td) {
      td.textContent = "";
    });
  });
});
console.log(trs, tds);
