import { swappedMorseAlphabet } from "./morseDictionary.js";

export const noMorseInputError = new Error(
    "Start translation by typing into English or Morse Code section"
);
export const morseSpaceError = new Error(
    "Please enter 1 space between letters and 3 spaces between words"
);

export const invalidMorseAlphabet = new Error(
    "The combination you have entered is not a valid morse code alphabet"
);

// MORSE FUNCTION
export const morseToEng = (input) => {
    // split into words, rid of 3 spaces
    let split = input.split("   ");
    // split characters by space, exchange for letter, and join, then convert to uppercase => returns words
    let code = split.map((word) =>
        word
            .split(" ")
            .map((char) => [swappedMorseAlphabet[char]])
            .join("")
            .toUpperCase()
    );
    // join words with single space
    let result = code.join(" ");
    // remove space from both side of string
    return result.trim();
};

// TEST IF MORSE INPUT IF VALID
export const morseToEngValid = (input) => {
    // ERROR HANDLING
    //  if no input throw an error
    if (!input) {
        throw noMorseInputError;
    }
    // if there is 2 spaces or if there are more than 3 spaces between input
    if (/(?<! ) {2}(?! )/.test(input) || / {4,}/.test(input)) {
        throw morseSpaceError;
    }

    // not in alphabet

    const split = input.split(" ");
    const filter = split.filter((x) => x != "");
    for (let i = 0; i < filter.length; i++) {
        // Check if input is a valid Morse code character
        if (!swappedMorseAlphabet.hasOwnProperty(filter[i])) {
            throw invalidMorseAlphabet;
        }
    }

    // IF NOT USING REGEX USE BELOW
    // console.log(input.split("   "));
    // console.log(
    //     input
    //         .split("   ")
    //         .every((n) => n.charAt(0) !== " " && n.charAt(n.length - 1) !== " ")
    // ); maps out three space

    // console.log(
    //     input.split("   ").map((n) => {
    //         return n.split(" ");
    //     })
    // ); maps out one space - same logic as three space
};
