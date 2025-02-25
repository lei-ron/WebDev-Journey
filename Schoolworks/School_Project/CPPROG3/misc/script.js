// TODO Comments are made for the reporters of the project I made.

// ! Sections.
// ? Explains functions and purposes.
// * Explains functionality of a set.
// Explains functionality of a line.

// ! Main title and start button section.
// ? Fade out start button and replace title after clicking start button.
function fadeOutSB() {
  //* This set/section selects elements or their given name such as class and id.
  let titleDiv = document.querySelector(".title"); // This line selects the title's div class.
  let box = document.getElementById("start-button"); // Selects start button's ID.
  let title = titleDiv.querySelector("h1"); // Selects h1 element from title.

  // * Gives main title vanish animation.
  // * Uses CSS properties in JavaScript.
  titleDiv.style.opacity = "0"; // Starts off invisible.
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)"; // Starts small (90% size).

  // * Sets timer to activate functions.
  setTimeout(() => {
    title.textContent = "Select Mode"; // Changes title to Select mode after start button clicked.

    // * Resets animation style of title and re-apply for "Select Mode" title.
    title.style.animation = "none"; //  Resets animation from main title.
    void title.offsetWidth; // Forces reflow to restart animation.
    title.style.animation =
      "typing 1.5s linear forwards, blink 0.75s step-end infinite"; // Re-applies typing effect animation.

    // * Makes new title (Select Mode) re-appear.
    titleDiv.style.opacity = "1"; // Makes it visible (100% opacity).
    titleDiv.style.transform = "translate(-50%, -50%) scale(1)"; // Turns into full size.
  }, 500); // Sets delay for select mode title appearing.

  // * Fade out start button.
  box.style.pointerEvents = "none"; // Disables clicking on the button and hovering effect.
  box.style.opacity = "0"; // Starts off invisible.
  box.style.transition = "opacity 0.5s ease-in-out"; // Sets timed transition.

  // * Removes start button after fading out.
  box.addEventListener(
    "transitionend",
    () => {
      box.style.display = "none"; // Removes start button's existence.
      setTimeout(showNextButton, 500); // Shows next button after delay.
    },
    { once: true } // Makes it only function once.
  );
}

// ? Apply transitions for start button upon page load.
window.onload = function () {
  showSB();
}; // Runs transition effect when the page loads.

function showSB() {
  let button = document.getElementById("start-button"); // Selects start button's ID.

  // * Applies CSS properties.
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables clicking and hovering for a while.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.

  // * Sets delays and timing.
  setTimeout(() => {
    button.style.display = "inline-block"; // Makes sure it's visible.
    button.style.transition =
      "transform 1s ease-in-out, opacity 0.8s ease-in-out"; // Applies timed transition effect.
    button.style.opacity = "1";
  }, 500); // Makes it visible in 5 milliseconds.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(1)";
  }, 800); // Slowly scales it back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 1800); // Enables clicking and hovering.
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 1800); // Time it resets transitions/animations.
}

// ? Adds keyboard clicking sound when buttons are clicked.
function playKBsound() {
  var audio = document.getElementById("audio"); // Selects audio's ID.
  audio.currentTime = 0; // Reset's playback from the beginning.
  audio.play();
}

// * Selects multiple ID's of buttons.
document
  .querySelectorAll(
    "#start-button, #mode-button1, #mode-button2, #mode-button3, #PL-button1, #PL-button2, #PL-button3"
  )

  // * Sets where it functions.
  .forEach((button) => {
    // Sets clicking the activation of the function.
    button.addEventListener("click", () => {
      playKBsound(); // Play the sound effect when you click a button.
    });
  });

// ! Select mode title and mode button section.
// ? Apply transitions for mode buttons upon appearing.
function showMB1() {
  let button = document.getElementById("mode-button1"); // Selects mode button's ID.

  // * Applies transition animation.
  button.style.display = "inline-block"; // Ensures it's visible.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out"; // Sets timed animation.
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables clicking and hovering animation.

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

// ? All comments also applies to showMB2 and showMB3.
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
    button.style.transform = "translate(-50%, -50%) scale(.95)";
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
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 1000);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}

// ? Removes title mode and mode buttons.
function fadeOutModes() {
  let titleDiv = document.querySelector(".title"); // Selects title's div class.
  let title = titleDiv.querySelector("h1"); // Selects H1 element.
  let buttons = document.querySelectorAll(
    "#mode-button1, #mode-button2, #mode-button3"
  ); // Selects multiple mode buttons.

  //* Fade out select mode title.
  titleDiv.style.opacity = "0"; // Starts invisible.
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)"; // Starts smaller (90% size).
  titleDiv.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"; // Sets timed animation.

  // * Fade out all mode buttons.
  buttons.forEach((button) => {
    button.style.pointerEvents = "none"; // Disables clicking and hovering animation.
    button.style.opacity = "0"; // Starts invisible.
    button.style.transition = "opacity 0.5s ease-in-out"; // Sets timed animation.

    // * Removes select mode title after fade-out.
    button.addEventListener(
      "transitionend",
      () => {
        button.style.display = "none"; // Removes select mode title elements.
      },
      { once: true } // Sets it to function only once.
    );
  });
}

// ? Fades out mode buttons, links and settings.
function fadeOutMB(buttonId) {
  let button = document.getElementById(buttonId); // Selects mode button's ID.

  button.style.pointerEvents = "none"; // Disables clicking and hovering animation.
  button.style.opacity = "0"; // Removes visibility
  button.style.transition = "opacity 0.5s ease-in-out"; // Sets timed animation.

  // * Removes mode buttons after fading out.
  button.addEventListener(
    "transitionend",
    () => {
      button.style.display = "none";
    },
    { once: true }
  );

  /* Also fade out the link and setting.
  fadeOutLS(); */
}

/* Fades out links and settings.
function fadeOutLS() {
  let linkSetting = document.querySelector(".linksetting"); // Selects link and setting's div.

  if (linkSetting) {
    linkSetting.style.pointerEvents = "none"; // Disables interaction.
    linkSetting.style.opacity = "0"; // Fades out.
    linkSetting.style.transition = "opacity 0.5s ease-in-out"; // Applies smooth transition.

    linkSetting.addEventListener(
      "transitionend",
      () => {
        linkSetting.style.display = "none"; // Hides after transition.
      },
      { once: true } // Makes sure it functions only once.
    );
  }
} */

// ? Changes background image upon clicking a mode button.
function changeBackground() {
  // * Finds image file location.
  document.body.style.background =
    "url('misc/assets/bgimg2.png') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundColor = "#212121";
}

// * Find's element to activate function.
document.getElementById("mode-button1").addEventListener("click", () => {
  changeBackground(); // Sets clicking to activate function.
});

// ! Main game section.
// ? Makes main game appear after mode buttons are clicked and disappeared.
function showMG() {
  let wrapper = document.querySelector(".main-game");

  wrapper.style.opacity = "0";
  wrapper.style.display = "block";
  wrapper.style.pointerEvents = "none";

  setTimeout(() => {
    wrapper.style.transition = "opacity 0.8s ease-in-out";
    wrapper.style.opacity = "1";
  }, 500);

  setTimeout(() => {
    wrapper.style.pointerEvents = "auto";
  }, 500);

  resetGame(); // Makes sure the game starts on typing.
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

let currentLength = 20; // Defaults to 20 words.

function setParagraphLength(length) {
  currentLength = length;
  loadParagraph();
  resetGame(); // Resets the game when paragraph length changes.
}

const typingText = document.querySelector(".tpbox p");
const inpField = document.querySelector(".main-game .tpinput");
const tryAgainBtn = document.querySelector(".main-game button");
const timeTag = document.querySelector(".timer span b");
const mistakeTag = document.querySelector(".mistakes span");
const wpmTag = document.querySelector(".wpm span");

let typingTime = 0; // Tracks active typing time.
let typingActive = false; // Flag to check if typing is happening.
let timer;
let charIndex = (mistakes = isTyping = 0); // Checks mistakes.

function loadParagraph() {
  const paragraphList = paragraphs[currentLength]; // Loads given paragraphs based on lengths.
  const randomIndex = Math.floor(Math.random() * paragraphList.length); // Randomizes paragraph on clicking.
  const selectedParagraph = paragraphList[randomIndex]; // Selects current paragraph upon typing.

  typingText.innerHTML = ""; // Ensures it types nothing.
  selectedParagraph.split("").forEach((char) => {
    let span = `<span>${char}</span>`; // Wraps each character in a <span>.
    typingText.innerHTML += span;
  }); // Typing adds span.

  typingText.querySelectorAll("span")[0].classList.add("active"); // Finds first span element.

  // Reset input field and make it empty.
  inpField.value = "";
  inpField.focus(); // Ensure it’s focused and stays even without text.
}

function startTimer() {
  if (!typingActive) {
    typingActive = true; // Checks if you're typing.
    timer = setInterval(() => {
      typingTime++; // Increases time spent when typing is active.
      document.getElementById("timeTag").innerText = typingTime;
    }, 1000); // Times the timer by per second when active typing.
  }
}

function initTyping() {
  let characters = typingText.querySelectorAll("span"); // Selects span as typing text.
  let typedChar = inpField.value.split("")[charIndex]; // Gets the current typing letter.

  if (charIndex < characters.length) {
    startTimer(); // Start the timer when the user begins typing.

    // * Handles backspacing and character validation.
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--; // Sets backspace to no char typed and removes last typed char.
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--; // Removes mistake count if removing an incorrect character.
        }
        characters[charIndex].classList.remove("correct", "incorrect"); // Resets character styling.
      }
    } else {
      // * Indicates what character user typed.
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct"); // Lists as correct.
      } else {
        mistakes++; // Counts mistakes.
        characters[charIndex].classList.add("incorrect"); // Lists as incorrect.
      }
      charIndex++; // Moves to the next character upon typing.
    }

    characters.forEach((span) => span.classList.remove("active"));
    if (charIndex < characters.length) {
      characters[charIndex].classList.add("active");
    } else {
      clearInterval(timer); // Stops counting time when done.
      typingActive = false;
      showResults(); // Activates show result function.
    }

    document.getElementById("wpmTag").innerText =
      Math.round(((charIndex - mistakes) / 5 / typingTime) * 60) || 0;
    document.getElementById("mistakeTag").innerText = mistakes;
  } // Counts the result.
}

let typingTimeout;

inpField.addEventListener("input", () => {
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    clearInterval(timer);
    typingActive = false;
  }, 2000); // Stops counting if user doesn't type for 2 sec.
});

function resetGame() {
  loadParagraph(); // Loads a new paragraph.
  clearInterval(timer); // Stops timer.

  // * Resets everything on default.
  typingTime = 0;
  charIndex = mistakes = 0;
  typingActive = false;
  inpField.value = "";
  inpField.focus(); // Ensure input field is focused. (Current character.)

  //* Reset displayed stats. (From prev record)
  document.getElementById("timeTag").innerText = "0";
  document.getElementById("wpmTag").innerText = "0";
  document.getElementById("mistakeTag").innerText = "0";

  document.querySelector(".tpdetails").style.display = "none"; // Hides the results box.

  document.getElementById("credits-container").style.display = "none"; // Hides the credits container.

  let crdtTexts = document.querySelectorAll("#credits-container p"); // Hides individual's credits.
  crdtTexts.forEach((el) => {
    el.style.display = "none";
    el.innerHTML = el.dataset.text || el.innerText; // Resets text animation.
  });
}

loadParagraph();
inpField.addEventListener("input", initTyping); // loads new paragraph.

// ! Paragraph length buttons section.
function showPL1() {
  let button = document.getElementById("PL-button1");

  // * Applies transition styles.
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  // * Delays and timings.
  setTimeout(() => {
    button.style.opacity = "1";
  }, 600);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 800);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
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
    button.style.transform = "translate(-50%, -50%) scale(.95)";
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
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 1000);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}

// ! Results form section.
function showResults() {
  // * Shows the result form.
  document.querySelector(".tpdetails").style.display = "block";
  document.querySelector(".tpdetails .wpm span").textContent = wpmTag.innerText;
  document.querySelector(".tpdetails .mistakes span").textContent =
    mistakeTag.innerText;

  // * Shows the credits.
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

  let delayBetweenNames = 0; // Delay before next name starts (0.5s).
  let typingSpeed = 30; // Speed per letter in milliseconds.

  // ? Sets animation on function upon activation for credits.
  function typeCredit(index) {
    if (index < crdtTexts.length) {
      let element = crdtTexts[index];
      if (element) {
        element.style.display = "block"; // Makes element visible.
        let text = element.textContent.trim(); // Gets the original text.
        element.textContent = ""; // Clears the text for typing effect.

        let i = 0;
        function typeChar() {
          if (i <= text.length) {
            element.innerHTML =
              text.substring(0, i) + `<span class="cursor">|</span>`; // Adds cursor.
            i++;
            setTimeout(typeChar, typingSpeed); // Types next character.
          } else {
            element.innerHTML = text; // Removes cursor after typing.
            setTimeout(() => typeCredit(index + 1), delayBetweenNames); // Next name delays.
          }
        }

        typeChar(); // Start typing animation.
      }
    }
  }

  // Ensure credits container is visible before animation starts.
  let creditsContainer = document.getElementById("credits-container");
  if (creditsContainer) creditsContainer.style.display = "block";

  // Start typing animation 1 second after results appear.
  setTimeout(() => typeCredit(0), 500);
}
