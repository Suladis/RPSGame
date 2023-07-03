let playerScore = 0;
let computerScore = 0;


function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const chosen = choices[Math.floor(Math.random() * choices.length)];
    return chosen;
}

function play(playerChoice) {
    const computerChosen = computerChoice();
    computerAction(computerChosen);
    playerAction(playerChoice);
    roundResult(playerChoice, computerChosen);

}


function scoreBoard(result) {
    let playerHealth = document.getElementById("playerhealth").value;
    let computerHealth = document.getElementById("computerhealth").value;
    if (result === 0) {
        document.getElementById('roundwinner').innerHTML = 'This Round is a Tie';
    }
    else if (result === 1) {
        playerScore += 1;
        computerHealth -= 20;
        document.getElementById('roundwinner').innerHTML = 'Player Wins';
        document.getElementById('pscore-num').innerHTML = playerScore;
        document.getElementById('computerhealth').value = computerHealth;
        gameOver(playerScore, computerScore);
    }
    else if (result === 2) {
        computerScore += 1;
        playerHealth -= 20;
        document.getElementById('roundwinner').innerHTML = 'Computer Wins';
        document.getElementById('cscore-num').innerHTML = computerScore;
        document.getElementById('playerhealth').value = playerHealth;
        gameOver(playerScore, computerScore);
    }
    else {
        document.getElementById('roundwinner').innerHTML = 'This round is Nullified';
    }
}



function roundResult(playerChoice, computerChoice) {
    let result = 0;
    if (playerChoice === computerChoice) {
        result = 0;
        return scoreBoard(result);
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 1;
        return scoreBoard(result);

    }
    else {
        result = 2;
        return scoreBoard(result);
    }

}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        document.getElementById('roundwinner').innerHTML = 'Player Wins The Match!!';
        disableButtons();
    }
    else if (computerScore === 5) {
        document.getElementById('roundwinner').innerHTML = 'Computer Wins The Match!!';
        disableButtons();
    }
    else {
        return;
    }

}

function disableButtons() {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    document.querySelector('.game-board').innerHTML =
        `<div class="gameoptions"> 
        <button id="resetGame" onclick="newGame()">New Game</button>
        </div >`;
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerhealth").value = 100;
    document.getElementById("computerhealth").value = 100;
    document.querySelector('.game-board').innerHTML = `
    <div class="gameoptions">
        <button id="rock" onclick="play('rock')">Attack</button>
        <button id="paper" onclick="play('paper')">Summon</button>
        <button id="scissors" onclick="play('scissors')">Dodge</button>
    </div>`;
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('roundwinner').innerHTML = '';
    document.getElementById('pscore-num').innerHTML = '0';
    document.getElementById('cscore-num').innerHTML = '0';
}

function computerAction(x) {
    if (x === 'rock') {
        animateComputerAttack();
    } else if (x === 'paper') {
        animateComputerSummon();
    } else {
        animateComputerJump();
    }
}

function playerAction(x) {
    if (x === 'rock') {
        animatePlayerAttack();
    } else if (x === 'paper') {
        animatePlayerSummon();
    } else {
        animateComputerJump();
    }
}

function animateComputerIdle() {
    const computerImage = document.getElementById('computerimage');
    computerImage.src = './assets/computerassets/cidle.png';
    computerImage.style.animationName = 'computer-idle-animation';
}

function animateComputerAttack() {


    const computerImage = document.getElementById('computerimage');
    computerImage.src = './assets/computerassets/cattack.png';
    computerImage.style.animationName = 'computer-attack-animation';


    //reset to idle 
    setTimeout(function () {
        animateComputerIdle();
    }, 5000);
}

function animateComputerSummon() {
    const computerImage = document.getElementById('computerimage');
    computerImage.src = './assets/computerassets/csummon.png';
    computerImage.style.animationName = 'computer-summon-animation';

    //reset to idle 
    setTimeout(function () {
        computerImage.src = './assets/computerassets/cidle.png'
        computerImage.style.animation = 'computer-idle-animation 2s infinite'
    }, 5000);

}

function animateComputerJump() {



    const computerImage = document.getElementById('computerimage');
    computerImage.src = './assets/computerassets/cjump.png';
    computerImage.style.animationName = 'computer-jump-animation';

    setTimeout(function () {
        animateComputerIdle()
    }, 3000);
}


function animateComputerWalk() {
    const computerImage = document.getElementById('computerimage');
    computerImage.src = './assets/computerassets/cwalk.png';
    computerImage.style.animationName = 'computer-walk-animation';

}

function animatePlayerIdle() {
    const computerImage = document.getElementById('playerimage');
    computerImage.src = './assets/playerassets/pidle.png'
    computerImage.style.animationName = 'player-idle-animation';
}

function animatePlayerWalk() {
    const computerImage = document.getElementById('playerimage');
    computerImage.src = './assets/playerassets/pwalk.png'
    computerImage.style.animationName = 'player-walk-animation';
}


function animatePlayerAttack() {

    const computerImage = document.getElementById('playerimage');
    computerImage.src = './assets/playerassets/pattack.png'
    computerImage.style.animationName = 'player-attack-animation';

    setTimeout(function () {
        animatePlayerIdle()
    }, 5000);
}

function animatePlayerSummon() {
    const computerImage = document.getElementById('playerimage');
    computerImage.src = './assets/playerassets/psummon.png'
    computerImage.style.animationName = 'player-summon-animation';
    setTimeout(function () {
        animatePlayerIdle()
    }, 5000);
}

function animatePlayerJump() {
    const computerImage = document.getElementById('playerimage');
    computerImage.src = './assets/playerassets/pjump.png'
    computerImage.style.animationName = 'player-jump-animation';
    setTimeout(function () {
        animatePlayerIdle()
    }, 5000);
}

