const roundsBox = document.querySelector("#rounds-box");
const radioInput = document.querySelectorAll(".radio-input");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const countsBox = document.querySelector("#counts-box");
const countValue = document.querySelector("#count-value");
const choosenRadioValue = document.querySelector("#choosen-radio-value");
const rockSiPaper = document.querySelector("#rock-si-paper");
const userOptions = [rockBtn, paperBtn, scissorBtn];
const compOptions = ["rock", "paper", "scissor"];
const endResult = document.querySelector("#end-result");
const restartBtn = document.querySelector("#restart-btn");
const playAgain = document.querySelector("#game-over");
let resultText = document.querySelector("#result-text");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let rounds = 1;
let uScore = 0;
let cScore = 0;

/* -------------------------------------------------------------------------- */
/*                            start playing funtion                           */
/* -------------------------------------------------------------------------- */
let btnsDisabled = () => {
  rockBtn.disabled = true;
  rockBtn.style.color = "gray";
  rockBtn.style.borderColor = "gray";
  scissorBtn.disabled = true;
  scissorBtn.style.color = "gray";
  scissorBtn.style.borderColor = "gray";
  paperBtn.disabled = true;
  paperBtn.style.color = "gray";
  paperBtn.style.borderColor = "gray";
  resultText.innerHTML = `please select your rounds`;
  resultText.style.color = "#ff7f7f";
};
let btnsEnabled = () => {
  rockBtn.disabled = false;
  scissorBtn.disabled = false;
  paperBtn.disabled = false;
  rockBtn.style.color = "white";
  rockBtn.style.borderColor = "white";
  scissorBtn.style.color = "white";
  scissorBtn.style.borderColor = "white";
  paperBtn.style.color = "white";
  paperBtn.style.borderColor = "white";
  resultText.innerHTML = `Let's Play`;
  resultText.style.color = "white";
};

radioInput.forEach((radio) => {
  resultText.innerHTML = `please select your rounds`;

  btnsDisabled();

  radio.addEventListener("change", () => {
    btnsEnabled();
    roundsBox.style.display = "none";
    countsBox.style.display = "flex";
    choosenRadioValue.innerHTML = radio.value;
  });
});

userOptions.forEach((option) => {
  option.addEventListener("click", () => {
    countValue.innerHTML = rounds;
    if (Number(rounds < choosenRadioValue.innerHTML)) {
      rounds++;
    } else {
      gameOver();
    }
    const randomNumbers = Math.floor(Math.random() * 3);
    const compChoice = compOptions[randomNumbers];
    theWinner(option.value, compChoice);
  });
});
/* -------------------------------------------------------------------------- */
/*                    Function to decide who is the winner                    */
/* -------------------------------------------------------------------------- */
let theWinner = (player, computer) => {
  userScore.innerHTML = uScore;
  compScore.innerHTML = cScore;

  if (player === computer) {
    resultText.innerHTML = `Tie`;
  } else if (player == "rock") {
    if (computer == "paper") {
      resultText.innerHTML = `Computer Won`;
      rockBtn.style.boxShadow = "0px 0px 15px red";
      cScore++;
      compScore.innerHTML = cScore;
      rockBtn.addEventListener(`mouseout`, () => {
        rockBtn.style.boxShadow = "none";
      });
    } else {
      resultText.innerHTML = `Player Won`;
      uScore++;
      userScore.innerHTML = uScore;
      rockBtn.style.boxShadow = "0px 0px 15px green";
      rockBtn.addEventListener(`mouseout`, () => {
        rockBtn.style.boxShadow = "none";
      });
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      resultText.innerHTML = `Computer Won`;
      cScore++;
      compScore.innerHTML = cScore;
      scissorBtn.style.boxShadow = "0px 0px 15px red";
      scissorBtn.addEventListener(`mouseout`, () => {
        scissorBtn.style.boxShadow = "none";
      });
    } else {
      result.innerHTML = `Player Won`;
      uScore++;
      userScore.innerHTML = uScore;
      scissorBtn.style.boxShadow = "0px 0px 15px green";
      scissorBtn.addEventListener(`mouseout`, () => {
        scissorBtn.style.boxShadow = "none";
      });
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      resultText.innerHTML = `Computer Won`;
      cScore++;
      compScore.innerHTML = cScore;
      paperBtn.style.boxShadow = "0px 0px 15px red";
      paperBtn.addEventListener(`mouseout`, () => {
        paperBtn.style.boxShadow = "none";
      });
    } else {
      resultText.innerHTML = `Player Won`;
      uScore++;
      userScore.innerHTML = uScore;
      paperBtn.style.boxShadow = "0px 0px 15px green";
      paperBtn.addEventListener(`mouseout`, () => {
        paperBtn.style.boxShadow = "none";
      });
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                              Game over Funtion                             */
/* -------------------------------------------------------------------------- */

const gameOver = () => {
  if ((choosenRadioValue.innerHTML = Number(rounds))) {
    rockSiPaper.style.display = "none";
  }
  resultText.style.display = "none";
  if (uScore > cScore) {
    endResult.style.display = "block";
    endResult.innerHTML = `You Won The Game`;
    endResult.style.color = "green";
    playAgain.innerHTML = `press restart to play again`;
  } else if (uScore < cScore) {
    endResult.style.display = "block";
    endResult.innerHTML = "You Lost The Game";
    endResult.style.color = "red";
    playAgain.innerHTML = `press restart to play again`;
  } else {
    endResult.style.display = "block";
    endResult.innerHTML = "Tie";
    endResult.style.color = "grey";
    playAgain.innerHTML = `press restart to play again`;
  }
};
restartBtn.addEventListener("click", () => {
  window.location.reload();
});
