import { swappedMorseAlphabet } from "./morseDictionary";

export const noMorseInputError = new Error("Input cannot be empty");
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
            .map((indiChar) => [swappedMorseAlphabet[indiChar]])
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
    if (!/^[\s.-]/g.test(input)) {
        throw invalidMorseInput;
    }

    // if there is 2 spaces or if there are more than 3 spaces between input

    if (input.includes("  ") || input.match(/\s{4,}/)) {
        throw morseSpaceError;
    }
};
