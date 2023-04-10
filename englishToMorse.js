import { morseAlphabet } from "./morseDictionary";
// english to morse const
export const noInputError = new Error("Input cannot be empty");
export const invalidInputError = new Error(
    "Input may only consist of letters A-Z, a-z and single spaces"
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
    if (!/^[A-Za-z\s]*$/.test(input)) {
        throw invalidInputError;
    }
};
