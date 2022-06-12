const rock = $("#rock").text();
const paper = $("#paper").text();
const scissors = $("#scissors").text();

const responses = [rock, paper, scissors];

const shooters = $(".shooter");
const countdown = $("#countdown");
const restart = $("#restart");
let choice = null;
let response = null;

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
        text = "DRAW!";
        break;
      case paper:
        text = "YOU LOST!";
        break;
      case scissors:
        text = "YOU WON!";
        break;
      default:
        break;
    }
  }
  if (c == paper) {
    switch (r) {
      case rock:
        text = "YOU WON!";
        break;
      case paper:
        text = "DRAW!";
        break;
      case scissors:
        text = "YOU LOST!";
        break;
      default:
        break;
    }
  }
  if (c == scissors) {
    switch (r) {
      case rock:
        text = "YOU LOST!";
        break;
      case paper:
        text = "YOU WON!";
        break;
      case scissors:
        text = "DRAW!";
        break;
      default:
        break;
    }
  }
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
