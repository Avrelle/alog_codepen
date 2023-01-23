/**
 * développer une logique de développeur - algo
 * 1 en pseudo code pour commencer
 * 2 ensuite en langage informatique
 *
 * l'ordinateur va choisir un nombre au hasard entre x et x.
 * Vous avez x essaies pour le trouver
 * Déclarer une variable de configuration de jeu
 * si la réponse est exact, alors on affiche dans la console un message élogieux avec l'affichage du nombre mystère et le nombre d'essai utilisé
 * sinon on affiche un message pour recommancer et on affiche le résultat
 * La fonction qui lance l'app doit avoir un paramètre pour choisir la difficulté (noob, beginner, hard, Hell)
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math
 */


//1 - Configurer N niveau de difficulté
//3 paramètres : 
//    - un nombre de départ / un nombre de fin / un nombre d'essai
const level = {
    noob: 
    {
        name:'noob',
        startNumber: 1,
        endNumber: 10,
        attempt:5,
    },
    beginner:
    {
        name:'beginner',
        startNumber: 1,
        endNumber: 20,
        attempt:3,
    },
    hard:
    {
        name:'hard',
        startNumber: 1,
        endNumber: 50,
        attempt:2,
    },
    hell:
    {
        name:'hell',
        startNumber: 1,
        endNumber: 100,
        attempt:1,
    }
   
}
//console.log(level.hell);

//2 - Générer un nombre au hasard selon le niveau de difficulté

function getRandomNumber(level){
    
        const randomNumber = Math.floor(
            Math.random()*(level.endNumber - level.startNumber) + level.startNumber
        );
        return randomNumber;
}
function run (level){
    const randomNumber = getRandomNumber(level);
    //playedNumbers généré par defaut en fonction du level.
    const playedNumbers = [1,2,3,4,5,6,7,8,9,10];
    playedNumbers.length = level.attempt;
    
    playedNumbers.forEach((number, index) => {
        let attempt = index>0?"essais" : "essai" // : = sinon
        if(number == randomNumber){
            console.log(`Vous êtes le meilleur et vous avez gagné en ${index+1} ${attempt}`);
        }
        else{
            console.log("Cheh");
        }
    });
}
run(level.hell);
//console.log(randomNumber);  

//3 - Proposer un nombre par essais selon le niveau de difficulté

//console.log(playedNumbers);
//4 - Comparer les/le nombres proposés avec le nombre généré


//5 - Afficher un msg selon la comparaison des nombres avec le nombre mystère et le nombre d'essaie, réssayer.



