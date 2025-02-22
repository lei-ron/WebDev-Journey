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
  10: [
    "the sun set over the mountains casting a golden glow",
    "she smiled brightly knowing today was going to be perfect",
    "the storm clouds gathered darkening the sky with impending rain",
    "a bird flew past its wings cutting through the cold wind",
    "the aroma of fresh coffee filled the air waking everyone",
    "they walked hand in hand enjoying the peaceful evening walk",
    "the music played softly creating a calm relaxing atmosphere",
    "the dog barked loudly chasing after the bouncing ball",
    "he stared at the horizon lost in thoughts of the past",
    "the books on the shelf were arranged in perfect order",
  ],
  20: [
    "the car screeched to a halt narrowly avoiding the pedestrian who suddenly stepped out from behind the parked truck",
    "she ran through the crowded streets her heart racing as she desperately searched for the lost wallet",
    "the wind howled through the trees shaking the branches and causing the leaves to scatter in all directions",
    "he carefully placed the delicate vase on the shelf making sure it wouldn't fall or get damaged in any way",
    "as the clock struck midnight the party came to an end leaving everyone to make their way home",
    "the sun rose over the ocean painting the sky with shades of orange pink and soft purple hues",
    "they walked down the narrow alley trying to avoid the puddles and debris scattered across the cobblestone path",
    "the children laughed and played their voices echoing through the park as they ran after the ice cream truck",
    "she opened the letter with trembling hands unsure of what the contents might reveal about her future",
    "the professor explained the complex theory in simple terms making sure every student understood the fundamental concepts clearly",
  ],
  40: [
    "the train rumbled along the tracks its powerful engine pulling several cars behind it as passengers gazed out the windows watching the landscape pass by in a blur of green fields distant hills and the occasional small town",
    "they sat by the campfire roasting marshmallows and telling stories under a sky full of stars the sound of crackling wood filling the air as the warmth of the fire spread and the night grew colder",
    "as the clock ticked closer to midnight they exchanged nervous glances waiting for the moment when everything would change unsure of the consequences but certain that what was about to happen would shape their futures forever",
    "the city was alive with activity bustling with people rushing to work street vendors calling out their wares and the hum of traffic in the background while the tall buildings cast long shadows across the busy streets",
    "he looked at the painting mesmerized by the intricate details and vivid colors each brushstroke telling a story of its own as if the artist had poured their soul into the work capturing a moment in time that would never fade",
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
  // Show the result section
  document.querySelector(".tpdetails").style.display = "block";
  document.querySelector(".tpdetails .wpm span").textContent = wpmTag.innerText;
  document.querySelector(".tpdetails .mistakes span").textContent =
    mistakeTag.innerText;

  let crdtTexts = [
    document.getElementById("crdt1"),
    document.getElementById("crdt2"),
    document.getElementById("crdt3"),
    document.getElementById("crdt4"),
    document.getElementById("crdt5"),
    document.getElementById("crdt6"),
    document.getElementById("crdt7"),
    document.getElementById("crdt8"),
  ];

  let delayBetweenNames = 0; // Delay before next name starts (0.5s)
  let typingSpeed = 50; // Speed per letter in milliseconds

  function typeCredit(index) {
    if (index < crdtTexts.length) {
      let element = crdtTexts[index];
      if (element) {
        element.style.display = "block"; // Make element visible
        let text = element.textContent.trim(); // Get the original text
        element.textContent = ""; // Clear the text for typing effect

        let i = 0;
        function typeChar() {
          if (i <= text.length) {
            element.innerHTML =
              text.substring(0, i) + `<span class="cursor">|</span>`; // Add cursor
            i++;
            setTimeout(typeChar, typingSpeed); // Type next character
          } else {
            element.innerHTML = text; // Remove cursor after typing
            setTimeout(() => typeCredit(index + 1), delayBetweenNames); // Next name
          }
        }

        typeChar(); // Start typing animation
      }
    }
  }

  // Ensure credits container is visible before animation starts
  let creditsContainer = document.getElementById("credits-container");
  if (creditsContainer) creditsContainer.style.display = "block";

  // Start typing animation 1 second after results appear
  setTimeout(() => typeCredit(0), 500);
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

  // Hide the credits container
  document.getElementById("credits-container").style.display = "none";

  // Hide individual credits
  let crdtTexts = document.querySelectorAll("#credits-container p");
  crdtTexts.forEach((el) => {
    el.style.display = "none";
    el.innerHTML = el.dataset.text || el.innerText; // Reset text
  });
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
