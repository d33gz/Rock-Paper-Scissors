const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const bomb = document.getElementById("header");
const robot = document.getElementById("robot");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");
const results = document.getElementById("results");

rock.onclick = () => {
  playGame('rock');
};

paper.onclick = () => {
  playGame('paper');
};

scissors.onclick = () => {
  playGame('scissors');
};

bomb.onclick = () => {
  playGame('bomb');
};

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('You need to enter either Rock, Paper, or Scissors')
  };
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors'
  };
};

const setRobotImage = (computerChoice) => {
  robot.src =`./images/robot_${computerChoice}.png`;
};

const determineWinner = (userChoice, computerChoice) => {
  playerPick.innerHTML = `Humanity plays... ${userChoice}!`;
  computerPick.innerHTML = `Technology plays... ${computerChoice}!`;
  if (userChoice === computerChoice) {
    results.innerHTML = "Tie Game!";
    return;
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      results.innerHTML = "Victory... Humanity!";
    } else {
      results.innerHTML = "Victory... Tecnology!";
    };
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      results.innerHTML = "Victory... Humanity!";
    } else {
      results.innerHTML = "Victory... Tecnology!";
    };
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      results.innerHTML = "Victory... Humanity!";
    } else {
      results.innerHTML = "Victory... Tecnology!";
    };
  } else {
    results.innerHTML = "So, you know the secrets of this world...";
  };
};

const playGame = (choice) => {
  userChoice = getUserChoice(choice);
  computerChoice = getComputerChoice();
  setRobotImage(computerChoice);
  determineWinner(userChoice, computerChoice);
};

//Testing Department

//console.log(playGame('bomb'));