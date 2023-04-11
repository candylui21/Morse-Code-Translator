import { morseToEng, morseToEngValid } from "./morseToEnglish";
import {
    noMorseInputError,
    morseSpaceError,
    invalidMorseInput,
} from "./morseToEnglish";

describe("Test cases for function which translates Morse Code to English", () => {
    it("correctly translates one morse code letter to english", () => {
        expect(morseToEng(".-")).toBe("A");
        expect(morseToEng("--..")).toBe("Z");
        expect(morseToEng("-----")).toBe("0");
    });
    it("correctly translate one morse word to english", () => {
        expect(morseToEng(".... .- .--. .--. -.--")).toBe("HAPPY");
        expect(morseToEng("-.. .- -.-- ...")).toBe("DAYS");
        expect(morseToEng("-----   --.. . .-. ---")).toBe("0 ZERO");
    });
    it("correctly translate one morse sentence to english", () => {
        expect(
            morseToEng(
                "-- --- .-. ... .   -.-. --- -.. .   - .-. .- -. ... .-.. .- - --- .-."
            )
        ).toBe("MORSE CODE TRANSLATOR");
        expect(morseToEng(".... --- .--   .- .-. .   -.-- --- ..-")).toBe(
            "HOW ARE YOU"
        );
    });
});

describe("Test cases for error handling Morse to English", () => {
    it("should throw error if input is empty", () => {
        expect(() => {
            morseToEngValid("");
        }).toThrowError(noMorseInputError);
        expect(() => {
            morseToEngValid();
        }).toThrowError(noMorseInputError);
    });
    it("should throw error if space combination is 2 or 4+", () => {
        expect(() => {
            morseToEngValid(".-  .-");
        }).toThrowError(morseSpaceError);
        expect(() => {
            morseToEngValid(".-    .-");
        }).toThrowError(morseSpaceError);
    });

    it("should throw error if combination is not valid morse code alphabet", () => {
        expect(() => {
            morseToEngValid("1");
        }).toThrowError(invalidMorseInput);
        expect(() => {
            morseToEngValid("h");
        }).toThrowError(invalidMorseInput);
        expect(() => {
            morseToEngValid(".    /");
        }).toThrowError(invalidMorseInput);
    });
});
