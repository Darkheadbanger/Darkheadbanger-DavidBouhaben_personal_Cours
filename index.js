const chocolatine = 5;
let pain = 15;
let client = ["carte", "espece"];

// expliquer de manière technique les proprietés d'une variable
// De type array
console.log(client.length - 1);

console.log(chocolatine);
pain = 3;
// Si l'un du chocolatine ou le pain est égale à 15 alors on paye espece ce qui est le cas, si non on paye avec la carte
if (chocolatine || pain === 15) {
  // (5 + 5) * 6 =! 5 + 5 * 6
  // 1 et 0 dans un tableu, on apelle ça une index
  console.log(client[1]);
} else {
  console.log(client[0]);
}
// Si une chocolatine ou pain est égale à 15 alors on paye par espèces; si non qui est le cas car chocolatine est 5 alors on paye par carte
if ((chocolatine || pain) === 15) {
  // (5 + 5) * 6 =! 5 + 5 * 6
  console.log(client[1]);
} else {
  console.log(client[0]);
}

console.log(pain);
console.log(chocolatine);
// Si l'un du chocolatine ou le pain est égale à 15 alors on paye espece ce qui est le cas, si non on paye avec la carte
let paiement1 = chocolatine || pain === 15 ? "espece" : "carte";
console.log(paiement1);

// Si une chocolatine ou pain est égale à 15 alors on paye par espèces; si non qui est le cas car chocolatine est 5 alors on paye par carte
let paiement = (chocolatine || pain) === 15 ? "espece" : "carte";
console.log(paiement);

// La référence, dans JS toute est objet

// Reference, les deux objets aloue deux adresses en mémoires differents
const boulangerie = { a: "pain" };
const boulangerie1 = boulangerie;
console.log(boulangerie === boulangerie1);
const boulangerie2 = { a: "pain" };
console.log(boulangerie === boulangerie2);

// Boucle
for (let i = 0, g = 1; i < 4, g < 3; i++, g++) {
  console.log(i, g);
}
// à comprendre
let number = [0, 1, 2];
for (let numero of number) {
  console.log(numero);
}
let number1 = [0, 1, 2];
for (let numero in number1) {
  console.log(numero);
}

let nombre = "50";

console.log(parseFloat(nombre));

// string
let salutation = "Bonjour";

console.log(salutation.charAt(5));
let boulangeries = "Bienvenue dans notre boulangerie à Pau";

// Concaténer deux chaînes de caractères avec concat()
// La méthode concat() concatène plusieurs chaînes de caractères passées
// en arguments avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.
console.log(salutation.concat(" Bienvenue ", "Chocolatine ", "Pain"));

// On split le 5ème dans
//
console.log(boulangeries.split(" ", 5));
let myString = "Hello David";
console.log(myString.split(" ", 1));
let boulangeriesArray = [
  "Bienvenue",
  "dans",
  "notre",
  "boulangerie",
  "à",
  "Pau",
];
// Coupe les deux premiers
// La méthode slice() permet d'extraire une partie d'une  chaîne de caractère en
// passant deux arguments: la position du début de la chaîne à extraire et éventuellement la position de fin.
// Si seule la position de début est précisée, l'extraction se fera de début jusqu'à la fin.
// Si une position négative est précisée, la position sera calculée à partir de la fin de la chaîne de caractères.
console.log(boulangeriesArray.slice(2));
console.log(boulangeriesArray.slice(-2));

// Numérique
// Exo parsing
// Pi
let pi = Math.PI;
console.log(pi);
// Nombre d'Euler, la base des logarithmes naturels, environ 2,718.
let E = Math.E;
console.log(E);
// Logarithme naturel de 2, environ 0,693.
let LN2 = Math.LN2;
console.log(LN2);
// Logarithme naturel de 10, environ 2,302.
let LN10 = Math.LN10;
console.log(LN10);
// Logarithme de base 2 de E, environ 1,442.
let LOG2E = Math.LOG2E;
console.log(LOG2E);
// Logarithme de base 2 de E, environ 1,442.
let abs = Math.abs(50.5);
console.log(abs);

// Je suis un client, je vais dans la boulangerie avec un portefouille
// Et ce qu'on veut, en fonctione de l'argent que j'ai dans le portefeuille
// J'ai sois juste un pain, une chocolatine et un cake au chocolat ou si non
// j'ai un pain, un croissant et des bonbon
// Si j'ai pas d'argent, je repart avec rien

// Exo switch à faire
// let clientPortefouille = parseFloat(prompt("Entrez votre argent ici: ", ""));

// switch (clientPortefouille) {
//   case 0.9:
//     console.log("Vous avez que 0.90cts, vous pouvez acheter un pain");
//     break;
//   case 1:
//     console.log("Vous avez 1 euros, vous pouvez acheter une chocolatine");
//     break;
//   case 1.2:
//     console.log(
//       "Vous avez que 1.20 euros, vous pouvez acheter un cake au chocolat"
//     );
//     break;
//   case 5:
//     console.log(
//       "Vous avez  5 euros, vous pouvez acheter un pain, un croissant et des bonbons"
//     );
//     break;
//   case 8:
//     console.log("Si vous avez 8 euros, vous pouvez tout acheter!");
//     break;
//   default:
//     console.log("Vous n'avez pas d'argent, vous ne pouvea rien acheter");
// }

// Exo switch à faire

// J'initialise à 1
let clientPortefouilles = 0;

switch (clientPortefouilles) {
  case 0.9:
    console.log("Vous avez que 0.90cts, vous pouvez acheter un pain");
    break;
  case 1:
    console.log("Vous avez 1 euros, vous pouvez acheter une chocolatine");
    break;
  case 1.2:
    console.log(
      "Vous avez que 1.20 euros, vous pouvez acheter un cake au chocolat"
    );
    break;
  case 5:
    console.log(
      "Vous avez  5 euros, vous pouvez acheter un pain, un croissant et des bonbons"
    );
    break;
  case 8:
    console.log("Vous avez 8 euros, vous pouvez tout acheter!");
    break;
  default:
    console.log("Vous n'avez pas d'argent, vous ne pouvea rien acheter");
}

// Exo while do
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[0].length; j++) {
      console.log(arr[i][j]);
    }
  }
}
printArray(arr);

// while do
let i = 0;
while (i < 10) {
  console.log(i++);
}

do {
  console.log(i++);
} while (i < 10);

// For
let array = Array.from(new Array(10).keys());

console.log(array);
for (let i = 0; i < array.length; i++) {
  let val = array[i];
  console.log(val);
}

// While;
console.log(array);
while (i < array.length) {
  let val = array[i];
  i++;
  console.log(val);
}

do {
  let val = array[i];
  i++;
  console.log(val);
} while (i < array.length);

for (let val in array) {
  console.log(val);
}

for (let val of array) {
  console.log(val);
}

// for each
array.forEach((val) => {
  console.log(val);
});

// expliquer de manière technique les proprietés d'une variable
// De type array
// La propriété length represente la longueur d'une chaine de caractère
// exprimée en nombre de points de code UTF-16. C'est une propretaire accessible
// en longueur seule
// console.log(client.length);
// La méthode forEach permet d'executer une fonction sur chaque élement du tableau
// Nous utilisons la boucle forEach principalement pour un tableau dynamic car on ne sait pas
// le nombre de fois de fois que cette boucle sera executé
// Nous utilisons for pour un tableau qu'on connait le nombre d'itération de cette boucle
// console.log(client.forEach());
// La méthode push ajoute un ou plusieurs élément à la fin du tableau et retourne la nouvelle taille du tableau
// La méthode push ajoute un ou plusieurs élements à la fin tableau et retourne la nuvelle taille du tableau
// La méthode push ajoute un ou plusieurs élements à la fin du tableau et retorune la ouvelle valeu du tableau
// La méthode push ajoute un ou plusieurs élement à la fin du tableau et retourne une nouvelle valeur du tableau
// console.log(client.push());
// La méthode map crée un nouveau tableau avec les résultats de l'appel d'une
// fonction fournie sur chaque élément du tableau appelant
// La méthode map crée un nouveau tableau avec avec les resulatas de l'appel d'une fonction
// Fournie sur chaque élément du tableau appelant
// La méthode map crée un nouveau tableau avec les resultats de l'appel d'une fonction
// Fournie sur chaque élément du tableau appelant
// La méthode map crée un nouveau tableau avec le résultat de l'appel d'une fonction fournie
// sur chaque élément du tableau appelant
// La méthode map créer un nouveau tableau de résultat d'une fonction fournie sur chaque élement
// Du tableau  appelant
// La méthode map créer un nouveau tableau du resultat d'une fonction fournie sur chaque
// élement du tableau appelant
// console.log(client.map());
// La méthode join créer et renvoie une nouvelle chaine de caractères (string) en concatenant (collant)
// Tous les element du tableau
// La concatenation utiise le virgule ou une autre chaine,fournie en argument, somme le separateur
// console.log(client.join());

// La méthod filter() créer et retourne un nouveau tableau contenant tous les elements du tableau
// d'origine qui remplissent une condition déterminée par la fonction callback
// console.log(client.filter());

// 25/Janvier/2022
// Un objet

// Qu'est ce qu'un objet ?
// Un objet est un ensemble de paires clé / valeur.
// Une paire clé / valeur est appelée une propriété. C'est pour cette raison que l'on dit aussi que les objets sont des ensembles de propriétés.
// Il faut voir les objets comme des représentations abstraites d'entités concrètes.
// Par exemple, on peut avoir une représentation abstraite d'employés.
// Chaque objet employé aura un ensemble de propriétés : un âge, une fonction, un salaire, etc. Voici un exemple d'objet :
const employe1 = {
  age: 42,
  salaire: 32000,
  fonction: "acheteur",
};
// Ici, age , salaire et fonction sont appelés clés ou noms des propriétés. 42 , 32000 et 'acheteur' sont les valeurs des propriétés.
// Pour créer un objet
// const monObjet = new Object();
// Toujours dire le terme technique
const monObjet = {};
monObjet.pied1 = "droit";
monObjet.pied2 = "gauche";
console.log(monObjet);
monObjet["main1"] = "gauche";
monObjet["main2"] = "droite";
console.log(monObjet);
// Modification d'une propriété d'un objet
employe1.age = 40;
console.log(employe1.age);

// Méthode
const myObject = {
  couleur: function () {
    console.log("rose");
  },
};
// Appeler la méthode a l'interieur de l'objet
myObject.couleur();

// La décomposition d'objet
// L'affectation par décomposition
// L'affectation par décomposition (destructuring) permet d'extraire des données d'un objet.
// Elle permet d'affecter des propriétés d'un objet à des variables ce qui permet de simplifier et d'améliorer la lisibilité du code.
// L'élément déstructuré se situe à droite d'une affectation (donc à droite de l'opérateur =).

// const unObjet = { toto: 1, tutu: 2 };
// const { toto: toto, tutu: tutu } = unObjet;
// // Équivaut à :
// const { toto, tutu } = unObjet;
// console.log(toto); // 1
// console.log(tutu); // 2

// Iterré sur un objet
// instruction for... in
const objet = {
  a: 1,
  b: 2,
  c: 3,
};

for (const myObject in objet) {
  // $ permet de recuperer une expression JS(variable)
  console.log(objet[myObject]);
  console.log(`${objet[myObject]}`);
}

// Le format JSON
// le format JSON (JavaScript Objet Notation) est le format d'échange pour les données dans des app web
// La méthode
const object = {
  a: {},
  b: 42,
  c: true,
  d: "test",
};
console.log(object);
console.log(JSON.stringify(object));
// API (application programming interface)

const json = JSON.stringify(object);
const objet1 = JSON.parse(json);
console.log(objet1);
// FUNCTION
// Une fonction est un bloc d'un insturction qui peut être executer
// dans des differents endroit dans le programme
// Elle peut pâr exemple effectuer plusieurs taches et/ou retourner
// Une ou plusieurs valeurs calculer, il est possible de passer
// des valeurs dynamique a une fonciton c'est ce qu'on appelle
// les arguments
// Et donc, les paramètres sont les noms définis pour les arguments
// recu lors de la définition de la function
// En JS les fonctions sont des objets Function, elles peuvent donc être copier

// Exo : Fusionner des objets avec la méthode assign()
// La méthode Object.assign() permet de copier toutes les propriétés d'un ou plusieurs objets sur un autre objet cible.
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const styleMusical = {
  style: "Heavy Metal",
  sousStyle: "Speed Death",
  batteur: "Lars",
  instrument: "Guitare",
};

const groupe = {
  groupe: "Metallica",
  // Ici on ajoute le même propriété que le styleMusical pour instrument
  // Si on a un multiple objet avec le même propriété, le dernier propriété va écraser le valeur du premier propriété
  instrument: "Lead Guitare",
};
// Ici, la méthode Object.asign combine et fusion les deux objets plus haut
// On peut en réalité plus de deux objets dans la méthdode assign
let resultat = Object.assign(styleMusical, groupe);
// let resultat1 = styleMusical.concat(groupe)
console.log(resultat);

// Ici, je peux ajouter un nouveau argument, dans ce cas un nouveau objet
let resultat1 = Object.assign(styleMusical, groupe, {
  chanteur: "James Hetfield",
});
console.log(resultat1);

// On peut aussi crée un diplication ou clonner un objet en utilisant la méthode assign
let resultClone = Object.assign({}, resultat1);
console.log(resultClone);

// Ici, on change directement la propriété d'instrument dans l'objet styleMusicam
styleMusical.instrument = "Battery";
console.log(styleMusical);
// On peut voir ici que nous changeons la valeur de la propriété batteur
// Le changement n'est appliqué que dans resultClone en bas alors que l'objet resultat1 reste intact
resultClone.batteur = "Lars Ulrich";
console.log(resultClone);

// Je crée une function avec le paramètre nomPrenom qui recois l'objet musicien qui comporte deux proprtés nom prenom guitariste Mertzllica
/**
 * Permet de voir le nom et le prenom d'un artiste, elle prends en paramètre un objet de type string
 * @param {*} nomPrenom
 */
function musicien(nomPrenom = { firstName: "Robert", lastName: "Hammet" }) {
  // le paramètre nomPrenom est égale au variable default
  // On peut voir que le paramètre nom prenom qui comporte la propriété firstName
  // Se fait écraser par la propriété firstName de la variable defaults

  // nomPrenom = defaults;

  // Pour pouvoir recuperer la propriété firstName du musicien et le faire passer dans le paramètre nomPrenom
  //  il faut utiliser la méthode Object.assign pour copier l'objet musicien qui se trouve
  // Dans le paramètre nomPrénom et écraser le variable default et retourner l'object target (musicien)

  // nomPrenom = Object.assign(nomPrenom);
  console.log(`${nomPrenom.firstName} ${nomPrenom.lastName}`);
}
musicien({
  firstName: "Kirk",
  lastName: "Hammet",
});

// Exo, voir en detaille l'affectation par décomposition (destructuring)
// L'affectation par décomposition ou destructuring est  une expression JS qui permet
// d'extraire les données d'un tableau de manière destructuré.
// Exo: destructuring
const alphabet = ["a", "b", "c", "d", "e", "f"];
const numbers = ["0", "1", "2", "3", "4", "5"];
// Si on utiise pas la destructuring, nous pouvons extraire les données de ce tableau de cette manière
// let a = alphabet[0];
// let b = alphabet[1];
// console.log(a, b);

// Si on utilise la destructuring, on le fait de cette manière
// L'idée de la destructuring est que, on decompose le tableau alphabet
// Et on pose le tableau à droite et on récupère toutes les elements du tableau en utilisant []
// La position de la variable a et b par exemple est l'endroit ou se trouve les elements du tableau alphabet
// A premier element, on récupère element numero 0 etc
// On peut changer le nom de variable, on n'est pas obliger de mettre le même nom que 'elemnt du tableau alphabet
const [ala, b, , d] = alphabet;
console.log(ala, b, d);

// Assigner les variables depuis des objets imbriqué destructuré
const nest = {
  first: { x: 5, y: 6 },
  second: { x: 10, y: 12 },
};

const {
  first: { x: firstX, y: firstY },
  second: { x: secondX, y: secondY },
} = nest;
console.log(firstX, firstY, secondX, secondY);

// Assigner des variables depuis le tableau
// Si on ne veut pas inclure un element, on peut ecrire directement la quatrième element par exemple
const [Metallica, , , anthrax] = ["Metallica", "Megadeth", "Slayer", "Anthrax"];
console.log(Metallica, anthrax);
// Expliquer l'operateur rest et réaliser la destructuration d'objet imbriquer
// On peut utiliser le paramètre ...rest pour extraire le reste des données directement, sans tous les écrire
// Le paramètre rest permet de representer un nombre indéfini d'arguments sous forme d'un tableau
const [ss, rr, ...rest] = ["C++", "Go", "JS", "Ruby", "PHP", "Java", "Python"];
console.log(ss, rr);
console.log(rest);

// Fusionner des objets avec l'opérateur Spread …
// L'opérateur Spread a la même syntaxe que l'opérateur Rest : ….
// Avec l'operateur spread, nous pouvons recuperer tous les elements du tableau alphabet et fusioner avec le tableau numbers par exemple
const nouvelleTableau = [...alphabet, ...numbers];
// Equivalent de
const newArray = alphabet.concat(numbers);
console.log(nouvelleTableau);
console.log(newArray);

// l'operateur spread avec la function
// On crée la division qui reçois deux arguments, le premier nombre et lsecond nombre
function additionEtMultiplication(firstNumber, secondNumber) {
  // On retourne les deux arguments et nous creons deux propriétés donc l'adition et la multiplication des deux argumennts
  return [
    firstNumber + secondNumber,
    firstNumber * secondNumber,
    firstNumber / secondNumber,
  ];
}
// On récupère le premier propritété qui est l'adition (sum) et la deuxième propritété qui est la multipmication (multiply)
// Nous pouvons créer la troisième propriété même si cela n'existe pas. Si cette propriété n'existe pas dans la function alors il retourne 'pas de division' si non, il retoure la division entre deux arguments
const [
  sum,
  multiply,
  division = "Pas de division",
  pasDivision = "Pas de division",
] = additionEtMultiplication(5, 10);
console.log(sum, multiply, division, pasDivision);

// La destrcucturing et le spread sur un objet
//  Nous creons un ubket avec les propriétés et les valeurs
let personne1 = {
  nom: "Bouhaben",
  prenom: "David",
  age: 33,
  passion: "Heavy Metal",
  address: {
    ville: "Bizanos",
    addresse: "Avenue Léon Heid",
    lieuDit: "La Gravière",
  },
};
// Le syntaxe de decomposition ou spread permet d'etendre un itérable (par exemple un tableau ou une chaine de caractèrs)
// en lieu et places de plusieurs arguments (pour les appelles de fonctions), ou plusueurs elements (pour les literaux du tableau)
// ou paires clés/valeurs (pour les litteraux d'objets)

// Nous faisons la destructuring
const { nom: nom, prenom: prenom, ...reste } = personne1;
// Nous pouvons récuperer chaque propriétés normalement
console.log(nom, prenom);
// Si on utilise
console.log(nom, prenom, reste);
// Nous pouvons aussi d'extraires les données clés/valeurs nestés
let {
  nom: nom1,
  prenom: prenom1,
  age: age1,
  passion: passion1,
  address: { ville: ville1, ...reste1 },
} = personne1;
console.log(nom1, prenom1, ville1, reste1);

// Nous pouvons aussi ajouter un string pour dire si propriété n'existe pas alors par defaut c'est cette valeurs (string) qui va être marqué
// On peut voir que la passion est heavy metal car c'est déjà déclarer dans mon objet alors que metier deviens programmeur
console.log(
  nom1,
  prenom1,
  (passion1 = "Musique"),
  (metier1 = "Développeur Web")
);

// L'objet personne deux ci dessous peut hérité toutes les clés/valeurs de l'objet personne 1 en utilisant l'operation spread/rest
// On peut voir que la valeur de l'age de la personne 1 est écrasser par la personne 2 et on peut voir aussi que toutes les clés valeurs
// De la personne 1 va remplir (heriter) toutes les clés valeurs de l'objet personne 2, on peut voir aussi que la clé/valeur nourritureFavorit s'ajoute car la personne 0
// Ne peut pas hériter une clé/valeur de la personne 1 si cette clé/valeur n'existe pas
let personne2 = {
  age: 27,
  nourritureFavorit: "riz",
};

let personneTrue = { ...personne1, ...personne2 };
console.log(personneTrue);

// On peut l'utuliser dans la function
// Sans la destructuring, on est obliger de declarer l'argument user pour pouvoir acceder la valeur de la clé de la variable personneTrue
function utilisateur(user) {
  console.log(user);
  return console.log(
    `Je m'apelle: ${user.prenom} ${user.nom}, et j'ai ${user.age}`
  );
}

utilisateur(personneTrue);

// Si on utilise la destructuring, nous pouvons déstructurer les arguments pour pouvoir extraires la clé valeur directement
function utilisateurDestruct({ prenom, nom, age }) {
  // console.log(user);
  return console.log(`Je m'apelle: ${prenom} ${nom}, et j'ai ${age}`);
}
utilisateurDestruct(personneTrue);

// Copier un objet ca sera en attente du spread et du rest
const obj = { prop: "value" };
console.log(obj["prop"]);
console.log(obj.prop);

const employe11 = {
  age: 42,
  salaire: 32000,
  fonction: "acheteur",
};
console.log((employe11.age = 30));

// const obj = { a: 1 }; //Il bouge pas
// const obj2 = { ...obj }; // C'est l'obj2 qui bouge

// Chapitre function 28/01/2022
// Une fonction sans paramètre
function musique() {
  // Instruction
}
// Avec paramètre
function styleMusical2(style, instruments) {
  //Instruction
}
// Function dans une constant
const pays = function capitale() {
  // Instruction
};

function programmingLanguage(Cincremente, JavaScript) {
  console.log(Cincremente, JavaScript);
}
programmingLanguage((Cincremente = "Difficile"), (JavaScript = "Facile"));

// function programmingLanguage(Cincremente = "Difficile", JavaScript) {
//   console.log(Cincremente, JavaScript);
// }
// programmingLanguage((Cincremente), (JavaScript = "Facile"));

const nomer = [0, 1, 2, 3];

function summ(...nomer) {
  let result = 0;
  for (let i = 0; i < nomer.length; i++) {
    result += nomer[i];
  }
  console.log(result);
}
// On ne peut pas itérer un tableau sur un Rest, la solution est de mettre directement 0.1.2.3.4
summ(0, 1, 2, 3);
// Pour définir la valeur retournée par une fonction, il faut utiliser le mot clé return
// Une fonction dont  vous ne spécifiez pas la valeur de retour, retourne Undefined
function addition(valeur1, valeur2) {
  return valeur1 + valeur2;
}
// Il faut donc ne pas oublier le return si votre function retourne. une valeur
const total = addition(1, 2);
console.log(total);

// Chercher une école au lieu du travail pour l'instant!
// Et continue a travailler avec Jérome
// https://oclock.io/?gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff22cfF9U-aQrVLJur95ehWC3Bq77yNYreZcLCc8uB2o0XQwLkEAyxQaAvBuEALw_wcB
// O'clock raté, a refaire dans un mois
// Wild code school déjà inscrit
// Ou simplon a Pau ou Bordeaux, école physique!
console.log(3 < 10 || "1fraises".length === 7);

// 02/02/2022
// Chapitre 3:

// Pour environnement lexical

// environnementLexical = {
//   a: 25,
//   obj: <référence de l’object>
//   maFonction: <référence à la fonction>
//   parent: <référence à l'environnement lexical parent>
// }

// Environnement lexical et contexte d’exécution
// Cette leçon est très importante si vous voulez comprendre de nombreuses choses en JavaScript, aussi n'hésitez pas à y passer du temps et à y revenir plusieurs fois.
// Elle vous permettra ensuite de comprendre la pile d'exécution (stack), les fermetures (closures), la portée des fonctions et plein d'autres notions fondamentales.
// L'environnement lexical est l'endroit où sont stockés les identifiants, c'est-à-dire les noms des variables et
// Contexte d'exécution global et objet global
// En JavaScript , un objet global est toujours créé par le moteur.
// Dans un navigateur, les variables et les fonctions déclarées dans le contexte global sont créées sur
// l'objet global qui est window .
// Dans Node.js , il y a bien un objet global mais les variables et les fonctions sont attachées à un module et non pas à cet objet.

// La chaine de porter
let foo = 2;
function a() {
  console.log(foo);
}
function b() {
  let foo = 1;
  a();
}
b(); // 2

// environnementLexicalGlobal = {
// foo: 2,
// a: <référence à la fonction a>
// b: <référence à la fonction b>
// environnementParent: <null>
// }

let foo = 2;
function b() {
  let foo = 1;
  foo = 3;
  console.log(foo);
  function a() {
    console.log(foo);
  }
  a();
}
b(); // 1

// Chapitre 4 : Le mot clé "this"
// Qu'est-ce que "this"?
// this est un mot clé JS permettant d'acceder a l'objet représentant le contexte d'execution.
// Attention ! Ici, la valeur de this dépend du contexte d'execution et non pas de l'environement l'exical!
// Autrement dit, la valeur de this dépend de l'endroit de l'exectuion c'est a dire de l'endroit ou il est appelée.
// console.log(this === window); return true

function test() {
  console.log(this === window);
}
test(); // true

const objet = {
  maMethode() {
    console.log(this === objet);
  },
};

objet.maMethode(); // true
// Exo, revoir le contexte de l'execution globale et parents
// La phase creation.
// Quand le javascript execute pour la première fois, il crée
// le contexte execution globale. Pendant cette phase, le moteur javascript executes ces tâches:
// Créer l'objet globame window dans le navigateur ou global dans node.js
// Créer l'objet this and le fusioner avec l'objet global donc window
// Configurer les espaces mémoire pour stocker des variables et des références de fonction
// Stocke les functions dans les espaces mémoires et les variables dans le contexte globales avec les valeurs initiales non définies

// Chapitre 5: la function fléché

// La function fléchée est la function utilisé le plus souvent dans la vie de développeur JS
// La function fléché est une fonction dites synonyme et plus précise
(param1, param2) => {
  // instruction 1;
  // instruction 2;
};

(param1) => {}; // Possible de voir sans le () par exemple param1 =>

const double = (nombre) => nombre * 2;
double(7);
// Utilise au max la function fléché au lieu function classique
// Exo function fléché, crée 3 functions féchées

// Chapitre 6: function de rappel(Callback)
// Le troisième argument donc (err, data) est ce qu'on appelle le callback
// Il y a souvent en angular
Twitter.get("/tweets", params, (err, data) => {
  //Params peu être n'importe quoi par exemple id d'un post ou commentaire
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

setTimeout(() => console.log("Terminé"), 1000);

// Chapitre 7: la fermeture(closure)

// Qu'est ce qu'une fermeture
// Une fermeture (ou closure) est une fonction qui utilise des identifiants de la portée parente,
// et ce même si la fonction parente n'existe plus.

function fonction1() {
  const prenom = "Jean";
  return () => console.log(prenom);
}

const fonction2 = fonction1();
fonction2(); // "Jean"

function créerCompteur() {
  let compteur = 0;
  return () => ++compteur;
}

const compteur1 = créerCompteur();
const compteur2 = créerCompteur();

compteur1(); // 1
compteur1(); // 2
compteur2(); // 1
// Chacun appelle la même function mais c'est tout, chaque variable l'utilise simplent

// Chapitre 8: les tableaux(array)
// Exercices:
// Crée un constant avec un tableau
const heavyMetalTraditione = [
  "Accept",
  "Alcatrazz",
  "Angel Witch",
  "Black Sabbath",
];
// Crée un consant avec un tableau mais avec la méthode from de l'objet Array
// Retourne tableau du string
Array.from("Slayer"); // ["S", "l", "a", "y", "e", "r"]
// Array.from() avec function fléchée
Array.from([1, 2, 3], (multiplication) => multiplication * 2);
// Array.from(), récuperer les arguments dans une fonction
function pays(Indonesie) {
  return Array.from(Indonesie);
}
pays((Indonesie = "Indonésie"));
// Array(9) [ "I", "n", "d", "o", "n", "é", "s", "i", "e" ]
function pays(a, b) {
  return Array.from(a + b);
}
pays("Indonesie", "France");
// ["I", "n", "d", "o", "n", "e", "s", "i", "e", "F", "r"]

function pays() {
  return Array.from(arguments);
}
pays("Indonesie", "France");
// Array [ "Indonesia", "France" ]

function pays() {
  return Array.from(arguments);
}
pays(["Indonesie"], ["France"]);
// Array [ (1) […], (1) […] ]
// 0: Array [ "Indonesie" ]
// 1: Array [ "France" ]

// Utilisation avec tous les objets itérables...
// set
const consol = new Set([
  "Playstation",
  "Playstation",
  "Playstation",
  "Xbox",
  "Xbox",
  "Nintendo",
]);
// Set == ensemble
// L'objet Set (Ensemble en français) permet de stocker des valeurs uniques
Array.from(consol);
console.log(consol);
// Array(3) [ "Playstation", "Xbox", "Nintendo" ]
// map
const ville = ["Paris", "Rome", "Berlin", "Marseille"];
const villeLength = ville.map((x) => x.toUpperCase());
Array.from(ville);
// Définition Set, Set retourne un tableau avec des éléments uniques
// Définition Map, Map retourne un tableau avec des élements modifiés via une fonction fléchés
const ville = new Map([
  ["Paris", "Eiffel"],
  ["Rome", "Pise"],
  [1, 2],
  [3, 4],
]);
Array.from(ville.values());
// Array(4) [ "Eiffel", "Pise", 2, 4 ]
const ville = new Map([
  ["Paris", "Eiffel"],
  ["Rome", "Pise"],
  [1, 2],
  [3, 4],
]);
Array.from(ville.keys());
// On peut aussi générer un séquence de nombre
Array.from({ length: 6 }, (d, a) => a); //si on choisit d, cela fait undefined 6 fois je ne comprends pas
// Array(6) [ 0, 1, 2, 3, 4, 5 ]

// Utilise l'objet Array avec la méthode of et aussi la méthode isArray
// La méthod Array.of créer un tabeleau avec un seul element 7 et Array(7) créer un tableay avec 7 elements
Array.of(3); // Array [ 3 ]
Array.of(1, 2, 3); // Array(3) [ 1, 2, 3 ]

Array(6); //[, , , , , ,]
Array(1, 2, 3); // Array(3) [ 1, 2, 3 ]
// La méthode isArray permet de vérifier su l'objet passé en argument est un objet Array ou non,
// Si oui, elle renvoie True si non False
Array.isArray([]); // true
Array.isArray(); // false
Array.isArray([5]); // true
Array.isArray({}); // false
Array.isArray(new Array()); // true
Array.isArray(null); // false
Array.isArray(new Array("a", "b", "c")); // true
Array.isArray(undefined); // false
Array.isArray(new Array(3)); // true
Array.isArray(17); // false etc
// Créer un const appelé tableau et on doit acceder a ses propriétés
const tableau = {
  festival: "Hellfest",
  festivaliers: 200000,
  billet: 295,
  groupeFavoris: "Primordial",
};
// Il existe plusieurs manière pour acceder au prorietaires d'un objet
// Avec la notation point
tableau.festival;
// Avec les crochets
const tableau = {
  festival: "Hellfest",
  festivaliers: 200000,
  billet: 295,
  groupeFavoris: "Primordial",
};
tableau["festivaliers"];
// Méthode de la destructuring
const tableau = ["Hellfest", 200000, 295, "Primordial"];
const [[hellfest, festivaliers], ...rest] = tableau;
console.log(hellfest);
// Avec alias
const [festivaliers] = tableau;
console.log(festivaliers);
// https://dmitripavlutin.com/access-object-properties-javascript/
const propriété = groupeFavoris;
// On utilise le tableau avec la méthode .length, une fois utilisé
// il faut utiliser la boucle for pour iterer
const jeuxObj = {
  guerre: "Call of Duty",
  sport: "Fifa",
  prixNeuf: 70,
};
// Nous pouvons utiliser la méthode Object.keys() avec la propriété length
// pour pouvoir recuperer la longueur de l'objet en question
const longueur = Object.keys(jeuxObj).length; // 3 propriété
console.log(longueur);
// en utilisant For
let size = 0,
  jeuxKey;
for (jeuxKey in jeuxObj) {
  if (jeuxKey.hasOwnProperty(key)) {
    size++;
  }
}
// Nous savons que nous ne pouvons pas utiliser la propriété length directement
// dans l'objet car l'objet ne cnotient pas la propriété length. Juste le string et le tableau
//  qui ont la propriété length

// Montrer comment modifier la référence d'un élement du tableau
const playstation = ["ps1", "Ps2", "Ps3", "Ps4", "Ps5"];
// Ici nous allors assigner le tableau de la variable playstaton a deuxième variable
// playstationCopy et on modifie le tableau via la deuxième variables
console.log("playstation", playstation);
let playstationCopy = playstation;
playstationCopy[0] = "Playstation 1";
console.log("playstationCopy", playstationCopy);
// playstation == playstationCopy sont le même objet

// Nous pouvons utiliser la méthode slice ou concat pour créer une copie du tableau
// Ensuite, si les elements de l'array sont des primitives alors nous pouvons modifier les elements
// de la deuxième varibales sans affecter le tableau originel
//
const xbox = ["xbox", "xbox 360", "xbox one", "xbox series"];
const xboxCopySlice = xbox.slice();
const xboxCopyConcat = xbox.concat();
// xboxCopy === xbox false car ne sont pas les même objets
xboxCopySlice[1] = "J'ai xbox 360";
xboxCopyConcat[0] = "Je n'ai pas xbox";
console.log("xbox", xbox);
console.log("xboxCopySlice", xboxCopySlice);
console.log("xboxCopyConcat", xboxCopyConcat);

// Le problème en utilisant la méthode concat ou slice est que si
// on veut modifier un tableau dans un tableau (imbrication), la modification va
// le tableau originel et va modifier aussi le tableau originel
const instrument = [
  ["Guitare electrique", "Guitare acoustique"],
  ["batterie acoustique", "batterie electrique"],
  ["bass acoustqiue", "basse electrique"],
];
const instrumentCopyConcat = instrument.concat();
const instrumentCopySlice = instrument.slice();
instrumentCopyConcat[0][0] = "Guitare acoustique electrique";
console.log("instrumentCopyConcat", instrumentCopyConcat, "===", instrument);
//  Le résultat est le même, même si on utilise la méthode Array.from ou spread operateur
const instrumentCopyFrom = Array.from(instrument);
// ou
const instrumentCopySprad = [...instrument];
console.log("instrumentCopyFrom", instrumentCopyFrom);
console.log("instrumentCopySprad", instrumentCopySprad);

// Pour remedier ce problème, nous devons utiliser le for loop pour iterer
// chaque element et changer avec slice

const instrument = [
  ["Guitare electrique", "Guitare acoustique"],
  ["batterie acoustique", "batterie electrique"],
  ["bass acoustqiue", "basse electrique"],
];

const instrumentHold = []; // Créer un tableau vide pour tenir la copie
// Utilisation de for loop pour appliquer le slice dans le sous-tableaux
for (let i = 0; i < instrument.length; i++) {
  instrumentHold[i] = instrument[i].slice();
}

instrumentHold[1][0] = "batterie electronique";
console.log("instrument originel", instrument);
console.log("instrumentHold", instrumentHold);

// Pour la partie nest d'un tableau qui comporte des objets je ne comprends pas
// https://www.dyn-web.com/javascript/arrays/value-vs-reference.php

// sous chapitre: imbirication(nest) de tableau
// Il faut créer un constant tableau avec des tableau à l'interieur
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
// console.table(religions)
// Afficher les données du première argument du premier tableau
const monotheistArray = religions[0];
console.log("monotheist", monotheistArray);
// Afficher les données du première argument des sous tabeau tableau(nest)
const monotheistString = religions[0][0];
console.log("monotheistString", monotheistString);
const christianisme = religions[0][1][0];
console.log("christianisme", christianisme);
// Afficher la derniere donnée du dernier tableau
// Nous pouvons utiliser la propriété length pour récuperer le dernier element
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  let lastReligions = religion[religion.length - 1];
  console.log(`Le dernier religion est ${lastReligions}`);
};
getLastReligion(religions); // Ca ne fonctionne pas, avec cette méthide je récupère la dexième
// tableau donc ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]] alors que je veux juste le confucianisme
// Nous pouvons aussi utiliser la méthode pop()
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  let lastReligions = religion.pop();
  console.log(`Le dernier religion est ${lastReligions}`);
};
getLastReligion(religions); // Ca ne fonctionne pas, avec cette méthide je récupère la dexième
// tableau donc ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]] alors que je veux juste le confucianisme
// Nous pouvons utiliser la méthode flat.
// La méthode flat permet de créer un nouveau tableau contentant les élements des
// sous-tabeaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre  une profondeur donnée
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion.flat();
  const lastArray = iterateReligion[iterateReligion.length - 1];
  console.log(`Le dernier religion est ${lastArray}`);
};
getLastReligion(religions); // Ca ne fonctionne pas, avec cette méthide je récupère la dexième
// tableau donc ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]] alors que je veux juste le confucianisme
// En mélangeant length et pop, on extrait polytheist
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  let iterateReligion = religion.pop(); //flat() pareil
  let iteratePolytheism = iterateReligion[religion.length - 1];
  const lastReligion = iteratePolytheism;
  console.log(`Le dernier religion est ${lastReligion}`);
};
getLastReligion(religions); // Ca ne fonctionne pas, avec cette méthide je récupère la dexième
// Melanger la méthode flat et pop permet d'etraire le dernier réligion de la deuxième tableau
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion.flat();
  const getLastArray = iterateReligion[iterateReligion.length - 1];
  const getLastEement = getLastArray.pop();
  console.log(`Le dernier religion est ${getLastEement}`);
};
getLastReligion(religions);
// Deux fois length fonctionne
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion.flat();
  const getLastArray = iterateReligion[iterateReligion.length - 1];
  const getLastEement = getLastArray[getLastArray.length - 1];
  console.log(`Le dernier religion est ${getLastEement}`);
};
getLastReligion(religions);

// Deux fois length fonctionne avec pop en premier au lieu flat fonctionne
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion.pop();
  const getLastArray = iterateReligion[iterateReligion.length - 1];
  const getLastEement = getLastArray[getLastArray.length - 1];
  console.log(`Le dernier religion est ${getLastEement}`);
};
getLastReligion(religions);

// Utiliser que length fonctionne
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion[religion.length - 1];
  const getLastArray = iterateReligion[iterateReligion.length - 1];
  const getLastEement = getLastArray[getLastArray.length - 1];
  console.log(`Le dernier religion est ${getLastEement}`);
};
getLastReligion(religions);

// La méthode slice fonctionne aussi a la fin
const religions = [
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];
const getLastReligion = (religion) => {
  const iterateReligion = religion[religion.length - 1];
  const getLastArray = iterateReligion[iterateReligion.length - 1];
  let getLastEement = getLastArray.slice(-1);
  console.log(`Le dernier religion est ${getLastEement}`);
}; 
getLastReligion(religions);

// ou tout simplement avec la méthode flat
const religions = [ 
  ["Monotheist", ["Christianisme", "Islam", "Judaisme"]],
  ["polythéiste", ["Bouddhisme", "Hindouisme", "confucianisme"]],
];  
const iterateReligions = religions.flat(2);
let getLastEement = iterateReligions[iterateReligions.length-1]
console.log(getLastEement);

// Décomposition des tableaux avec rest

// Expliquer ce que peut faire la méthode rest
// Montrer comment utilise la méthode rest sur un tableau

// Méthode push permet d'ajouter un ou plusieurs element a la fin du tableau
let tableau = ["a", "b", "c", "d"];
tableau.push("e", "f");
console.log(tableau);
let tableau1 = ["a", "b", "c", "d"];
tableau1.unshift("0");
console.log(tableau1);

let tableau1Copy = [...tableau, "g", "h"];
console.log(tableau1Copy);
tableau1Copy.unshift("0");
tableau1Copy.splice(0, 1);
console.log(tableau1Copy);

const pair = [0, 2, 4, 6, 8, 10];
pair.includes(8); //true
pair.includes(19); //false car n'existe pas

const voitures = garage.find((el) => el.length > 7);
console.log(voitures);
// Set retorune les elements unique d'un tableau
// Map retourne les elements modifiés d'un tableau via la function fléchés
// Find retourne le premier élement correspondant à la condition poser/find par exemple el.length > 7
const garage = ["Porche", "Lamborghini", "Ferari", "Peugeot"];
// const garage2 = garage.map((el) => el.length); // Array [ 11, 6 ]
const garage2 = [...garage]; //Array [ "Lamborghini", "Ferari" ]
// Slice
const garage3 = garage2.slice(1, 3);
console.log("garage2", garage2);
console.log("garage3", garage3);

// Copier un tableau avec la méthode slice()
// La méthode slice() renvoie un nouveau tableau, contenant une copie superficielle d'une partie du tableau d'origine.
// La méthode peut prendre facultativement en premier paramètre un index de début et en second un index de fin exclus.

const garage4 = Array.from(garage);
console.log("garage4", garage4);

const garage5 = garage2.concat(garage3);
console.log("garage5", garage5);

const garage6 = [...garage2, ...garage3];
console.log("garage6", garage6);

const alphabet = ["d", "a", "v", "i", "b"];
// Methode Sort pour trier un tableau
alphabet.sort();
console.log("alphabet", alphabet);

const chateau = [
  "Versaille",
  "Paris",
  "saint-germain",
  "Bordeaux",
  "Guadeloupe",
];
chateau.sort((a, b) => a.localeCompare(b, "fr"));
console.log(chateau);

const priceCar = [{ price: 20000 }, { price: 2000 }, { price: 200000 }];
priceCar.sort((valeur1, valeur2) => valeur1.price - valeur2.price);
console.log(priceCar);

const phone = ["samsung", "iphone", "poco", "pixel"];
// Il faut utiliser forEach dés qu'on a besoin un index
phone.forEach((element, index) =>
  console.log(`a l'index ${index} nous avons ${element}`)
);

for (const mobile of phone) {
  console.log(`${mobile}`);
}
// For in pour un objet. Utilise for of et forEach pour le tableau obligatoirement
// for (const mobile in phone) {
//   console.log(`${mobile}`);
// }

// filter
// La méthode filter retourne un tableau qui applique le filtre

const chaussure = [
  { taille: 42 },
  { taille: 36 },
  { taille: 40 },
  { taille: undefined },
  { taille: null },
];
const newShoes = chaussure.filter((element) => element.taille >= 40);
console.log(newShoes);
