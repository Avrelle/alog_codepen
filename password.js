/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimium 1 majuscule, 1 caractère spécial & 1 nombre
 */

// créer un tableau de caractères

const chars = "abcdefghijklmnopqrstuvwxyz";
const charsUpper = chars.toUpperCase();
const numbers = "0123456789";
const charsSpecial = ",;:!/.?%*&";

const all = [chars, charsUpper, numbers, charsSpecial];
console.log(all);

// récupérer 8 caractères de manière aléatoire
let password = "";

function charsRandom(all, lengthPassword) {
    for (let i = 1; i <= lengthPassword; i++) {
        const randomNumber = Math.floor(
            Math.random() * (chars.length),
            Math.random() * (charsUpper.length),
            Math.random() * (numbers.length),
            Math.random() * (charsSpecial.length),

        );
    password += (chars[randomNumber], charsUpper[randomNumber], charsSpecial[randomNumber], numbers[randomNumber]);
}
console.log(password);
}
charsRandom(all, 5);
// afficher le mot de passe