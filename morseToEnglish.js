import { swappedMorseAlphabet } from "./morseDictionary.js";

export const noMorseInputError = new Error(
    "Start translation by typing into English or Morse Code section"
);
export const morseSpaceError = new Error(
    "Please enter 1 space between letters and 3 spaces between words"
);
export const invalidMorseInput = new Error(
    "The morse code combination you have entered is not a valid combination"
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

    // not a dot, dash or space
    for (let i = 0; i < input.length; i++) {
        const morseChar = input[i];

        // Check if input is a valid Morse code character
        if (
            !swappedMorseAlphabet.hasOwnProperty(morseChar) &&
            morseChar !== " "
        ) {
            throw invalidMorseInput;
        }
    }
    // if there is 2 spaces or if there are more than 3 spaces between input
    if (
        input.match(" ") &&
        !input.match(/(?<!\s)\s{1}(?!\s)|(?<!\s)\s{3}(?!\s)/)
    ) {
        throw morseSpaceError;
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
