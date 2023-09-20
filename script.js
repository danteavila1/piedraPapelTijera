function getComputerChoice (){
    let num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            return 'PIEDRA';
        case 1:
            return 'PAPEl';
        case 2:
            return 'TIJERA';
    }
}

function userChoice (){
    let choice = prompt("Elija Piedra, papel ó tijera").toUpperCase();
    return choice;
}

function round (userChoice, computerChoice) {
    let roundWinner = '';
    if (userChoice == computerChoice) {
        roundWinner = 'empate';
    }
    if (
        (userChoice == 'PIEDRA' && computerChoice == 'TIJERA') ||
        (userChoice == 'TIJERA' && computerChoice == 'PAPEL') ||
        (userChoice == 'PAPEL' && computerChoice == 'PIEDRA')
    ) {
        roundWinner = 'usuario';
    }

    if (
        (computerChoice == 'PIEDRA' && userChoice == 'TIJERA') ||
        (computerChoice == 'TIJERA' && userChoice == 'PAPEL') ||
        (computerChoice == 'PAPEL' && userChoice == 'PIEDRA')
    ) {
        roundWinner = 'computadora';
    }
    return roundWinner;
}

// game

function game(){
    let ronda = 0;
    let usuario = '';
    let computadora = '';
    let ganador = '';
    let scoreUsuario = 0;
    let scoreComputadora = 0;

    while (ronda <= 5) {
        usuario = userChoice();
        computadora = getComputerChoice();
        ganador = round(usuario, computadora);

        if(ganador == 'usuario'){
            scoreUsuario += 1;
            ronda += 1;
            console.log("gana el usuario");
        }
        else if (ganador == 'computadora'){
            scoreComputadora +=1;
            ronda +=1;
            console.log("gana la computadora");
        }
        else {
            console.log("empate");
        }
    }

    if (scoreUsuario > scoreComputadora) {
        console.log("ganaste");
    }
    else {
        console.log("perdiste");
    }

}

game();
