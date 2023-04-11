import { morseToEng, morseToEngValid } from "./morseToEnglish.js";
import { engToMorse, engToMorseValid } from "./englishToMorse.js";

const englishTextBox = document.querySelector("#english");
const morseTextBox = document.querySelector("#morseCode");
const clearBtn = document.querySelector("#clearBtn");
let errorPresent = false;
let errorMessage = "";

// translation when input is entered by user
englishTextBox.addEventListener("input", () => {
    const englishText = englishTextBox.value.trim();
    const morseTranslation = engToMorse(englishText);
    morseTextBox.value = morseTranslation;
    try {
        if (errorPresent) {
            errorPresent = false;
            document.getElementById("error-message").innerHTML = "";
        }
        engToMorseValid(englishText);
    } catch (error) {
        errorPresent = true;
        errorMessage = error.message;
        document.getElementById("error-message").innerHTML = errorMessage;
    }
});

morseTextBox.addEventListener("input", () => {
    const morseText = morseTextBox.value.trim();
    const englishTranslation = morseToEng(morseText);
    englishTextBox.value = englishTranslation;
    try {
        if (errorPresent) {
            errorPresent = false;
            document.getElementById("error-message").innerHTML = "";
        }
        morseToEngValid(morseText);
    } catch (error) {
        errorPresent = true;
        errorMessage = error.message;
        document.getElementById("error-message").innerHTML = errorMessage;
    }
});
// clear btn clears textboxes
clearBtn.addEventListener("click", () => {
    englishTextBox.value = "";
    morseTextBox.value = "";
    console.log("clicked");
});
