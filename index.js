$(document).ready(() => {
  if (!localStorage.wins || !localStorage.losses || !localStorage.draws) {
    localStorage.wins = 0;
    localStorage.losses = 0;
    localStorage.draws = 0;
  }
  setWLD();
});

const rock = $("#rock").text();
const paper = $("#paper").text();
const scissors = $("#scissors").text();

const responses = [rock, paper, scissors];

const shooters = $(".shooter");
const countdown = $("#countdown");
const restart = $("#restart");
const reset = $("#recordReset");

let choice = null;
let response = null;

const win = "YOU WON!";
const lose = "YOU LOST!";
const draw = "DRAW!";

function respond(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeShooters(shooterEl) {
  shooterEl.fadeOut(1000);
}

function changeText(cd, str) {
  cd.text(str);
}

function resultText(c, r) {
  let text = "";
  if (c == rock) {
    switch (r) {
      case rock:
        text = draw;
        break;
      case paper:
        text = lose;
        break;
      case scissors:
        text = win;
        break;
      default:
        break;
    }
  }
  if (c == paper) {
    switch (r) {
      case rock:
        text = win;
        break;
      case paper:
        text = draw;
        break;
      case scissors:
        text = lose;
        break;
      default:
        break;
    }
  }
  if (c == scissors) {
    switch (r) {
      case rock:
        text = lose;
        break;
      case paper:
        text = win;
        break;
      case scissors:
        text = draw;
        break;
      default:
        break;
    }
  }
  if (text == win) {
    localStorage.wins = parseInt(localStorage.wins) + 1;
  } else if (text == lose) {
    localStorage.losses = parseInt(localStorage.losses) + 1;
  } else {
    localStorage.draws = parseInt(localStorage.draws) + 1;
  }

  setWLD();

  return text;
}

function displayResults(cd, c, r) {
  cd.text(c + " vs. " + r);
  setTimeout(() => {
    cd.append(`<p>${resultText(c, r)}</p>`);
  }, 400);
}

function playAgain(cd) {
  changeText(cd, "");
  cd.toggle();
  shooters.toggle();
  restart.toggle();
}

function cycleText(cd, c, r) {
  setTimeout(() => {
    changeText(cd, "ROCK");
    setTimeout(() => {
      changeText(cd, "PAPER");
      setTimeout(() => {
        changeText(cd, "SCISSORS");
        setTimeout(() => {
          changeText(cd, "SHOOT!");
          setTimeout(() => {
            displayResults(cd, c, r);
            setTimeout(() => {
              restart.toggle();
            }, 800);
          }, 400);
        }, 400);
      }, 400);
    }, 400);
  }, 1100);
}

function runGame() {
  fadeShooters(shooters);
  countdown.toggle();
  cycleText(countdown, choice, response);
}

shooters.click((e) => {
  choice = $(e.target).text();
  response = respond(responses);
  runGame();
});

restart.click(() => {
  playAgain(countdown);
});

reset.click(() => {
  localStorage.wins = 0;
  localStorage.losses = 0;
  localStorage.draws = 0;
  setWLD();
});

function setWLD() {
  $("#wld").text(
    `${localStorage.wins}-${localStorage.losses}-${localStorage.draws}`
  );
}
