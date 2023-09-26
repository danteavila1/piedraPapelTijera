const piedraBtn = document.querySelector('.piedra');
const papelBtn = document.querySelector('.papel');
const tijeraBtn = document.querySelector('.tijera');
const resultado = document.querySelector('.resultado');
userScore = 0;
computerScore = 0;

function getComputerChoice (){
    let num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            return 'PIEDRA';
            break;
        case 1:
            return 'PAPEL';
            break;
        case 2:
            return 'TIJERA';
            break;
    }
}

const checkWinner = (userScore, computerScore) => {
    if (userScore == 3) {
        const h2 = document.createElement('h2');
        h2.classList.add('ganaUsuario');
        h2.innerText = 'ganaste '+userScore+ 'a' +computerScore;
        resultado.appendChild(h2);
    }
    if (computerScore == 3) {
        const h2 = document.createElement('h2');
        h2.classList.add('ganaComputadora');
        h2.innerText = 'perdiste '+userScore+ 'a' +computerScore;
        resultado.appendChild(h2);
    }
}


const round = (userChoice, computerChoice) => {
    
        if (userChoice == computerChoice) {
            const p = document.createElement('p');
            p.innerText = "empate";
            resultado.appendChild(p);
        }
        if (
            (userChoice == 'PIEDRA' && computerChoice == 'TIJERA') ||
            (userChoice == 'TIJERA' && computerChoice == 'PAPEL') ||
            (userChoice == 'PAPEL' && computerChoice == 'PIEDRA')
        ) {
            const p = document.createElement('p');
            p.innerText = "ganaste!";
            resultado.appendChild(p);
            userScore+=1;
        }

        if (
            (computerChoice == 'PIEDRA' && userChoice == 'TIJERA') ||
            (computerChoice == 'TIJERA' && userChoice == 'PAPEL') ||
            (computerChoice == 'PAPEL' && userChoice == 'PIEDRA')
        ) {
            const p = document.createElement('p');
            p.innerText = "perdiste";
            resultado.appendChild(p);
            computerScore+=1;
        }
        console.log(userScore, computerScore);
    
}


piedraBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const userChoice = 'PIEDRA';
    round(userChoice, computerChoice);
    checkWinner(userScore, computerScore);
})

papelBtn.addEventListener('click', () => {
const computerChoice = getComputerChoice();
const userChoice = 'PAPEL';
round(userChoice, computerChoice);
checkWinner(userScore, computerScore);
})

tijeraBtn.addEventListener('click', () => {
const computerChoice = getComputerChoice();
const userChoice = 'TIJERA';
round(userChoice, computerChoice);
checkWinner(userScore, computerScore);
})





