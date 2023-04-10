import { morseToEng, morseToEngValid } from "./morseToEnglish";
import { engToMorse, engToMorseValid } from "./englishToMorse";

const englishTextBox = document.querySelector("#english");
const morseTextBox = document.querySelector("#morseCode");
const clearBtn = document.querySelector("#clearBtn");

// translation when input is entered by user
englishTextBox.addEventListener("input", () => {
    const englishText = englishTextBox.value.trim();
    const morseTranslation = engToMorse(englishText);
    morseTextBox.value = morseTranslation;
    try {
        engToMorseValid(englishText);
    } catch (error) {
        document.getElementById("error-message").innerHTML = error.message;
    }
});

morseTextBox.addEventListener("input", () => {
    const morseText = morseTextBox.value.trim();
    const englishTranslation = morseToEng(morseText);
    englishTextBox.value = englishTranslation;
    try {
        morseToEngValid(morseText);
    } catch (error) {
        document.getElementById("error-message").innerHTML = error.message;
    }
});
// clear btn clears textboxes
clearBtn.addEventListener("click", () => {
    englishTextBox.value = "";
    morseTextBox.value = "";
    console.log("clicked");
});
