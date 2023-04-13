import {
    engToMorse,
    engToMorseValid,
    noInputError,
    invalidInputError,
} from "./englishToMorse";

describe("Test cases for function which translates English to Morse Code", () => {
    it("correctly translates one english letter to morse code", () => {
        expect(engToMorse("a")).toBe(".-");
        expect(engToMorse("Z")).toBe("--..");
        expect(engToMorse("0")).toBe("-----");
    });
    it("correctly translate one english word to morse code", () => {
        expect(engToMorse("english")).toBe(". -. --. .-.. .. ... ....");
        expect(engToMorse("morse")).toBe("-- --- .-. ... .");
        expect(engToMorse("0 ZERO")).toBe("-----   --.. . .-. ---");
    });
    it("correctly translate one english sentence to morse code", () => {
        expect(engToMorse("english to morse")).toBe(
            ". -. --. .-.. .. ... ....   - ---   -- --- .-. ... ."
        );
        expect(engToMorse("one english sentence")).toBe(
            "--- -. .   . -. --. .-.. .. ... ....   ... . -. - . -. -.-. ."
        );
    });
});

describe("Test cases for error handling English to Morse", () => {
    it("should throw error if input is empty", () => {
        expect(() => {
            engToMorseValid("");
        }).toThrowError(noInputError);
        expect(() => {
            engToMorseValid();
        }).toThrowError(noInputError);
    });
    it("should throw error if any character other than A-Z, a-z is entered", () => {
        expect(() => {
            engToMorseValid("//ncorrect");
        }).toThrowError(invalidInputError);
        expect(() => {
            engToMorseValid("!!");
        }).toThrowError(invalidInputError);
    });
});
