// ! Sections.
// ? Explains functions and goals to apply.
// * Explains functionality of a set.
// Explains functionality of a line.

// ! Main title and start button section.
// ? Fade out start button and replace title after clicking start button.
function fadeOutSB() {
  //* This set/section selects elements or their given name such as class and id.
  let titleDiv = document.querySelector(".title");
  let box = document.getElementById("start-button");
  let title = titleDiv.querySelector("h1");

  // * Gives main title vanish animation.
  titleDiv.style.opacity = "0"; // "style" replicates css for JavaScript.
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)";

  //* Sets timer to activate functions.
  setTimeout(() => {
    // Changes title after start button clicked.
    title.textContent = "Select Mode";

    // * Resets animation style of title and re-apply for "Select Mode" title.
    title.style.animation = "none"; //  Resets animation from main title.
    void title.offsetWidth; // Force reflow to restart animation.
    title.style.animation =
      "typing 1.5s linear forwards, blink 0.75s step-end infinite";

    // * This part makes new title re-appear.
    titleDiv.style.opacity = "1";
    titleDiv.style.transform = "translate(-50%, -50%) scale(1)";
  }, 500); // Sets delay for select mode title appearing.

  // * Fade out start button.
  box.style.pointerEvents = "none";
  box.style.opacity = "0";
  box.style.transition = "opacity 0.5s ease-in-out";

  // * Removes start button after fading out.
  box.addEventListener(
    "transitionend",
    () => {
      box.style.display = "none";
      setTimeout(showNextButton, 500); // Show next button after delay.
    },
    { once: true } // Makes it only function once.
  );
}

// ? Apply transitions for start button upon page load.
window.onload = function () {
  showSB();
}; // Runs when the page loads.

function showSB() {
  let button = document.getElementById("start-button");
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables clicking and hovering for a while.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.

  // * Sets delays and timing.
  setTimeout(() => {
    button.style.display = "inline-block"; // Makes sure it's visible.
    button.style.transition =
      "transform 1s ease-in-out, opacity 0.8s ease-in-out";
    button.style.opacity = "1";
  }, 500); // Makes it visible.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(1)";
  }, 800); // Slowly scale back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 1800); // Enables clicking and hovering.
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 1800); // Time it resets.
}

// ! Select mode title and mode button section.
// ? Fades out mode buttons.
function fadeOutMB(buttonId) {
  let button = document.getElementById(buttonId);

  button.style.pointerEvents = "none";
  button.style.opacity = "0";
  button.style.transition = "opacity 0.5s ease-in-out";

  // * Removes mode buttons after fading out.
  button.addEventListener(
    "transitionend",
    () => {
      button.style.display = "none";
    },
    { once: true }
  );
}

// ? Removes title mode and mode buttons.
function fadeOutModes() {
  let titleDiv = document.querySelector(".title");
  let title = titleDiv.querySelector("h1");
  let buttons = document.querySelectorAll(
    "#mode-button1, #mode-button2, #mode-button3"
  );

  //* Fade out select mode title.
  titleDiv.style.opacity = "0";
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)";
  titleDiv.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

  // * Fade out all mode buttons.
  buttons.forEach((button) => {
    button.style.pointerEvents = "none";
    button.style.opacity = "0";
    button.style.transition = "opacity 0.5s ease-in-out";

    // * Removes mode buttons and select mode title after fade-out.
    button.addEventListener(
      "transitionend",
      () => {
        button.style.display = "none";
      },
      { once: true }
    );
  });
}

function changeBackground() {
  document.body.style.background =
    "url('misc/assets/bgimg2.png') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
}

document.getElementById("mode-button1").addEventListener("click", () => {
  changeBackground();
  fadeOutModes();
  playKBsound();
});

// ? Apply transitions for mode buttons upon appearing.
function showMB1() {
  let button = document.getElementById("mode-button1");

  // * Applies transition styles.
  button.style.display = "inline-block"; // Ensures it's visible.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables click and hover for a while.

  // * Delays and timings.
  setTimeout(() => {
    button.style.opacity = "1";
  }, 600); // Slowly makes button appear.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 800); // Slowly scale back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000); // Turns interaction on after delay. (Makes it clickable.)
  setTimeout(() => {
    button.style.transition = ""; // Removes transition.
    button.style.transform = ""; // Resets transform.
  }, 2000); // Time it resets.
}
function showMB2() {
  let button = document.getElementById("mode-button2");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1100);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 800);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}
function showMB3() {
  let button = document.getElementById("mode-button3");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1500);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 1000);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}

// ? Adds keyboard clicking sound when buttons are clicked.
function playKBsound() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
}
document
  .querySelectorAll("#mode-button1, #mode-button2, #mode-button3")
  .forEach((button) => {
    button.addEventListener("click", () => {
      fadeOutModes();
      playKBsound();
      // Play the sound effect when you click a button.
    });
  });

// ! Main game section.
function showMG() {
  let wrapper = document.querySelector(".main-game");
  wrapper.style.opacity = "0";
  wrapper.style.display = "block";
  wrapper.style.pointerEvents = "none";

  setTimeout(() => {
    wrapper.style.transition = "opacity 0.8s ease-in-out";
    wrapper.style.opacity = "1";

    console.log("Typing game appeared!");
  }, 500);

  setTimeout(() => {
    wrapper.style.pointerEvents = "auto";
  }, 500);

  resetGame(); // Ensure game resets and loads paragraph when shown
}

const paragraphs = {
  10: ["quick brown fox jumps over the lazy dog try again hello world"],
  20: [
    "typing fast and accurately is a useful skill that improves productivity and reduces mistakes with practice it becomes second nature",
  ],
  40: [
    "typing is an essential skill in the digital age improving speed and accuracy helps students and professionals work efficiently practice daily to develop muscle memory and improve performance over time using proper techniques reduces strain and increases productivity",
  ],
};

let currentLength = 20; // Default to 10 words

function setParagraphLength(length) {
  currentLength = length;
  loadParagraph();
  resetGame(); // Reset the game when paragraph length changes
}

const typingText = document.querySelector(".tpbox p");
const inpField = document.querySelector(".main-game .tpinput");
const tryAgainBtn = document.querySelector(".main-game button");
const timeTag = document.querySelector(".timer span b");
const mistakeTag = document.querySelector(".mistakes span");
const wpmTag = document.querySelector(".wpm span");

let typingTime = 0; // Tracks active typing time
let typingActive = false; // Flag to check if typing is happening
let timer;
let charIndex = (mistakes = isTyping = 0);

function loadParagraph() {
  const paragraphList = paragraphs[currentLength];
  const randomIndex = Math.floor(Math.random() * paragraphList.length);
  const selectedParagraph = paragraphList[randomIndex];

  typingText.innerHTML = "";
  selectedParagraph.split("").forEach((char) => {
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });

  typingText.querySelectorAll("span")[0].classList.add("active");

  // Reset input field and focus it
  inpField.value = "";
  inpField.focus(); // Ensure it’s focused
}

function startTimer() {
  if (!typingActive) {
    typingActive = true;
    timer = setInterval(() => {
      typingTime++; // Increase only when typing is active
      document.getElementById("timeTag").innerText = typingTime;
    }, 1000);
  }
}

function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];

  if (charIndex < characters.length) {
    startTimer(); // Start the timer when the user begins typing

    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }

    characters.forEach((span) => span.classList.remove("active"));
    if (charIndex < characters.length) {
      characters[charIndex].classList.add("active");
    } else {
      clearInterval(timer); // Stop counting time when done
      typingActive = false;
      showResults();
    }

    document.getElementById("wpmTag").innerText =
      Math.round(((charIndex - mistakes) / 5 / typingTime) * 60) || 0;
    document.getElementById("mistakeTag").innerText = mistakes;
  }
}

let typingTimeout;

inpField.addEventListener("input", () => {
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    clearInterval(timer);
    typingActive = false;
  }, 2000); // Stops counting if user doesn't type for 2 sec
});

function showResults() {
  document.querySelector(".tpdetails").style.display = "block";
  document.querySelector(".tpdetails .wpm span").textContent = wpmTag.innerText;
  document.querySelector(".tpdetails .mistakes span").textContent =
    mistakeTag.innerText;

  let crdtText = document.getElementById("crdt");
  crdtText.style.display = "block";
}

function resetGame() {
  loadParagraph(); // Load a new paragraph
  clearInterval(timer);

  typingTime = 0;
  charIndex = mistakes = 0;
  typingActive = false;
  inpField.value = "";
  inpField.focus(); // Ensure input field is focused

  // Reset displayed stats
  document.getElementById("timeTag").innerText = "0";
  document.getElementById("wpmTag").innerText = "0";
  document.getElementById("mistakeTag").innerText = "0";

  // Hide the results box
  document.querySelector(".tpdetails").style.display = "none";
}

loadParagraph();
inpField.addEventListener("input", initTyping);

function showPL1() {
  let button = document.getElementById("PL-button1");

  // * Applies transition styles.
  button.style.display = "inline-block"; // Ensures it's visible.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables click and hover for a while.

  // * Delays and timings.
  setTimeout(() => {
    button.style.opacity = "1";
  }, 600); // Slowly makes button appear.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 800); // Slowly scale back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000); // Turns interaction on after delay. (Makes it clickable.)
  setTimeout(() => {
    button.style.transition = ""; // Removes transition.
    button.style.transform = ""; // Resets transform.
  }, 2000); // Time it resets.
}
function showPL2() {
  let button = document.getElementById("PL-button2");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1100);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 800);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}
function showPL3() {
  let button = document.getElementById("PL-button3");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1500);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 1000);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}
