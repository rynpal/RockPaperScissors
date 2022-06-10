const rock = "🗿";
const paper = "📄";
const scissors = "✂";

const responses = [rock, paper, scissors];

const shooters = $(".shooter");
const countdown = $("#countdown");

function respond(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeShooters(shooterEl) {
  shooterEl.fadeOut(1000);
}

function changeText(cd, str) {
  cd.text(str);
}

function cycleText(cd) {
  setTimeout(() => {
    changeText(cd, "ROCK");
    setTimeout(() => {
      changeText(cd, "PAPER");
      setTimeout(() => {
        changeText(cd, "SCISSORS");
        setTimeout(() => {
          changeText(cd, "SHOOT!");
          setTimeout(() => {
            cd.toggle();
          }, 400);
        }, 400);
      }, 400);
    }, 400);
  }, 1100);
}

shooters.click(() => {
  fadeShooters(shooters);
  countdown.toggle();
  cycleText(countdown);
});
