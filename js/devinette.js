/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

//Variable comptant le nombre d'essais du joueur 
var essais = 1;

//Variable qui va contenir le chiffre tapé par l'utilisateur
var nombreSaisiUtilisateur = 0;

while(essais <= 6 && nombreSaisiUtilisateur !== solution) {

	nombreSaisiUtilisateur = Number(prompt("Devinez le chiffre ! Entrez un chiffre compris entre 1 et 100 ("+ essais +"/6) :"));
	
	/* Conditions permettant de savoir si le nombre saisi est trop grand par rapport au chiffre à deviner, 
	sinon trop petit, sinon s'il ne correspond pas aux deux conditions précédentes (nombre trouvé) */
	if(nombreSaisiUtilisateur > solution){
		console.log(nombreSaisiUtilisateur + " est trop grand.");
		essais++;
	} 
	else if (nombreSaisiUtilisateur < solution) {
		console.log(nombreSaisiUtilisateur + " est trop petit.");
		essais++;
	} 
	else {
		console.log("Bravo ! La solution était " + solution);

		if(essais > 1) {
			console.log("Vous trouvé en "+ essais +" essais.");
		} else {
			console.log("Vous trouvé en un essai.");
		}
	}

	/* Une fois que le joueur a tenté six fois sans succès de deviner le nombre, 
	cette condition s'éxécute puis on affiche le game over et la solution. */
	if(essais > 6) {
		console.log("Perdu... la solution était " + solution);
	}
}

