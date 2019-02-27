/* 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/
var firstCoffee = {
    name: "Mocka",
    strength: "strong",
    flavour: "intensive",
    milk: false,
    sugar: "No",

}
console.log(firstCoffee.sugar);

/* 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/
var firstMovie = {
    title: "BREAKING THE WAVES",
    actors: " Emily Watson",
    actors1: ["Stellan Skarsgård", 8],
    director: "Lars von Trier",
    genre: "drama",
    popularity: 4.371,
};
//console.log(firstMovie.actors1);
console.log(Object.values(firstMovie));

/* 3. Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository, a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
*/
function program(a, b, c, d) {
    var firstProgram = {
        description: a,
        "programming language": b,
        gitRepository: c,
        boolean: d,
    };
    return firstProgram;
};
c1 = program("OOP", "JavaScript", "MarinaPesic", true);
console.log(c1.description);


/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.
*/