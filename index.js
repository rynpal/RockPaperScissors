const rock = "🗿";
const paper = "📄";
const scissors = "✂";

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

function displayResults(cd, c, r) {
  cd.text(c + " vs. " + r);
}

function resultText(c, r) {
  if (c == rock) {
    console.log("You picked rock");
  } else if (c == paper) {
    console.log("You picked paper");
  } else {
    console.log("You picked scissors");
  }
}

function playAgain() {
  console.log("clicked play again");
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
              resultText(c, r);
              setTimeout(() => {
                restart.toggle();
              }, 400);
            }, 200);
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
  playAgain();
});
