import { morseAlphabet } from "./morseDictionary.js";
// english to morse const
export const noInputError = new Error(
    "Start translation by typing into English or Morse Code section"
);
export const invalidInputError = new Error(
    "Input may only consist of letters A-Z, a-z, numbers 0-9 and single spaces"
);

// FUNCTION
export const engToMorse = (input) => {
    // split input and to uppercase
    let split = input.toUpperCase().split("");
    // replace all letters with morse + space or double space
    let code = split.map((char) => {
        return morseAlphabet[char] ? morseAlphabet[char] + " " : "  ";
    });
    // join string back
    let result = code.join("");
    // remove space from both side of string
    return result.trim();
};

// ERROR HANDLING
export const engToMorseValid = (input) => {
    // if no input throw an error
    if (!input) {
        throw noInputError;
    }
    // if input includes anything other than A-Z a-z or space throw new error
    if (!/^[A-Za-z0-9\s]*$/.test(input)) {
        throw invalidInputError;
    }
};
