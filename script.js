const readlineSync = require('readline-sync');

let name = readlineSync.question('\nDigite o nome do Heroi: ');
let xp = parseInt(readlineSync.question('\nDigite sua quantidade de XP: '));

var level;

switch (true) {
    case (xp <= 1000):
        level = "Ferro";
        break;
    case (xp > 1000 && xp <= 2000):
        level = "Bronze";
        break;
    case (xp > 2000 && xp <= 5000):
        level = "Prata";
        break;
    case (xp > 5000 && xp <= 7000):
        level = "Ouro";
        break;
    case (xp > 7000 && xp <= 8000):
        level = "Platina";
        break;
    case (xp > 8000 && xp <= 9000):
        level = "Ascendente";
        break;
    case (xp > 9000 && xp <= 10000):
        level = "Imortal";
        break;
    case (xp >= 10001):
        level = "Radiante";
        break;
    default:
        level = "Nível inválido";
}

console.log(`\nO Herói ${name} está no nível ${level}`);