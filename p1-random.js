/*
    CIT 281 Project 1
    Name: Tony Yu
*/

// Returns a random number between min (inclusive) and max (exclusive)

console.log(str_output(5,26));

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function str_output(min, max) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < getRandomInteger(min, max); ++i) {
        let loc = getRandomInteger(0, 26);
        result += letters[loc];
    }

    return result
}