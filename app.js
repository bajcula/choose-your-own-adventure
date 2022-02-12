const prompt = require('prompt-sync')();
const username = prompt('Hello player, what is your name? ');

let playerBudget = 0;
let boardConfidence = "average";
let playerAchievements = [];
let playerWins = 0;
let playerLoses = 0;

console.log(`Congratulations ${username}, you have just been appointed as a Liverpool FC manager.\nThe Club World Cup begins in 15 days.`)

const setClubWorldCupExpectations = () => {
    const expectations = prompt("The Liverpool FC board wants to know your expectations for the upcoming tournament?\n *press [S] for reaching the semifinals\n *press [F] for reaching the finals\n *press [W] for wining the tournament...... ")
    if (expectations.toUpperCase() === "S") {
        playerBudget = 50;
        console.log(`You have been given a budget of ${playerBudget} million $ in order to get to the semifinals.`)
        boardConfidence = "low";
        return;
    } else if (expectations.toUpperCase() === "F") {
        playerBudget = 80;
        console.log(`You have been given a budget of ${playerBudget} million $ in order to get to the Cup final. The board confidence in you as a manager is ${boardConfidence}.`)
        return;
    } else if (expectations.toUpperCase() === "W") {
        playerBudget = 100;
        boardConfidence = "high";
        console.log(`You have been given a budget of ${playerBudget} million $ in order to win the Cup.`)
        return;
    }
}
setClubWorldCupExpectations()

const ronaldoTransfer = () => {
    if (playerBudget > 55) {
        const ronaldo = prompt("You have just been offered to buy Cristiano Ronaldo for 60 million $? Please enter: [ Y / N ]    ")
        if (ronaldo.toUpperCase() === "Y") {
            boardConfidence = "high"
            playerBudget -= 60;
            playerAchievements.push("Cristiano Ronaldo")
            console.log(`You signed Cristiano Ronaldo. The board confidence is ${boardConfidence}. Your remaining tranfer budget is ${playerBudget} million $.`)
        } else if (ronaldo.toUpperCase() === "N") {
            console.log("You declined opportunity to sign Cristiano Ronaldo.")
        }
    }
}
ronaldoTransfer()

const kanteTransfer = () => {
    if (playerBudget > 35) {
        const kante = prompt("You have just been offered to buy Ngolo Kante for 35 million $? Please enter: [ Y / N ]     ")
        if (kante.toUpperCase() === "Y") {
            boardConfidence = "high"
            playerBudget -= 35;
            playerAchievements.push("Ngolo Kante")
            console.log(`Congratulations on signing the best central midfielder in the world Ngolo Kante. Your remaining budget is ${playerBudget} million $.`)
        } else if (kante.toUpperCase() === "N") {
            console.log("You declined to sign Ngolo Kante from Chelsea FC.")
        }
    }
}
kanteTransfer()

function quarterFinals() {
    console.log("The draw for the 1/4 is done. You are facing Boca Juniors FC.")
    if (playerAchievements.includes("Cristiano Ronaldo")) {
        console.log("Congratulations, you have won your 1/4 game against Boca Juniors. Cristiano Ronaldo scored a hat-trick in a 4:1 win.");
        playerWins++;
    } else {
        const quarterTactics = prompt("It is time to choose your formation for the match against Boca Juniors. Do you want to setup more [O]ffensive or more [D]efensive tactics? Enter [ O / D ].....")
        if (quarterTactics === "O") {
            console.log(`Congratulations. You are a mastermind, you have won easily. The final score is 3:0.`);
            playerWins++;
        } else {
            console.log(`Unfortunately, your defensive tactic didn't bring you much joy. You have lost on penalties. | Games Won: ${playerWins} | Games Lost: ${playerLoses} | -*-GAME OVER-*-`);
            playerLoses++;
        }

    }
}
quarterFinals()

function semiFinals() {
    if (playerLoses < 1) {
        console.log("The draw for the 1/2 puts you against Chelsea FC.")
        if (playerAchievements.includes("Ngolo Kante")) {
            console.log("Congratulations, you have won your 1/2 game against Chelsea FC. The player of the match was Ngolo Kante, what a transfer that was!");
            playerWins++;
        } else {
            if (playerBudget > 18) {
                const semisRefs = prompt("The referees team for the match is a bit shady. Do you want to bribe them with 20 million $? Please press [ Y / N ].....")
                if (semisRefs === "Y") {
                    playerBudget -= 20;
                    playerWins++;
                    console.log("Congratulations, you have won the game with a last minute penalty. You are through to the finals.")
                } else if (semisRefs === "N") {
                    const semisTactics = prompt("How do you want to setup against really strong Chelsea side? Offensive / Defensive? [ O / D ] ......")
                    if (semisTactics === "O") {
                        playerLoses++;
                        console.log(`Unfortunately fast Chelsea players killed you on the counter. You've lost 3:1.  | Games Won: ${playerWins} | Games Lost: ${playerLoses} | -*-GAME OVER-*-`);
                    } else if (semisTactics === "D") {
                        playerWins++;
                        console.log("It was a very tight game. At the end you have won 1:0. On to the finals. Congratulations.")
                    }
                }
            } else {
                const semisTactics = prompt("How do you want to setup against really strong Chelsea side? Offensive / Defensive? [ O / D ] ......")
                if (semisTactics === "O") {
                    playerLoses++;
                    console.log(`Unfortunately fast Chelsea players killed you on the counter. You've lost 3:1.  | Games Won: ${playerWins} | Games Lost: ${playerLoses} | -*-GAME OVER-*-`);
                } else if (semisTactics === "D") {
                    playerWins++;
                    console.log("It was a very tight game. At the end you have won 1:0. On to the finals. Congratulations.")
                }
            }
        }
    }
}
semiFinals()


function finals() {
    if (playerLoses < 1) {
        console.log("It's almost there, you can smell the success, the history books are waiting for your name! The opponent in the World Cup Finals is FC Bayern Munchen.")
        const finalsDecision = prompt("Your assistant manager suggests that your best chance is to play high pressing football. Your first impression was to apply a 'defense first' formation today. Would you like to stay with your own desicion? [ Y / N ] ...... ")
        if (finalsDecision === "Y") {
            playerWins++;
            console.log(`GLORY GLORY DAYS. Liverpool FC is a World Champion, and it is all because of one person, ${username}. The supporters will remember you forever!   | Games Won: ${playerWins} | Games Lost: ${playerLoses}`)
        } else if (finalsDecision === "N") {
            playerLoses++;
            console.log(`Unfortunately, you should have sticked with your own desicion. Bayern Munich won 2:0. So close, yet so far away!   | Games Won: ${playerWins} | Games Lost: ${playerLoses} | -*-GAME OVER-*-`)
        }
    }
}
finals()