let arrayOfNumbers = [1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7];

// * Afficher le premier élément du tableau arrayOfNumbers
console.log(arrayOfNumbers[0]);

// * Afficher l'avant dernier élément du tableau arrayOfNumbers
console.log(arrayOfNumbers[arrayOfNumbers.length - 2]);

// * Trier le tableau arrayOfNumbers par ordre croissant
arrayOfNumbers.sort((a, b) => a - b);
console.log(arrayOfNumbers);

// * Supprimer les chiffres en double du tableau arrayOfNumbers
arrayOfNumbers =  [...new Set(arrayOfNumbers)];
console.log(arrayOfNumbers);

// * Générer un nouveau tableau arrayOfNegativeNumbers contenant les mêmes chiffres que arrayOfNumbers en négatif
let arrayOfNegativeNumbers = arrayOfNumbers.map(n => -n);
console.log(arrayOfNegativeNumbers);

// * Générer un nouveau tableau arrayOfSmallNumbers ne contenant que les chiffres de arrayOfNumbers infèrieurs à 10
let arrayOfNumbersSmallerThan10 = arrayOfNumbers.filter(n => n < 10);
console.log(arrayOfNumbersSmallerThan10);

// * Vérifier si le tableau arrayOfNumbers contient plus de 5 chiffres
console.log(arrayOfNumbers.length > 5);

// * Vérifier si le tableau arrayOfNumbers contient le chiffre 10
console.log(arrayOfNumbers.includes(10));

class AugmentedNumber {
    constructor(value) {
        this.value = value;
    }

    isEven() {
        return this.value % 2 == 0;
    }

    isPositive() {
        return this.value >= 0;
    }

    isMultipleOf3() {
        return this.value % 3 == 0;
    }
}

// * Ecrire les methodes isPositive() et isMultipleOf3() de la classe AugmentedNumber

// * Générer un nouveau tableau arrayOfAugmentedNumbers avec arrayOfNumbers qui contiendra des AugmentedNumber au lieu de simples chiffres
let arrayOfAugmentedNumbers = arrayOfNumbers.map(n => new AugmentedNumber(n));

// * Afficher uniquement les nombres pairs du tableau arrayOfAugmentedNumbers
arrayOfAugmentedNumbers.forEach(aN => aN.isEven() && console.log(aN.value));

// * Générer un nouveau tableau arrayOfGroupsOfThree de tableaux de trois éléments maximum à partir de arrayOfAugmentedNumbers
// * Exemple : pour un tableau source [1, 3, 5, 7, 9, 11, 13, 15], on aura comme résultat [[1, 3, 5], [7, 9, 11], [13, 15]]
let arrayOfGroupsOfThree = [];
for (let i = 0; i < arrayOfAugmentedNumbers.length; i += 3) {
    arrayOfGroupsOfThree.push(arrayOfAugmentedNumbers.slice(i, i + 3));
}

// * Afficher le tableau arrayOfGroupsOfThree de façon lisible, en affichant uniquement la valeur des AugmentedNumber. Nous ne voulons que du texte dans la console
// ! Exemple incorrect : [[AugmentedNumber(), AugmentedNumber() ...] ...]
// ! Exemple incorrect : [[{'value': 1}, {'value': 3}, ...] ...]
// * Exemple correct : [[1, 3, 4], [6, 8, 9], ...]
console.log(arrayOfGroupsOfThree.map(a => a.map(aN => aN.value).toString()));
console.log(JSON.stringify(
    arrayOfGroupsOfThree.map(
        a => a.map(
            aN => aN.value
        )
    )
));

// * Vérifier si un des sous-tableaux de arrayOfGroupsOfThree contient au moins un chiffre pair, et afficher le résultat
// * Exemple : Group 0 contains at least one even number
arrayOfGroupsOfThree.forEach((group, i) => {
    if (group.some(aN => aN.isEven())) {
        console.log(`Group ${i} contains some even numbers`);
    }
});

let lionKingData = {
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers",
    actors: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Paul Freeman", "James Earl Jones", "Jeremy Irons", "Paul Freeman"],
    genres: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    duration: 88,
    synopsis: "A young lion prince named Simba is born into a pride of lions, and quickly learns to live by the example of his elders. But when his past comes to haunt him, Simba may have to work with the tiger Momok to protect the kingdom from a rival prince."
};

let matrixData = {
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    genres: ["Action", "Sci-Fi"],
    duration: 136,
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
};

let avatarData = {
    title: "Avatar",
    year: 2009,
    director: "James Cameron",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
    genres: ["Action", "Adventure", "Fantasy"],
    duration: 162,
    synopsis: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
};

// * Afficher le titre du premier film
console.log(lionKingData.title);

// * Afficher tous les genres du premier film (séparés par une virgule)
console.log(lionKingData.genres.join(", "));

// * Afficher les données du film Matrix sur plusieurs lignes. Nous ne voulons que du texte dans la console.
// * Exemple : title: The Matrix
for (const key in matrixData) {
    console.log(`${key}: ${matrixData[key]}`);
}

class Movie {
    constructor(data) {
        this.title = data.title;
        this.year = data.year;
        this.director = data.director;
        this.actors = data.actors;
        this.genres = data.genres;
        this.duration = data.duration;
        this.synopsis = data.synopsis;
    }

    getDurationInSeconds() {
        return this.duration * 60;
    }

    getGenres() {
        return this.genres.join(", ");
    }

    getActors() {
        return this.actors.join(", ");
    }

    isMovieLongerThan(duration) {
        return this.duration > duration;
    }

    isMovieFromAfter2000() {
        return this.year > 2000;
    }
}

// * Ecrire les méthodes isMovieLongerThan() et isMovieFromAfter2000() de la classe Movie

// * Créer un nouveau tableau arrayOfMovies constitué de Movie à partir des données des films
let arrayOfMovies = [new Movie(lionKingData), new Movie(matrixData), new Movie(avatarData)];

// * Afficher le nombre de secondes de chaque film du tableau arrayOfMovies
// * Exemple : The Matrix's duration : 8160 seconds
arrayOfMovies.forEach(m => console.log(m.title + ' duration : ' + m.getDurationInSeconds() + ' seconds'));

// * Afficher les trois premiers acteurs de chaque film (séparés par une virgule ET un espace)
// * Exemple : The Matrix's actors : Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss...
arrayOfMovies.forEach(m => console.log(m.title + ' actors : ' + m.actors.slice(0, 3).join(', ') + '...'));

// * Afficher les titres des films sortis après 2000
arrayOfMovies.forEach(m => m.isMovieFromAfter2000() && console.log(m.title));

// * Afficher le titre du film le plus ancien
console.log(arrayOfMovies.sort((a, b) => a.year - b.year)[0].title);

// * Trier les films par nombre de genres croissant (du film qui a le moins de genres, à celui qui en a le plus). N'afficher que leur titre.
// * Résultat attendu : The Matrix -> Avatar -> The Lion King
console.log(arrayOfMovies.sort((a, b) => a.genres.length - b.genres.length).map(m => m.title).join(' -> '));