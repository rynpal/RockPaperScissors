const rock = $("#rock").text();
const paper = $("#paper").text();
const scissors = $("#scissors").text();

const responses = [rock, paper, scissors];
console.log(responses);

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
  return `${c} beats ${r}?`;
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
